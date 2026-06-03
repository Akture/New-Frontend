export default function PricingTabs({ activeTab, setActiveTab }) {
  const tabs = [
    {
      id: 'pay-per-video',
      title: 'Pay-Per-Video',
      subtitle: 'No subscription',
      icon: 'ph ph-video-camera',
    },
    {
      id: 'subscriptions',
      title: 'Subscriptions',
      subtitle: 'Monthly plans',
      icon: 'ph ph-package',
    },
  ];

  return (
    <div className="border-y border-gray-200 dark:border-white/10">
      <div className="max-w-3xl mx-auto grid grid-cols-2">
        {tabs.map((tab) => {
          const active = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center gap-3 py-5 border-b-2 transition-all ${
                active
                  ? 'border-ember text-ember'
                  : 'border-transparent text-gray-400 hover:text-onyx dark:hover:text-white'
              }`}
            >
              <i className={tab.icon}></i>
              <span className="text-left">
                <span className="block font-black text-sm">{tab.title}</span>
                <span className="block text-xs font-medium">{tab.subtitle}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}