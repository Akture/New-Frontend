import { mapPositions } from './LocationsData';

export default function LocationsMapView({ locations, onSelect }) {
  return (
    <div className="relative w-full h-[600px] bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-50" />

      {locations.map((loc) => (
        <button
          key={loc.id}
          style={{ top: mapPositions[loc.id].top, left: mapPositions[loc.id].left }}
          className="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-ember rounded-full border-2 border-white dark:border-[#111827] shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-10 group"
          onClick={() => onSelect(loc)}
        >
          <i className="ph-bold ph-map-pin text-white"></i>
          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white dark:bg-[#111827] px-3 py-2 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
            <p className="text-sm font-bold text-onyx dark:text-white">{loc.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{loc.city}</p>
            <span
              className={`inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white ${
                loc.status === 'active' ? 'bg-emerald' : 'bg-sunset'
              }`}
            >
              {loc.status === 'active' ? 'Akture Active' : 'Coming Soon'}
            </span>
          </div>
        </button>
      ))}

      {locations.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-400 dark:text-gray-500 font-medium">No locations found in this area.</p>
        </div>
      )}
    </div>
  );
}
