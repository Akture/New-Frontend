import { purchaseStyles } from './PurchaseStyles';
import { courtLabels } from './PurchaseData';

export default function PurchaseResultsHeader({
  displayedCount,
  date,
  court,
  sortOrder,
  setSortOrder,
}) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4 border-b border-gray-800 pb-4">
      <div>
        <h2 className="text-2xl font-black text-white uppercase italic tracking-tight">
          Available Matches
        </h2>

        <p className="text-gray-400 font-medium text-sm mt-1">
          Showing {displayedCount} segments for{' '}
          <span className="text-white font-bold">
            {date}, {courtLabels[court] || 'Center Court'}
          </span>
        </p>
      </div>

      <div className="flex items-center gap-2 bg-[#111827] px-3 py-1.5 rounded-lg border border-gray-700">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Sort:</span>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={{ ...purchaseStyles.selectAppearance, backgroundPosition: 'right 0.25rem center' }}
          className="bg-transparent text-white font-bold text-sm focus:outline-none cursor-pointer pr-6"
        >
          <option>Time (Earliest)</option>
          <option>Time (Latest)</option>
          <option>Duration</option>
        </select>
      </div>
    </div>
  );
}