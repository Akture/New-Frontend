import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-onyx relative border-y border-white/5 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{
          width: '800px',
          height: '300px',
          background: 'linear-gradient(to right, rgba(189,32,38,0.1), transparent)',
          filter: 'blur(80px)',
          transform: 'translate(-50%, -50%) skewY(-12deg)',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <i className="ph ph-envelope-simple-open text-5xl text-marble/30 mb-6 block"></i>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Stay Ahead of the Game
        </h2>
        <p className="text-marble/60 mb-10 text-lg max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive insights, platform updates, and tips to maximize your performance metrics.
        </p>

        {submitted ? (
          <div className="text-emerald text-lg font-semibold py-4">🎉 You're subscribed! Thanks for joining.</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              placeholder="Enter your email address"
              className="flex-1 rounded-full px-6 py-4 text-white placeholder-white/40 focus:outline-none transition-colors"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: error ? '1px solid #BD2026' : '1px solid rgba(255,255,255,0.1)',
              }}
              required
            />
            <button
              type="submit"
              className="bg-ember hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all whitespace-nowrap"
              style={{ boxShadow: '0 0 15px rgba(189,32,38,0.2)' }}
            >
              Subscribe Now
            </button>
          </form>
        )}

        {error && <p className="text-ember text-sm mt-2">{error}</p>}
        <p className="text-xs text-marble/40 mt-4">We respect your privacy. No spam, ever.</p>
      </div>
    </section>
  );
}