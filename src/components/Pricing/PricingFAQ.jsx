export default function PricingFAQ() {
  const faqs = [
    {
      q: 'Do I need a subscription to purchase a video?',
      a: 'No. You can purchase any video with pay-per-video pricing, no subscription required. Create a free account and buy only what you want.',
    },
    {
      q: 'What happens to my videos if I cancel my subscription?',
      a: 'Your videos stay in your account. You simply lose access to subscription perks like free monthly credits and extra storage — your purchased content is always yours.',
    },
    {
      q: 'How quickly will my video be processed?',
      a: 'Most videos are ready within minutes of purchase. During peak times it may take up to 30 minutes. You will receive a notification as soon as your video is ready.',
    },
    {
      q: 'Can I share my videos on social media?',
      a: 'Absolutely. Download your video in HD directly from your dashboard and share on any platform.',
    },
  ];

  return (
    <section className="px-6 md:px-12 py-20 bg-white dark:bg-onyx">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-center text-onyx dark:text-white mb-12">
          Frequently asked questions
        </h2>

        <div className="divide-y divide-gray-200 dark:divide-white/10">
          {faqs.map((faq) => (
            <div key={faq.q} className="py-7">
              <h3 className="font-black text-onyx dark:text-white mb-3">
                {faq.q}
              </h3>
              <p className="text-slate dark:text-gray-400 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}