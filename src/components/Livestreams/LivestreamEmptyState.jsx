export default function LivestreamEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-28">
      <div className="text-5xl mb-6">⚠️</div>

      <h2 className="text-2xl font-black text-onyx dark:text-white mb-3">
        Error Loading Livestreams
      </h2>

      <p className="text-slate dark:text-gray-400 mb-8">
        Request failed with status code 401
      </p>

      <button className="bg-emerald hover:bg-emerald/90 text-white px-8 py-3 rounded-2xl font-bold transition-all">
        Try Again
      </button>
    </div>
  );
}