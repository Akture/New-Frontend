/**
 * Shape-tolerant accessors for a clip.
 *
 * The Explore page currently renders sample data (`ExploreData.js`), where a
 * clip carries `duration: '30:00'`, `price: '$2.99'` and a `time` label. When
 * the backend is connected, the same components receive API video records,
 * where `duration` is seconds, `price` is a number, and the timestamp arrives
 * as `startTime`. These helpers read either shape, so the overlay does not
 * need a rewrite when the data source changes.
 */

/** '30:00' | '1:05:30' | 1800 -> seconds */
export const toSeconds = (value) => {
  if (typeof value === 'number' && !isNaN(value)) return value;
  if (typeof value === 'string') {
    const parts = value.split(':').map((part) => parseInt(part, 10));
    if (parts.length && !parts.some(isNaN)) {
      if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
      if (parts.length === 2) return parts[0] * 60 + parts[1];
      return parts[0];
    }
  }
  return 0;
};

/** seconds -> 'M:SS' (or 'H:MM:SS' past an hour) */
export const formatClock = (seconds) => {
  const total = Math.max(0, Math.round(seconds ?? 0));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const mm = h > 0 ? String(m).padStart(2, '0') : String(m);
  return h > 0 ? `${h}:${mm}:${String(s).padStart(2, '0')}` : `${mm}:${String(s).padStart(2, '0')}`;
};

/** '$2.99' | 2.99 -> 2.99, or null when the clip carries no usable price */
export const toPrice = (value) => {
  if (typeof value === 'number' && !isNaN(value)) return value;
  if (typeof value === 'string') {
    const parsed = parseFloat(value.replace(/[^0-9.]/g, ''));
    if (!isNaN(parsed)) return parsed;
  }
  return null;
};

export const formatMoney = (amount, currency = 'USD') => {
  if (typeof amount !== 'number' || isNaN(amount)) return null;
  try {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
  } catch {
    return `$${amount.toFixed(2)}`;
  }
};

export const getClipDuration = (clip) => toSeconds(clip?.duration);

export const getClipTitle = (clip) => clip?.title || `Clip ${clip?.id ?? ''}`.trim();

export const getClipTimeLabel = (clip) => {
  if (clip?.time) return clip.time;
  if (clip?.startTime) {
    const date = new Date(clip.startTime);
    if (!isNaN(date.getTime())) {
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }).format(date);
    }
  }
  return '';
};

/** API records carry a `thumbnails` map; sample clips fall back to a gradient. */
export const getClipThumbnail = (clip) => {
  const keys = Object.keys(clip?.thumbnails || {});
  return keys.length > 0 ? clip.thumbnails[keys[0]] : null;
};
