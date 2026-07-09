import { cityOptions } from './LocationsData';

const selectStyle = {
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 1rem center',
  backgroundSize: '1.2em',
};

export default function LocationsHero({
  searchQuery,
  setSearchQuery,
  cityFilter,
  setCityFilter,
  isSearching,
  onFindNearest,
}) {
  return (
    <section className="px-6 md:px-12 py-16 text-center relative">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-ember/5 rounded-full blur-[80px] -z-10 pointer-events-none" />

      <p className="text-gradient-ember text-xs font-black tracking-[0.25em] uppercase mb-6">
        Find a Court
      </p>

      <h1 className="text-4xl md:text-6xl font-black tracking-tight text-onyx dark:text-white max-w-4xl mx-auto">
        Find Your Nearest <span className="text-gradient-ember">Akture Court</span>
      </h1>

      <p className="text-lg text-slate dark:text-gray-400 max-w-2xl mx-auto mt-6 leading-relaxed">
        We're bringing pro-level video capture to a court near you. Search below to find an
        active facility and start capturing every moment.
      </p>

      <div className="bg-white dark:bg-[#111827] p-3 rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.35)] border border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-stretch md:items-center gap-3 w-full max-w-4xl mx-auto mt-10 relative z-10">
        <div className="flex-1 flex items-center bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3.5 border border-transparent focus-within:border-ember focus-within:ring-1 focus-within:ring-ember/30 transition-all group">
          <i className="ph-bold ph-magnifying-glass text-gray-400 dark:text-gray-500 mr-3 group-focus-within:text-ember transition-colors"></i>
          <input
            type="text"
            placeholder="Search by name, address, or ZIP..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none w-full text-onyx dark:text-white font-medium placeholder-gray-400 dark:placeholder-gray-500"
          />
        </div>

        <button
          type="button"
          onClick={onFindNearest}
          className="bg-gradient-ember text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-[0_8px_16px_-6px_rgba(189,32,38,0.4)] whitespace-nowrap h-full flex items-center justify-center gap-2"
        >
          {isSearching ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Searching...
            </>
          ) : (
            <>
              <i className="ph-bold ph-navigation-arrow"></i>
              Find Nearest
            </>
          )}
        </button>

        <div className="flex items-center justify-center px-2 py-2 md:py-0 w-full md:w-auto">
          <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1 md:hidden" />
          <span className="text-xs font-bold text-gray-300 dark:text-gray-600 uppercase tracking-widest mx-4 md:mx-2">
            OR
          </span>
          <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1 md:hidden" />
        </div>

        <div className="flex-1 w-full md:w-auto relative">
          <select
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            style={selectStyle}
            className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-onyx dark:text-white font-medium rounded-xl pl-4 pr-10 py-3.5 focus:outline-none focus:ring-1 focus:ring-ember/30 focus:border-ember transition-all cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <option value="">Filter by City</option>
            {cityOptions.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}
