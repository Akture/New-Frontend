export default function LivestreamTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { label: 'Overview', value: 'overview' },
    { label: 'Analytics', value: 'analytics' },
  ];

  return (
    <div className="flex gap-4 mt-8">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setActiveTab(tab.value)}
          className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all border ${
            activeTab === tab.value
              ? 'bg-emerald text-white border-emerald shadow-md'
              : 'bg-transparent text-onyx border-onyx dark:text-white dark:border-white/40 hover:border-emerald hover:text-emerald'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}