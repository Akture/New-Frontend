import './Banner.css';

const tickerMessages = [
  'WELCOME TO AKTURE',
  'Tag us in your highlights @akture.video for a secret gift',
  'Let us know where you want to see Akture next',
];

export default function Banner() {
  return (
    <div className="bg-ember text-marble py-2 px-4 text-sm font-medium tracking-wide z-50 relative border-b border-ember/50 ticker-container">
      <div className="ticker-track whitespace-nowrap">
        {[...tickerMessages, ...tickerMessages, ...tickerMessages].map((message, index) => (
          <span key={index} className="mx-4 inline-flex items-center gap-2">
            <span className="text-marble/80">•</span>
            <span>{message}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
