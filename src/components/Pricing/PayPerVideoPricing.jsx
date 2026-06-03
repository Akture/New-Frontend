export default function PayPerVideoPricing() {
  const prices = [
    { time: '≤ 30 min', price: '$3.99', highlight: false },
    { time: '30 – 60 min', price: '$5.99', highlight: true },
    { time: '60 – 120 min', price: '$9.99', highlight: false },
  ];

  const features = [
    'Pay only when needed — no monthly commitment',
    'Works on the free plan, no upgrade required',
    'Video saved to your personal storage',
    'Download in HD and share instantly',
    'Accessible from your dashboard anytime',
    'Same-day processing guarantee',
  ];

  return (
    <section className="bg-gray-50 dark:bg-black/40 px-6 md:px-12 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-black text-onyx dark:text-white">
          Pay only when you need a video
        </h2>

        <p className="text-slate dark:text-gray-400 mt-4 max-w-xl mx-auto">
          No subscription required. Works on the free plan. Just buy the specific video you want processed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          {prices.map((item) => (
            <div
              key={item.time}
              className={`rounded-3xl p-8 shadow-sm border transition-all ${
                item.highlight
                  ? 'bg-ember text-white border-ember scale-105 shadow-[0_20px_30px_-16px_rgba(189,32,38,0.7)]'
                  : 'bg-white text-onyx border-gray-200 dark:bg-[#111827] dark:text-white dark:border-white/10'
              }`}
            >
              <p className={`text-xs font-black tracking-[0.25em] uppercase mb-4 ${item.highlight ? 'text-white/80' : 'text-gray-400'}`}>
                {item.time}
              </p>

              <p className="text-4xl font-black">{item.price}</p>
              <p className={item.highlight ? 'text-white/80 mt-2' : 'text-gray-400 mt-2'}>
                per video
              </p>

              {item.highlight && (
                <span className="inline-block mt-5 px-4 py-1 rounded-full bg-white/20 text-xs font-black">
                  Most common
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-3xl p-8 mt-14 max-w-4xl mx-auto text-left">
          <h3 className="font-black text-onyx dark:text-white mb-6">
            What&apos;s included
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 text-slate dark:text-gray-300">
                <span className="w-5 h-5 rounded-full bg-emerald/20 text-emerald flex items-center justify-center text-xs mt-0.5">
                  ✓
                </span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}