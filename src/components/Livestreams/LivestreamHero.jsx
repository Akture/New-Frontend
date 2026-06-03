export default function LivestreamHero() {
  return (
    <div className="flex items-center gap-5">
      <div className="w-16 h-16 rounded-2xl bg-emerald flex items-center justify-center shadow-lg">
        <i className="ph ph-broadcast text-3xl text-white"></i>
      </div>

      <div>
        <p className="text-slate dark:text-gray-400 font-medium">
          Manage your livestreams, schedules, and streaming sessions
        </p>
      </div>
    </div>
  );
}