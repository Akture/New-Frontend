import { useEffect, useMemo, useState } from 'react';
import { getVideoThumbnail, getVideoTitle, formatDateTime, formatClock } from '../../utils/videoUtils';

// Prices may arrive as numbers or "$5.99" strings; anything else means the
// backend owns the price and we say so instead of inventing one.
const parsePrice = (price) => {
  if (typeof price === 'number' && !isNaN(price)) return price;
  if (typeof price === 'string') {
    const parsed = parseFloat(price.replace(/[^0-9.]/g, ''));
    if (!isNaN(parsed)) return parsed;
  }
  return null;
};

export default function PurchaseConfirmationModal({
  isOpen,
  onClose,
  cart,
  onRemove,
  onMove,
}) {
  const [discountCode, setDiscountCode] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const totalSeconds = useMemo(
    () => cart.reduce((sum, video) => sum + (video.duration ?? 0), 0),
    [cart]
  );

  const totalPrice = useMemo(() => {
    const prices = cart.map((video) => parsePrice(video.price));
    if (prices.length === 0 || prices.some((p) => p === null)) return null;
    return prices.reduce((sum, p) => sum + p, 0);
  }, [cart]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="purchase-confirmation-title"
        className="bg-white dark:bg-deep rounded-3xl shadow-2xl dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] max-w-xl w-full relative border border-gray-200 dark:border-white/10 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-400 hover:text-onyx dark:hover:text-white transition-colors z-10"
        >
          <i className="ph-bold ph-x"></i>
        </button>

        {/* Header */}
        <div className="px-6 sm:px-8 pt-7 pb-5">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-ember mb-1.5">
            Checkout
          </p>
          <h2
            id="purchase-confirmation-title"
            className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 dark:text-white"
          >
            Confirm Your{' '}
            <span className="text-gradient-ember italic">Order</span>
          </h2>
        </div>

        {/* Scrollable body */}
        <div className="px-6 sm:px-8 overflow-y-auto flex-1 min-h-0">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <i className="ph-duotone ph-film-slate text-4xl text-gray-300 dark:text-gray-600"></i>
              <p className="mt-3 text-sm font-semibold text-gray-500 dark:text-gray-400">
                Your reel is empty. Add clips from the results below.
              </p>
              <button
                onClick={onClose}
                className="mt-5 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-800 dark:text-white font-bold py-2.5 px-6 rounded-xl transition-colors text-xs uppercase tracking-widest"
              >
                Browse Clips
              </button>
            </div>
          ) : (
            <>
              {/* Ordered filmstrip — the combine order, made visible */}
              <ol className="relative space-y-3">
                {cart.map((video, index) => {
                  const thumbnail = getVideoThumbnail(video);
                  const title = getVideoTitle(video);
                  return (
                    <li
                      key={video.id}
                      className="relative flex items-center gap-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-3"
                    >
                      {/* Connecting rail between order badges */}
                      {index < cart.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="absolute left-[26px] top-[calc(50%+16px)] h-[calc(100%-16px)] w-px bg-gradient-to-b from-ember/40 to-transparent"
                        />
                      )}

                      <span className="w-7 h-7 shrink-0 rounded-full bg-gradient-ember text-white text-xs font-black flex items-center justify-center shadow-ember-sm">
                        {index + 1}
                      </span>

                      <div className="w-20 sm:w-24 shrink-0 aspect-video rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
                        {thumbnail ? (
                          <img
                            src={thumbnail}
                            alt={title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                            <i className="ph-fill ph-play text-gray-500 dark:text-gray-400"></i>
                          </div>
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-sm text-gray-900 dark:text-white truncate">
                          {title}
                        </p>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-0.5 flex items-center gap-1.5">
                          {video.startTime && (
                            <>
                              <i className="ph-bold ph-calendar-blank"></i>
                              {formatDateTime(video.startTime)}
                            </>
                          )}
                          {video.duration != null && (
                            <span className="inline-flex items-center gap-1">
                              <i className="ph-bold ph-clock"></i>
                              {formatClock(video.duration)}
                            </span>
                          )}
                        </p>
                      </div>

                      <div className="flex flex-col shrink-0">
                        <button
                          onClick={() => onMove(index, -1)}
                          disabled={index === 0}
                          aria-label={`Move clip ${index + 1} earlier`}
                          className="w-7 h-7 flex items-center justify-center rounded-md text-gray-400 hover:text-ember hover:bg-ember/10 disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-gray-400 transition-colors"
                        >
                          <i className="ph-bold ph-caret-up text-sm"></i>
                        </button>
                        <button
                          onClick={() => onMove(index, 1)}
                          disabled={index === cart.length - 1}
                          aria-label={`Move clip ${index + 1} later`}
                          className="w-7 h-7 flex items-center justify-center rounded-md text-gray-400 hover:text-ember hover:bg-ember/10 disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-gray-400 transition-colors"
                        >
                          <i className="ph-bold ph-caret-down text-sm"></i>
                        </button>
                      </div>

                      <button
                        onClick={() => onRemove(video.id)}
                        aria-label={`Remove clip ${index + 1}`}
                        className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-ember transition-colors"
                      >
                        <i className="ph-bold ph-trash text-sm"></i>
                      </button>
                    </li>
                  );
                })}
              </ol>

              <div className="mt-4 flex items-start gap-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-3.5 py-3">
                <i className="ph-duotone ph-film-strip text-ember text-lg mt-px"></i>
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-300 leading-relaxed">
                  Your clips are combined into one video, in the order shown.
                  Use the arrows to arrange your reel.
                </p>
              </div>

              {/* Totals */}
              <div className="mt-5 border-t border-gray-200 dark:border-white/10 pt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-gray-500 dark:text-gray-400">
                    Total duration
                  </span>
                  <span className="font-black text-gray-900 dark:text-white tabular-nums">
                    {formatClock(totalSeconds)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    Price
                  </span>
                  {totalPrice !== null ? (
                    <span className="text-xl font-black text-gray-900 dark:text-white tabular-nums">
                      ${totalPrice.toFixed(2)}
                    </span>
                  ) : (
                    <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
                      Priced at checkout
                    </span>
                  )}
                </div>
              </div>

              {/* Discount code */}
              <div className="mt-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="Discount code"
                    className="flex-1 min-w-0 bg-input dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-form px-4 py-2.5 text-base sm:text-sm font-semibold text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-colors"
                  />
                  <button
                    disabled
                    title="Discount codes activate once checkout is connected"
                    className="px-5 py-2.5 rounded-form font-bold text-xs uppercase tracking-widest bg-gray-100 dark:bg-white/10 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-6 sm:px-8 pt-5 pb-6 mt-2">
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={onClose}
                className="py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-widest text-gray-600 dark:text-gray-300 border-2 border-gray-200 dark:border-white/15 hover:border-gray-400 dark:hover:border-white/40 transition-colors"
              >
                Cancel
              </button>
              <button
                disabled
                aria-disabled="true"
                className="py-3 px-7 rounded-xl font-bold text-xs uppercase tracking-widest text-white bg-gradient-ember opacity-50 cursor-not-allowed flex items-center gap-2"
              >
                Proceed to Payment
                <i className="ph-bold ph-arrow-right"></i>
              </button>
            </div>
            <p className="mt-3 text-right text-[11px] font-semibold text-gray-400 dark:text-gray-500">
              <i className="ph-bold ph-plugs mr-1"></i>
              Checkout connects soon — payments aren&apos;t live in this preview.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
