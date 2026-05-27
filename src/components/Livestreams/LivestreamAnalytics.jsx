export default function LivestreamAnalytics() {
  const stats = [
    { label: 'Total Streams', value: 0, color: 'text-emerald' },
    { label: 'Active Streams', value: 0, color: 'text-sunset' },
    { label: 'Scheduled', value: 0, color: 'text-slate' },
    { label: 'Completed', value: 0, color: 'text-emerald' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-10">
      <h1 className="text-4xl font-black tracking-tight text-onyx dark:text-white mb-8">
        Livestream Analytics
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border p-8 shadow-sm bg-white border-gray-300 dark:bg-[#111827] dark:border-white/10"
          >
            <h2 className="text-2xl font-black text-onyx dark:text-white mb-6">
              {stat.label}
            </h2>

            <p className={`text-4xl font-black ${stat.color}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}