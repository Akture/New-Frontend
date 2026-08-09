import { DEFAULT_PLAN_ID, getPlanById } from '../../data/subscriptionPlans';

export default function StorageCard({ onRefresh, planId = DEFAULT_PLAN_ID }) {
  const plan = getPlanById(planId);

  return (
    <div className="rounded-2xl shadow-sm border p-6 sm:p-8 w-full max-w-4xl mx-auto mt-4 transition-all hover:shadow-md bg-white border-gray-200 dark:bg-[#111827] dark:border-white/10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3 flex-wrap">
          <h2 className="text-lg font-bold text-onyx dark:text-white flex items-center">
            Storage Used
            <span className="text-gray-500 dark:text-gray-400 font-medium text-sm ml-2 px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800">
              (Plan: {plan.name})
            </span>
          </h2>

          <span className="text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wide flex items-center gap-1 bg-emerald/10 text-emerald border border-emerald/20">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Safe
          </span>

          <button
            onClick={onRefresh}
            className="text-gray-500 hover:text-ember p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-1"
            title="Refresh Storage"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>

        <div className="text-right flex items-center sm:block gap-2">
          <span className="font-extrabold text-onyx dark:text-white text-lg">0 hours</span>
          <span className="text-gray-500 dark:text-gray-400 font-medium text-sm"> / 3 hours</span>
        </div>
      </div>

      <div className="w-full rounded-full h-4 overflow-hidden relative shadow-inner border bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out relative"
          style={{ width: '0%', background: 'linear-gradient(to right, #00A693, #00c9b1)' }}
        >
          <div className="absolute inset-0 bg-white/20 w-full animate-pulse"></div>
        </div>
      </div>

      <div className="flex justify-end mt-2">
        <span className="text-xs font-bold text-gray-500 dark:text-gray-400 tracking-wide">
          0% USED
        </span>
      </div>
    </div>
  );
}