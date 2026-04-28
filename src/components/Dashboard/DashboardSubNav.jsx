export default function DashboardSubNav({ activeSubNav, setActiveSubNav }) {
  const tabs = [
    { label: 'Purchased Videos', key: 'purchased' },
    { label: 'Leave Feedback', key: 'feedback' },
    { label: 'My Subscription', key: 'subscription' },
  ];

  return (
    <div className="w-full sticky top-24 z-40 backdrop-blur-md border-b shadow-sm 
                    bg-white/80 border-gray-200 
                    dark:bg-black/70 dark:border-white/10 mt-20 md:mt-8">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveSubNav(tab.key)}
              className={`whitespace-nowrap py-4 px-1 text-sm transition-colors border-b-2 ${
                activeSubNav === tab.key
                  ? 'font-bold'
                  : 'font-medium text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white border-transparent'
              }`}
              style={{
                color: activeSubNav === tab.key ? '#BD2026' : undefined,
                borderColor: activeSubNav === tab.key ? '#BD2026' : 'transparent',
              }}
            >
              {tab.label}
            </button>
          ))}

        </div>
      </div>
    </div>
  );
}