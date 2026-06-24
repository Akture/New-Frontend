export default function SubscriptionPricing() {
  const plans = [
    {
      name: 'Rookie',
      price: 'Free',
      suffix: '',
     // button: 'Try It Free',
      popular: false,
      features: [
        '1080p HD Video',
        'Anytime Video Purchasing',
        'Unlimited Video Downloads',
        'Video access expires after 30 days',
      ],
    },
    {
      name: 'Elite',
      price: '$4.99',
      suffix: '/mo',
      //button: 'Subscribe',
      popular: true,
      features: [
        '1080p HD Video',
        'Anytime Video Purchasing',
        'Unlimited Video Downloads',
        '8 Hours of Akture Cloud Storage',
        '30 minutes of free video per month',
      ],
    },
    {
      name: 'Pro',
      price: '$9.99',
      suffix: '/mo',
      //button: 'Subscribe',
      popular: false,
      features: [
        '1080p HD Video',
        'Anytime Video Purchasing',
        'Unlimited Video Downloads',
        '16 Hours of Akture Cloud Storage',
        '1 hour of free video per month',
      ],
    },
    {
      name: 'GOAT',
      price: '$24.99',
      suffix: '/mo',
      //button: 'Subscribe',
      popular: false,
      features: [
        '1080p HD Video',
        'Anytime Video Purchasing',
        'Unlimited Video Downloads',
        '50 Hours of Akture Cloud Storage',
        '2 hours of free video per month',
      ],
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-black/40 px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-black text-onyx dark:text-white">
          Add a subscription for more power
        </h2>

        <p className="text-slate dark:text-gray-400 mt-4 max-w-xl mx-auto">
          Ideal for teams and regulars — more storage, free monthly video credits, and priority processing.
        </p>

        <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-3xl p-8 mt-12 text-left">
          <p className="text-sm text-slate dark:text-gray-400 mb-6">
            Subscriptions are optional and give you storage plus free monthly video credits.
            You can still pay per video without a subscription.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl border p-6 overflow-hidden ${
                  plan.popular
                    ? 'border-ember shadow-[0_18px_35px_-20px_rgba(189,32,38,0.8)]'
                    : 'border-gray-200 dark:border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-ember text-white text-xs font-black px-8 py-2 rotate-45 translate-x-8 translate-y-4">
                    Popular
                  </div>
                )}

                <h3 className="text-xl font-black text-onyx dark:text-white text-center">
                  {plan.name}
                </h3>

                <div className="text-center mt-4">
                  <span className="text-3xl font-black text-onyx dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-slate dark:text-gray-400">{plan.suffix}</span>
                </div>

                <ul className="space-y-4 mt-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-slate dark:text-gray-300">
                      <span className="w-5 h-5 rounded-full bg-emerald/20 text-emerald flex items-center justify-center text-xs shrink-0">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full mt-8 py-3 rounded-xl font-black transition-all ${
                    plan.popular
                      ? 'bg-gradient-ember text-white'
                      : 'bg-ember/10 hover:bg-ember hover:text-white text-ember'
                  }`}
                >
                  {plan.button}
                </button>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-8">
          All plans include a free tier. No credit card required to get started.{' '}
          <a 
            href="https://akture.video/register"
            className="text-gradient-ember font-bold"
            >
          Create your free account →
          </a>
        </p>
      </div>
    </section>
  );
}
