import { Link } from 'react-router-dom';

export default function PricingHero() {
  return (
    <section className="relative px-6 md:px-12 py-24 text-center">
      <div className="absolute inset-0 bg-dot-pattern opacity-70" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="text-gradient-ember italic text-xs font-black tracking-[0.25em] uppercase mb-6">
          Simple Pricing
        </p>

        <h1 className="font-heading text-5xl md:text-7xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
          Pay for exactly
          <br />
          <span className="text-gradient-ember italic inline-block pr-2 pb-2">what you need.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          No hidden fees. No long-term commitments. Pay per video whenever you want,
          or add a subscription for storage and monthly credits.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <Link
            to="/register"
            className="bg-gradient-ember text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_10px_20px_-8px_rgba(189,32,38,0.6)]"
          >
            Get Started Free →
          </Link>

          <Link
            to="/login"
            className="bg-white text-onyx border border-gray-200 hover:border-ember hover:text-ember dark:bg-[#111827] dark:text-white dark:border-white/10 px-8 py-4 rounded-full font-bold transition-all"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}
