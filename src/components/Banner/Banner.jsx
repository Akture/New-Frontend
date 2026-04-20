import './Banner.css';

const tickerMessages = [
  'NEW FEATURE: Event Livestreams - Site managers, owners, and coaches can stream from any akture-enabled site',
  'COMING SOON: Subscriptions and Bundles - conveniently access more footage and more storage',
  'COACHES - record and review in-game footage with no setup overhead!',
];

export default function Banner() {
  return (
    <div className="bg-ember text-marble py-2 px-4 text-sm font-medium tracking-wide z-50 relative border-b border-ember/50 ticker-container">
      <div className="ticker-track whitespace-nowrap">
        {[...tickerMessages, ...tickerMessages].map((message, index) => (
          <span key={index} className="mx-4 inline-flex items-center gap-2">
            <span className="text-marble/80">•</span>
            <span>{message}</span>
          </span>
        ))}
      </div>
    </div>
  );
}