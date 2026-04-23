import { purchaseStyles } from './PurchaseStyles';
import { timeOptions, dateOptions } from './PurchaseData';

export default function PurchaseSearchForm({
  onSearch,
  court,
  setCourt,
  date,
  setDate,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
}) {
  return (
    <div className="bg-[#111827] rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.35)] border border-gray-800 p-6 md:p-8 mb-16 mx-auto max-w-4xl relative overflow-hidden">
      <form className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <i className="ph-bold ph-map-pin text-white"></i> Court Location
            </label>

            <select
              value={court}
              onChange={(e) => setCourt(e.target.value)}
              style={purchaseStyles.selectAppearance}
              className="w-full bg-gray-800 border border-gray-700 text-white font-semibold text-base rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition-all cursor-pointer hover:bg-gray-700"
            >
              <option value="" disabled>
                Select a court...
              </option>
              <option value="main">Center Court (Main Arena)</option>
              <option value="north1">North Facility - Court 1</option>
              <option value="north2">North Facility - Court 2</option>
              <option value="south1">South Gym - Court A</option>
              <option value="south2">South Gym - Court B</option>
              <option value="outdoor">Outdoor Courts - Championship</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <i className="ph-bold ph-calendar-blank text-white"></i> Date
            </label>

            <div className="flex bg-gray-800 p-1 rounded-xl border border-gray-700">
              {dateOptions.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDate(d)}
                  className={`flex-1 py-2.5 text-sm rounded-lg transition-all focus:outline-none ${
                    date === d
                      ? 'font-bold bg-[#0F172A] text-white shadow-sm'
                      : 'font-semibold text-gray-400 hover:text-white'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <i className="ph-bold ph-clock text-white"></i> Time Range
          </label>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-full relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 uppercase">
                Start
              </span>

              <select
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                style={purchaseStyles.selectAppearance}
                className="w-full bg-gray-800 border border-gray-700 text-white font-semibold text-base rounded-xl pl-14 pr-10 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition-all cursor-pointer hover:bg-gray-700"
              >
                {timeOptions.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            <i className="ph-bold ph-arrow-right text-gray-400 hidden sm:block"></i>

            <div className="w-full relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 uppercase">
                End
              </span>

              <select
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                style={purchaseStyles.selectAppearance}
                className="w-full bg-gray-800 border border-gray-700 text-white font-semibold text-base rounded-xl pl-12 pr-10 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition-all cursor-pointer hover:bg-gray-700"
              >
                {timeOptions.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={onSearch}
            className="w-full bg-[#E63946] hover:bg-[#C1121F] text-white font-black text-lg py-4 rounded-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_8px_16px_-6px_rgba(230,57,70,0.4)] uppercase tracking-wide flex justify-center items-center gap-2"
          >
            <i className="ph-bold ph-magnifying-glass text-xl"></i>
            Find Videos
          </button>
        </div>
      </form>
    </div>
  );
}