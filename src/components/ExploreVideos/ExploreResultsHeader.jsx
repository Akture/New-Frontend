import { courtLabels } from './ExploreData';

const selectStyle = {
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '1.2em',
};

export default function ExploreResultsHeader({
  displayedCount,
  date,
  court,
  sortOrder,
  setSortOrder,
}) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4 border-b border-gray-200 dark:border-gray-800 pb-4">
      <div>
        <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase italic tracking-tight">
          Available Videos
        </h2>

        <p className="text-gray-500 dark:text-gray-400 font-medium text-sm mt-1">
          Showing {displayedCount} segments for{' '}
          <span className="text-gray-900 dark:text-white font-bold">
            {date}, {courtLabels[court] || 'Center Court'}
          </span>
        </p>
      </div>

      <div className="flex items-center gap-2 bg-gray-100 dark:bg-[#111827] px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700">
        <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Sort:</span>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={{ ...selectStyle, backgroundPosition: 'right 0.25rem center' }}
          className="bg-transparent text-gray-900 dark:text-white font-bold text-sm focus:outline-none cursor-pointer pr-6"
        >
          <option>Time (Earliest)</option>
          <option>Time (Latest)</option>
          <option>Duration</option>
        </select>
      </div>
    </div>
  );
}