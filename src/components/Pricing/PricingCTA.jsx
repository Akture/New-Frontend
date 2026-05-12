import { Link } from 'react-router-dom';

export default function PricingCTA() {
  return (
    <section className="bg-[#111827] text-white px-6 md:px-12 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-black">
        Ready to capture your moments?
      </h2>

      <p className="text-gray-400 mt-4 max-w-md mx-auto">
        Create a free account and buy your first video in under 2 minutes.
      </p>

      <Link
        to="/register"
        className="inline-block mt-10 bg-ember hover:bg-red-800 text-white px-8 py-4 rounded-full font-black transition-all shadow-[0_10px_20px_-8px_rgba(189,32,38,0.8)]"
      >
        Get Started Free →
      </Link>
    </section>
  );
}