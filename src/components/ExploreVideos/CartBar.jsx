import { formatClock } from '../../utils/videoUtils';

export default function CartBar({ cart, onReview, onClear }) {
  if (cart.length === 0) return null;

  const totalSeconds = cart.reduce((sum, video) => sum + (video.duration ?? 0), 0);

  return (
    <div className="fixed bottom-5 inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 z-40 animate-rise">
      <div className="flex items-center gap-3 sm:gap-4 bg-white/85 dark:bg-deep/85 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-full shadow-2xl dark:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.7)] pl-5 pr-2 py-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <i className="ph-duotone ph-film-strip text-ember text-xl shrink-0"></i>
          <p className="text-sm font-bold text-gray-900 dark:text-white whitespace-nowrap tabular-nums">
            {cart.length} clip{cart.length !== 1 ? 's' : ''}
            <span className="text-gray-400 dark:text-gray-500 font-semibold">
              {' '}· {formatClock(totalSeconds)}
            </span>
          </p>
        </div>

        <button
          onClick={onClear}
          aria-label="Clear selection"
          className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-ember transition-colors"
        >
          <i className="ph-bold ph-trash text-sm"></i>
        </button>

        <button
          onClick={onReview}
          className="shrink-0 bg-gradient-ember text-white font-bold py-2.5 px-5 sm:px-6 rounded-full text-xs uppercase tracking-widest shadow-ember-md flex items-center gap-2"
        >
          Review Order
          <i className="ph-bold ph-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
