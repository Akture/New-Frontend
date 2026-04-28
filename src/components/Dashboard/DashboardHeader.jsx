export default function DashboardHeader({ activeNav, setActiveNav }) {
    const navItems = [
      { label: 'Home', key: 'home' },
      { label: 'Purchase', key: 'purchase' },
      { label: 'All Livestreams', key: 'livestreams' },
      { label: 'Pricing', key: 'pricing' },
      { label: 'My Videos', key: 'myvideos' },
    ];
  
    return (
      <header
        className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-200 shadow-sm w-full"
        style={{ backgroundColor: 'rgba(255,255,255,0.85)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center transform -skew-x-12 group-hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white transform skew-x-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
  
              <span className="font-bold text-xl tracking-tight text-black group-hover:text-red-700 transition-colors duration-300 uppercase">
                Action<span className="text-red-700">Stream</span>
              </span>
            </div>
  
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveNav(item.key)}
                  className={`px-3 py-2 text-sm font-semibold transition-colors ${
                    activeNav === item.key
                      ? 'text-red-700 border-b-2 border-red-700'
                      : 'text-slate-500 hover:text-red-700'
                  }`}
                  style={{
                    color: activeNav === item.key ? '#BD2026' : '#5A7684',
                    borderColor: activeNav === item.key ? '#BD2026' : 'transparent',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
  
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-500 hover:text-black transition-colors rounded-full hover:bg-gray-100 relative">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span
                  className="absolute top-1.5 right-2 w-2 h-2 rounded-full border-2 border-white"
                  style={{ backgroundColor: '#BD2026' }}
                ></span>
              </button>
  
              <div className="flex items-center gap-3 cursor-pointer pl-2 border-l border-gray-200">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-bold shadow-inner text-white"
                  style={{ backgroundColor: '#5A7684' }}
                >
                  L
                </div>
                <span className="text-sm font-semibold text-black hidden sm:block">lebruce13</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }