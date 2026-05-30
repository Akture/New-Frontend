import { Link } from 'react-router-dom';

export default function PricingHero() {
  return (
    <section className="px-6 md:px-12 py-20 text-center">
      <p className="text-gradient-ember text-xs font-black tracking-[0.25em] uppercase mb-6">
        Simple Pricing
      </p>

      <h1 className="text-4xl md:text-6xl font-black tracking-tight text-onyx dark:text-white max-w-4xl mx-auto">
        Pay for exactly what you need
      </h1>

      <p className="text-lg md:text-xl text-slate dark:text-gray-400 max-w-2xl mx-auto mt-6 leading-relaxed">
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
          Sign In
        </Link>
      </div>
    </section>
  );
}