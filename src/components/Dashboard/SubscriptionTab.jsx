export default function SubscriptionTab() {
    return (
      <div className="max-w-2xl mx-auto mt-8">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-black mb-2">My Subscription</h2>
          <p className="text-gray-500 mb-6 text-sm">Manage your current plan and upgrade for more features.</p>
  
          <div
            className="rounded-xl border-2 p-6 mb-6"
            style={{ borderColor: '#BD2026', backgroundColor: 'rgba(189,32,38,0.03)' }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#BD2026' }}>
                  Current Plan
                </span>
                <h3 className="text-xl font-extrabold text-black mt-1">Free Tier</h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: '#00A693' }}>
                Active
              </span>
            </div>
  
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#00A693' }}>
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                3 hours of storage
              </li>
  
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#00A693' }}>
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Access to purchased videos
              </li>
  
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-400">HD Downloads</span>
              </li>
            </ul>
          </div>
  
          <button
            className="w-full py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{ backgroundColor: '#BD2026', boxShadow: '0 10px 15px -3px rgba(189,32,38,0.3)' }}
          >
            Upgrade Plan
          </button>
        </div>
      </div>
    );
  }