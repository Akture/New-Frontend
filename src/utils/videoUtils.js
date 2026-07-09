export const formatDuration = (seconds) => {
  const m = Math.floor(seconds / 60);
  return `${m} min${m !== 1 ? 's' : ''}`;
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
