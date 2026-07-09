import api from './api';

export const isIOS = () => {
  if (typeof navigator === 'undefined') return false;
  const isIPad = /Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1;
  return (/iPad|iPhone|iPod/.test(navigator.userAgent) || isIPad) && !window.MSStream;
};

export const iosNavigateToDownload = (url) => {
  window.top.location.href = url;
};

export const fetchVideoDownloadUrl = async (videoId) => {
  const response = await api.get(`/videos/download-url/${videoId}`);
  return response.data.url;
};

export const fetchRecordingDownloadUrl = async (recordingId) => {
  const response = await api.get(`/recording/${recordingId}/download-url`);
  return response.data.url;
};

export const triggerBlobDownload = (blob, filename) => {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
};
