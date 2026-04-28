export default function EmptyVideoGrid({ onBrowse }) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-96">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 flex flex-col items-center justify-center p-12 bg-white rounded-2xl border-2 border-dashed border-gray-300 shadow-sm transition-colors hover:border-gray-400">
          <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 shadow-inner relative group">
            <svg className="w-10 h-10 text-gray-400 group-hover:text-gray-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-0.5 bg-gray-300 transform -rotate-45"></div>
            </div>
          </div>
  
          <h3 className="text-2xl font-bold text-black mb-3 text-center">No videos purchased yet.</h3>
          <p className="text-gray-500 text-center max-w-md mb-8 leading-relaxed">
            Your library is currently empty. Browse our catalog of exclusive livestreams and VODs to start building your collection.
          </p>
  
          <button
            onClick={onBrowse}
            className="text-white px-8 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-200 flex items-center gap-2 hover:-translate-y-0.5"
            style={{
              backgroundColor: '#BD2026',
              boxShadow: '0 10px 15px -3px rgba(189,32,38,0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#9b1c21';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(189,32,38,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#BD2026';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(189,32,38,0.3)';
            }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Browse Catalog
          </button>
        </div>
      </div>
    );
  }