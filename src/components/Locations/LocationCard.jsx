export default function LocationCard({ location, onView, onNotify }) {
  const isActive = location.status === 'active';

  return (
    <div className="bg-white dark:bg-[#111827] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 group flex flex-col h-full">
      <div className="h-44 bg-gray-100 dark:bg-gray-800 relative overflow-hidden flex items-center justify-center border-b border-gray-100 dark:border-gray-800">
        <div className="absolute inset-0 bg-dot-pattern opacity-50" />
        <i className="ph ph-building relative z-10 text-6xl text-gray-300 dark:text-gray-600"></i>
        <div
          className={`absolute top-4 right-4 px-3 py-1 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5 ${
            isActive ? 'bg-emerald' : 'bg-sunset'
          }`}
        >
          {isActive && <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />}
          {isActive ? 'Akture Active' : 'Coming Soon'}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-black text-onyx dark:text-white mb-3 group-hover:text-ember transition-colors leading-tight">
          {location.name}
        </h3>

        <div className="flex flex-col gap-2.5 mb-6">
          <div className="flex items-start text-sm text-gray-600 dark:text-gray-400 font-medium">
            <i className="ph-bold ph-map-pin text-gray-400 dark:text-gray-500 mr-2.5 mt-0.5"></i>
            <span>
              {location.address}
              <br />
              {location.city}
            </span>
          </div>

          <div className="flex items-center text-sm font-bold text-slate bg-slate/10 w-fit px-3 py-1.5 rounded-lg mt-1">
            <i className="ph-bold ph-navigation-arrow mr-1.5"></i>
            {location.distance}
          </div>
        </div>

        <div className="mt-auto">
          {isActive ? (
            <button
              onClick={onView}
              className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-onyx dark:text-white font-bold py-3 rounded-xl hover:bg-onyx hover:text-white hover:border-onyx dark:hover:bg-white dark:hover:text-onyx transition-all"
            >
              View Court
            </button>
          ) : (
            <button
              onClick={onNotify}
              className="w-full bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 font-bold py-3 rounded-xl hover:text-ember transition-colors"
            >
              Get Notified
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
