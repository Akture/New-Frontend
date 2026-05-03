const newsletterHighlights = [
  {
    title: 'Early Updates',
    description: 'Hear about upcoming Akture partner sites, features in development, and other major milestones.',
    bgClass: 'bg-emerald/10 border-emerald/20 text-emerald',
  },
  {
    title: 'Featured Highlights',
    description: 'Catch standout plays, incredible saves, and news about the hottest sports sites in your area.',
    bgClass: 'bg-sunset/10 border-sunset/20 text-sunset',
  },
  {
    title: 'Exclusive Opportunities',
    description: 'Beta test new features, find out about events and limited promos, and be a part of Akture\'s journey.',
    bgClass: 'bg-slate/10 border-slate/20 text-slate',
  },
];

export default function NewsletterCalloutSection() {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mt-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Get the Most Out of Your Akture Experience
            </h2>
            <p className="text-marble/60 text-lg">
              Subscribe to Akture's monthly newsletter to stay up-to-date on all the action, see highlights of users and facilities, and get early notice of exclusive opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsletterHighlights.map((item, index) => (
              <div key={index} className={`rounded-3xl border p-8 shadow-xl shadow-emerald/10 transition-all hover:-translate-y-1 ${item.bgClass}`}>
                <h3 className="font-heading text-xl font-semibold mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-marble/80 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <form onSubmit={(e) => e.preventDefault()} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border border-white/10 bg-black/70 px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-ember/50"
                />
                <button
                  type="submit"
                  className="rounded-full bg-ember px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-red-700"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}