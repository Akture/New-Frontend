export default function DashboardSubNav({ activeSubNav, setActiveSubNav }) {
    const tabs = [
      { label: 'My Videos', key: 'myvideos' },
      { label: 'Purchased Videos', key: 'purchased' },
      { label: 'Leave Feedback', key: 'feedback' },
      { label: 'My Subscription', key: 'subscription' },
    ];
  
    return (
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-20 z-40 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveSubNav(tab.key)}
                className={`whitespace-nowrap py-4 px-1 text-sm transition-colors border-b-2 ${
                  activeSubNav === tab.key
                    ? 'font-bold border-b-2'
                    : 'font-medium text-gray-500 hover:text-black border-transparent'
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