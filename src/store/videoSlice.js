import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { saveAs } from 'file-saver';
import api from '../utils/api';
import userService from '../services/userService';
import { isIOS, fetchVideoDownloadUrl, iosNavigateToDownload } from '../utils/downloadUtils';

export const downloadVideo = createAsyncThunk(
  'video/download',
  async (videoId, thunkAPI) => {
    try {
      thunkAPI.dispatch(setDownloadProgress({ videoId, progress: 0 }));

      if (isIOS()) {
        const presignedUrl = await fetchVideoDownloadUrl(videoId);
        thunkAPI.dispatch(setDownloadProgress({ videoId, progress: 100 }));
        iosNavigateToDownload(presignedUrl);
        return videoId;
      }

      const response = await api.get(`/videos/download/${videoId}`, {
        responseType: 'blob',
        onDownloadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const progress = total ? Math.round((loaded / total) * 100) : -1;
          thunkAPI.dispatch(setDownloadProgress({ videoId, progress }));
        },
      });

      const blob = new Blob([response.data], { type: 'video/mp4' });
      saveAs(blob, `video_${videoId}.mp4`);
      return videoId;
    } catch {
      return thunkAPI.rejectWithValue(`Failed to download video ${videoId}. Please try again.`);
    }
  }
);

export const fetchVideos = createAsyncThunk(
  'video/fetchVideos',
  async ({ page, size, courtId, cameraName, date, startTime, endTime }, { rejectWithValue }) => {
    try {
      const params = new URLSearchParams({ page: page || 0, size: size || 10 });
      if (courtId) params.append('courtId', courtId);
      if (cameraName) params.append('cameraName', cameraName);
      if (date) params.append('date', date);
      if (startTime) params.append('startTime', startTime);
      if (endTime) params.append('endTime', endTime);
      const response = await api.get(`/videos/meta?${params.toString()}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserPurchasedVideos = createAsyncThunk(
  'video/fetchUserPurchasedVideos',
  async (userId) => {
    try {
      return await userService.getPurchasedVideosByUser(userId);
    } catch {
      throw new Error('Failed to fetch purchased videos. Please try again.');
    }
  }
);

export const fetchVideoDetails = createAsyncThunk(
  'video/fetchVideoDetails',
  async (id, thunkAPI) => {
    try {
      const response = await api.get(`/videos/${id}`);
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue('Failed to fetch video details.');
    }
  }
);

export const initiateTrim = createAsyncThunk(
  'video/initiateTrim',
  async ({ videoId, startSeconds, endSeconds }, thunkAPI) => {
    try {
      const response = await api.post(`/videos/${videoId}/trim`, null, {
        params: { startSeconds, endSeconds },
      });
      return { trackingId: response.data, videoId };
    } catch {
      return thunkAPI.rejectWithValue('Failed to initiate trimming.');
    }
  }
);

export const pollTrimStatus = createAsyncThunk(
  'video/pollTrimStatus',
  async ({ trackingId, videoId }, thunkAPI) => {
    try {
      const response = await api.get('/videos/trim/status', { params: { trackingId } });
      return { statusInfo: response.data, videoId };
    } catch {
      return thunkAPI.rejectWithValue('Failed to fetch trimming status.');
    }
  }
);

export const fetchTrimmedVideo = createAsyncThunk(
  'video/fetchTrimmedVideo',
  async (videoId, thunkAPI) => {
    try {
      const response = await api.get(`/videos/${videoId}/trimmed`);
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue(`Failed to fetch trimmed video ${videoId}.`);
    }
  }
);

export const downloadTrimmedVideo = createAsyncThunk(
  'video/downloadTrimmedVideo',
  async ({ videoId, trimmedVideoUrl }, thunkAPI) => {
    try {
      if (isIOS()) {
        iosNavigateToDownload(trimmedVideoUrl);
        toast.success('Opening trimmed video download…');
        return videoId;
      }

      const response = await fetch(trimmedVideoUrl);
      if (!response.ok) throw new Error('Download failed.');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `trimmed_${videoId}.mp4`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success('Trimmed video downloaded successfully.');
      return videoId;
    } catch {
      return thunkAPI.rejectWithValue('Failed to download trimmed video.');
    }
  }
);

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    videos: [],
    totalPages: 0,
    currentPage: 0,
    trimmedVideos: {},
    userPurchasedVideos: [],
    downloadProgress: {},
    downloadStatus: {},
    trimming: { progress: 0, trimmedVideoUrl: '' },
    loading: {},
  },
  reducers: {
    setDownloadProgress(state, action) {
      const { videoId, progress } = action.payload;
      state.downloadProgress[videoId] = progress;
    },
    removeVideoFromList(state, action) {
      const id = action.payload;
      state.videos = state.videos.filter((v) => v.id !== id);
      state.userPurchasedVideos = state.userPurchasedVideos.filter((v) => v.id !== id);
    },
    resetDownloadProgress(state, action) {
      const videoId = action.payload;
      delete state.downloadProgress[videoId];
      delete state.downloadStatus[videoId];
    },
    resetVideoState(state) {
      state.videos = [];
      state.trimmedVideos = {};
      state.userPurchasedVideos = [];
      state.loading = {};
      state.downloadProgress = {};
      state.downloadStatus = {};
      state.trimming = { progress: 0, trimmedVideoUrl: '' };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => { state.loading.fetchVideos = true; })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading.fetchVideos = false;
        state.videos = action.payload.content;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.number;
      })
      .addCase(fetchVideos.rejected, (state) => { state.loading.fetchVideos = false; })

      .addCase(fetchVideoDetails.pending, (state) => { state.loading.fetchVideoDetails = true; })
      .addCase(fetchVideoDetails.fulfilled, (state, action) => {
        state.loading.fetchVideoDetails = false;
        state.videoDetails = action.payload;
      })
      .addCase(fetchVideoDetails.rejected, (state) => { state.loading.fetchVideoDetails = false; })

      .addCase(downloadVideo.pending, (state, action) => {
        const videoId = action.meta.arg;
        state.loading.downloadVideo = true;
        state.downloadStatus[videoId] = 'loading';
        state.downloadProgress[videoId] = 0;
      })
      .addCase(downloadVideo.fulfilled, (state, action) => {
        state.loading.downloadVideo = false;
        state.downloadStatus[action.payload] = 'success';
        state.downloadProgress[action.payload] = 100;
      })
      .addCase(downloadVideo.rejected, (state, action) => {
        state.loading.downloadVideo = false;
        state.downloadStatus[action.meta.arg] = 'failed';
        state.downloadProgress[action.meta.arg] = 0;
      })

      .addCase(fetchUserPurchasedVideos.pending, (state) => { state.loading.fetchUserPurchasedVideos = true; })
      .addCase(fetchUserPurchasedVideos.fulfilled, (state, action) => {
        state.loading.fetchUserPurchasedVideos = false;
        state.userPurchasedVideos = action.payload;
      })
      .addCase(fetchUserPurchasedVideos.rejected, (state) => { state.loading.fetchUserPurchasedVideos = false; })

      .addCase(fetchTrimmedVideo.pending, (state) => { state.loading.trimmedVideos = true; })
      .addCase(fetchTrimmedVideo.fulfilled, (state, action) => {
        state.loading.trimmedVideos = false;
        state.trimmedVideos = action.payload;
      })
      .addCase(fetchTrimmedVideo.rejected, (state) => { state.loading.trimmedVideos = false; })

      .addCase(initiateTrim.pending, (state) => {
        state.trimming.isTrimming = true;
        state.trimming.progress = 0;
        state.trimming.trimmedVideoUrl = '';
        state.trimming.error = null;
      })
      .addCase(initiateTrim.fulfilled, (state, action) => {
        state.trimming.trackingId = action.payload.trackingId;
      })
      .addCase(initiateTrim.rejected, (state, action) => {
        state.trimming.isTrimming = false;
        state.trimming.error = action.payload;
        toast.error(action.payload);
      })

      .addCase(pollTrimStatus.fulfilled, (state, action) => {
        const { statusInfo, videoId } = action.payload;
        const { videoProcessingStatus, videoProcessingProgress, preSignedUrl, videoProcessingErrorMessage } = statusInfo;
        if (videoProcessingStatus === 'PROCESSED') {
          state.trimming.isTrimming = false;
          state.trimming.progress = 100;
          state.trimmedVideos[videoId] = preSignedUrl;
          toast.success('Video trimming completed successfully!');
        } else if (videoProcessingStatus === 'FAILED') {
          state.trimming.isTrimming = false;
          state.trimming.error = videoProcessingErrorMessage || 'Trimming failed.';
          toast.error('Video trimming failed.');
        } else {
          state.trimming.progress = videoProcessingProgress;
        }
      })
      .addCase(pollTrimStatus.rejected, (state, action) => {
        state.trimming.isTrimming = false;
        state.trimming.error = action.payload;
        toast.error(action.payload);
      })

      .addCase(downloadTrimmedVideo.pending, (state) => { state.loading.downloadVideo = true; })
      .addCase(downloadTrimmedVideo.fulfilled, (state) => { state.loading.downloadVideo = false; })
      .addCase(downloadTrimmedVideo.rejected, (state, action) => {
        state.loading.downloadVideo = false;
        toast.error(action.payload);
      });
  },
});

export const { resetVideoState, setDownloadProgress, resetDownloadProgress, removeVideoFromList } = videoSlice.actions;
export default videoSlice.reducer;
