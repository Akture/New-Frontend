import { useState } from 'react';

export default function FeedbackTab() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim() && rating > 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center p-12 rounded-2xl border shadow-sm max-w-2xl mx-auto mt-8 bg-white border-gray-200 dark:bg-[#111827] dark:border-white/10">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-emerald/10">
          <svg className="w-8 h-8 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-onyx dark:text-white mb-2">
          Thank you for your feedback!
        </h3>

        <p className="text-gray-500 dark:text-gray-400 text-center">
          Your response has been recorded. We appreciate your input.
        </p>

        <button
          onClick={() => {
            setSubmitted(false);
            setFeedback('');
            setRating(0);
          }}
          className="mt-6 px-6 py-2.5 rounded-lg font-semibold text-sm text-white transition-colors bg-ember hover:bg-red-800"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border shadow-sm p-8 max-w-2xl mx-auto mt-8 bg-white border-gray-200 dark:bg-[#111827] dark:border-white/10">
      <h2 className="text-2xl font-bold text-onyx dark:text-white mb-2">
        Leave Feedback
      </h2>

      <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">
        We value your opinion. Help us improve your experience.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="block text-sm font-semibold text-onyx dark:text-white mb-2">
            Your Rating
          </label>

          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="text-2xl transition-transform hover:scale-110"
                style={{
                  color: star <= (hoveredRating || rating) ? '#FF6F3C' : '#D1D5DB',
                }}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-onyx dark:text-white mb-2">
            Your Feedback
          </label>

          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
            placeholder="Tell us about your experience..."
            className="w-full px-4 py-3 rounded-lg border text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ember/30 focus:border-ember bg-gray-50 border-gray-200 text-onyx placeholder-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-500"
          />
        </div>

        <button
          type="submit"
          disabled={!feedback.trim() || rating === 0}
          className="self-start px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-wider text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-ember hover:bg-red-800"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}