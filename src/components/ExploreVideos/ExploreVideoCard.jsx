import { getVideoThumbnail, getVideoTitle, formatDuration, formatDateTime } from '../../utils/videoUtils';

export default function ExploreVideoCard({ video, onAdd, addedToCart, cartIndex }) {
  const thumbnail = getVideoThumbnail(video);
  const title = getVideoTitle(video);
  const duration = video.duration ? formatDuration(video.duration) : null;
  const timeDisplay = video.startTime ? formatDateTime(video.startTime) : null;

  return (
    <div
      className={`bg-white dark:bg-surface rounded-2xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.35)] border transition-all duration-300 group flex flex-col ${
        addedToCart
          ? 'border-ember/60 shadow-[0_0_20px_rgba(189,32,38,0.15)]'
          : 'border-gray-200 dark:border-gray-800 hover:shadow-[0_0_20px_rgba(189,32,38,0.2)]'
      }`}
    >
      <button
        type="button"
        onClick={() => onAdd(video.id)}
        aria-label={addedToCart ? `Remove ${title} from your reel` : `Add ${title} to your reel`}
        className="relative aspect-video bg-gray-200 dark:bg-gray-900 overflow-hidden w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ember"
      >
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <span className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800" />
        )}

        <span
          className={`absolute inset-0 transition-colors duration-300 flex items-center justify-center ${
            addedToCart
              ? 'bg-[#0F172A]/30'
              : 'bg-[#0F172A]/10 group-hover:bg-[#0F172A]/40'
          }`}
        >
          <span
            className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transform transition-all ${
              addedToCart
                ? 'bg-gradient-ember text-white scale-100'
                : 'bg-white text-[#0F172A] scale-0 group-hover:scale-100'
            }`}
          >
            <i className={`ph-bold ${addedToCart ? 'ph-check' : 'ph-plus'} text-xl`}></i>
          </span>
        </span>

        {addedToCart && cartIndex != null && (
          <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-gradient-ember text-white text-xs font-black flex items-center justify-center shadow-ember-sm">
            {cartIndex + 1}
          </span>
        )}

        {duration && (
          <span className="absolute bottom-3 right-3 bg-[#0F172A]/80 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
            <i className="ph-bold ph-clock"></i> {duration}
          </span>
        )}
      </button>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-extrabold text-base text-gray-900 dark:text-white leading-tight mb-2 group-hover:text-ember transition-colors line-clamp-2">
          {title}
        </h3>

        {timeDisplay && (
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-1.5">
            <i className="ph-bold ph-calendar-blank"></i> {timeDisplay}
          </p>
        )}

        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
          <div className="text-xl font-black text-gray-900 dark:text-white">
            {video.price ?? '—'}
          </div>

          <button
            onClick={() => onAdd(video.id)}
            className={`${
              addedToCart
                ? 'bg-ember text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-ember hover:text-white'
            } font-bold py-2 px-4 rounded-lg transition-colors text-xs uppercase tracking-wider flex items-center gap-1.5`}
          >
            <i className={`ph-bold ${addedToCart ? 'ph-check' : 'ph-shopping-cart-simple'} text-sm`}></i>
            {addedToCart ? 'Added' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
}
