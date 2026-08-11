export const formatDuration = (seconds) => {
  const m = Math.floor(seconds / 60);
  return `${m} min${m !== 1 ? 's' : ''}`;
};

export const formatClock = (seconds) => {
  const total = Math.max(0, Math.round(seconds ?? 0));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const mm = h > 0 ? String(m).padStart(2, '0') : String(m);
  const ss = String(s).padStart(2, '0');
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
};

export const formatDateTime = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat('en-US', {
    month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric',
  }).format(date);
};

export const getVideoThumbnail = (video) => {
  const keys = Object.keys(video.thumbnails || {});
  return keys.length > 0 ? video.thumbnails[keys[0]] : null;
};

const defaultTitlePattern = /^.+_video_\d{8}_\d{6}\.mp4$/;

export const getVideoTitle = (video) => {
  if (video.title && !defaultTitlePattern.test(video.title.trim())) {
    return video.title;
  }
  if (video.startTime) {
    const base = formatDateTime(video.startTime);
    return video.duration ? `${base} (${formatDuration(video.duration)})` : base;
  }
  return `Video ${video.id}`;
};

export const labelToDate = (label) => {
  const today = new Date();
  const offsets = { Today: 0, Yesterday: 1, 'Two Days Ago': 2 };
  today.setDate(today.getDate() - (offsets[label] ?? 0));
  return today.toISOString().split('T')[0];
};
