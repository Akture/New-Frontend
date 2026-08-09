import { useEffect, useState } from 'react';
import {
  formatClock,
  formatMoney,
  getClipDuration,
  getClipThumbnail,
  getClipTimeLabel,
  getClipTitle,
} from './clipShape';

/**
 * Purchase confirmation overlay.
 *
 * Pricing is owned by the server (it is calculated from the total combined
 * duration, not by adding up per-clip prices), so this component only displays
 * what it is handed through `pricing`, and only enables a control when its
 * handler is provided. Until checkout is connected, Apply and Proceed render
 * in a disabled state rather than presenting buttons that do nothing.
 *
 * pricing:
 *   { status: 'idle'|'loading'|'ready'|'error',
 *     price, originalPrice, currency,
 *     billableSeconds, creditsApplied,
 *     discountValid, discountReason }
 */
export default function PurchaseConfirmationModal({
  isOpen,
  onClose,
  cart,
  onRemove,
  onMove,
  pricing = null,
  onApplyDiscount,
  onProceed,
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

  if (!isOpen) return null;

  const totalSeconds = cart.reduce((sum, clip) => sum + getClipDuration(clip), 0);
  const isPricing = pricing?.status === 'loading';
  const currency = pricing?.currency || 'USD';

  const priceLabel =
    pricing && typeof pricing.price === 'number' ? formatMoney(pricing.price, currency) : null;
  const originalLabel =
    pricing &&
    typeof pricing.originalPrice === 'number' &&
    pricing.originalPrice !== pricing.price
      ? formatMoney(pricing.originalPrice, currency)
      : null;

  const canApplyDiscount =
    typeof onApplyDiscount === 'function' &&
    cart.length > 0 &&
    discountCode.trim().length > 0 &&
    !isPricing;
  const canProceed = typeof onProceed === 'function' && cart.length > 0 && !isPricing;

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

        <div className="px-6 sm:px-8 pt-7 pb-5">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-ember mb-1.5">
            Checkout
          </p>
          <h2
            id="purchase-confirmation-title"
            className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 dark:text-white"
          >
            Confirm Your <span className="text-gradient-ember italic">Order</span>
          </h2>
        </div>

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
                {cart.map((clip, index) => {
                  const thumbnail = getClipThumbnail(clip);
                  const title = getClipTitle(clip);
                  const timeLabel = getClipTimeLabel(clip);
                  const duration = getClipDuration(clip);

                  return (
                    <li
                      key={clip.id}
                      className="relative flex items-center gap-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-3"
                    >
                      {index < cart.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="absolute left-[26px] top-[calc(50%+16px)] h-[calc(100%-16px)] w-px bg-gradient-to-b from-ember/40 to-transparent"
                        />
                      )}

                      <span className="w-7 h-7 shrink-0 rounded-full bg-gradient-ember text-white text-xs font-black flex items-center justify-center shadow-ember-sm">
                        {index + 1}
                      </span>

                      <div className="w-20 sm:w-24 shrink-0 aspect-video rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 relative">
                        {thumbnail ? (
                          <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
                        ) : (
                          <span
                            className={`absolute inset-0 flex items-center justify-center ${
                              clip.gradientDir || 'bg-gradient-to-br'
                            } ${clip.gradient || 'from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800'}`}
                          >
                            <i className="ph-fill ph-play text-white/70"></i>
                          </span>
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-sm text-gray-900 dark:text-white truncate">
                          {title}
                        </p>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-0.5 flex items-center gap-1.5 flex-wrap">
                          {timeLabel && (
                            <span className="inline-flex items-center gap-1">
                              <i className="ph-bold ph-calendar-blank"></i>
                              {timeLabel}
                            </span>
                          )}
                          {duration > 0 && (
                            <span className="inline-flex items-center gap-1">
                              <i className="ph-bold ph-clock"></i>
                              {formatClock(duration)}
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
                        onClick={() => onRemove(clip.id)}
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
                  Your clips are combined into one video, in the order shown. Use the arrows to
                  arrange your reel.
                </p>
              </div>

              <div className="mt-5 border-t border-gray-200 dark:border-white/10 pt-4 space-y-2.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-gray-500 dark:text-gray-400">
                    Total requested duration
                  </span>
                  <span className="font-black text-gray-900 dark:text-white tabular-nums">
                    {formatClock(totalSeconds)}
                  </span>
                </div>

                {typeof pricing?.billableSeconds === 'number' && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-gray-500 dark:text-gray-400">Billable</span>
                    <span className="font-bold text-gray-900 dark:text-white tabular-nums">
                      {formatClock(pricing.billableSeconds)}
                    </span>
                  </div>
                )}

                {typeof pricing?.creditsApplied === 'number' && pricing.creditsApplied > 0 && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-emerald">Purchase credits applied</span>
                    <span className="font-bold text-emerald tabular-nums">
                      −{formatClock(pricing.creditsApplied)}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between pt-1">
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    Price
                  </span>
                  {isPricing ? (
                    <span className="w-16 h-5 rounded bg-gray-200 dark:bg-white/10 animate-pulse" />
                  ) : priceLabel ? (
                    <span className="flex items-baseline gap-2">
                      {originalLabel && (
                        <span className="text-sm font-semibold text-gray-400 line-through tabular-nums">
                          {originalLabel}
                        </span>
                      )}
                      <span className="text-xl font-black text-gray-900 dark:text-white tabular-nums">
                        {priceLabel}
                      </span>
                    </span>
                  ) : (
                    <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
                      Priced at checkout
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (canApplyDiscount) onApplyDiscount(discountCode.trim());
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="Discount code"
                    className="flex-1 min-w-0 bg-input dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-form px-4 py-2.5 text-base sm:text-sm font-semibold text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={!canApplyDiscount}
                    title={
                      typeof onApplyDiscount === 'function'
                        ? undefined
                        : 'Discount codes activate once checkout is connected'
                    }
                    className={`px-5 py-2.5 rounded-form font-bold text-xs uppercase tracking-widest transition-colors ${
                      canApplyDiscount
                        ? 'bg-gray-900 dark:bg-white text-white dark:text-onyx hover:bg-ember dark:hover:bg-ember dark:hover:text-white'
                        : 'bg-gray-100 dark:bg-white/10 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Apply
                  </button>
                </form>

                {pricing?.discountReason && (
                  <p
                    className={`mt-2 text-xs font-semibold flex items-center gap-1.5 ${
                      pricing.discountValid ? 'text-emerald' : 'text-ember'
                    }`}
                  >
                    <i
                      className={`ph-bold ${
                        pricing.discountValid ? 'ph-check-circle' : 'ph-warning-circle'
                      }`}
                    ></i>
                    {pricing.discountReason}
                  </p>
                )}
              </div>
            </>
          )}
        </div>

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
                onClick={canProceed ? onProceed : undefined}
                disabled={!canProceed}
                aria-disabled={!canProceed}
                className={`py-3 px-7 rounded-xl font-bold text-xs uppercase tracking-widest text-white bg-gradient-ember flex items-center gap-2 ${
                  canProceed ? 'shadow-ember-md' : 'opacity-50 cursor-not-allowed'
                }`}
              >
                {isPricing ? 'Working…' : 'Proceed to Payment'}
                {!isPricing && <i className="ph-bold ph-arrow-right"></i>}
              </button>
            </div>
            {typeof onProceed !== 'function' && (
              <p className="mt-3 text-right text-[11px] font-semibold text-gray-400 dark:text-gray-500">
                <i className="ph-bold ph-plugs mr-1"></i>
                Checkout connects soon — payments aren&apos;t live in this preview.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
