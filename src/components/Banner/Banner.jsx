import './Banner.css';

export default function Banner() {
  return (
    <div className="bg-ember text-marble py-2 px-4 text-sm font-medium tracking-wide z-50 relative border-b border-ember/50 ticker-container">
      <div className="inline-block ticker-track whitespace-nowrap">
        <span className="mx-4">🔥 NEW FEATURE: Advanced Biometric Syncing is now live!</span>
        <span className="mx-4">•</span>
        <span className="mx-4">🏆 Watch the Global Endurance Championships EXCLUSIVELY on Akture this weekend.</span>
        <span className="mx-4">•</span>
        <span className="mx-4">⚡️ Upgrade to Pro and get 20% off your first year. Use code: SPEED20</span>
        <span className="mx-4">•</span>
        <span className="mx-4">🔥 NEW FEATURE: Advanced Biometric Syncing is now live!</span>
        <span className="mx-4">•</span>
        <span className="mx-4">🏆 Watch the Global Endurance Championships EXCLUSIVELY on Akture this weekend.</span>
      </div>
    </div>
  );
}