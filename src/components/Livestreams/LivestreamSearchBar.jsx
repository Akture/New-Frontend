export default function LivestreamSearchBar({
  search,
  setSearch,
  status,
  setStatus,
  onClear,
}) {
  return (
    <div className="rounded-3xl border shadow-sm p-6 bg-white border-gray-300 dark:bg-[#111827] dark:border-white/10">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search livestreams..."
          className="flex-1 rounded-2xl border px-5 py-4 text-lg bg-gray-50 border-gray-300 text-onyx placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald/30 focus:border-emerald dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-2xl border px-5 py-4 text-lg bg-gray-50 border-gray-300 text-onyx focus:outline-none focus:ring-2 focus:ring-emerald/30 focus:border-emerald dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        >
          <option value="all">All Status</option>
          <option value="live">Live</option>
          <option value="scheduled">Scheduled</option>
          <option value="ended">Ended</option>
        </select>

        <button
          onClick={onClear}
          className="rounded-2xl border px-6 py-4 text-lg font-semibold border-gray-300 text-gray-600 hover:border-ember hover:text-ember dark:border-gray-700 dark:text-gray-300 dark:hover:border-ember flex items-center gap-2"
        >
          <i className="ph ph-trash"></i> Clear
        </button>
      </div>
    </div>
  );
}