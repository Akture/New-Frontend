import './Banner.css';
import { useRef, useEffect, useState } from 'react';

const tickerMessages = [
  'WELCOME TO AKTURE',
  'Tag us in your highlights @akture.video for a secret gift',
  'Let us know where you want to see Akture next',
];

export default function Banner() {
  const trackRef = useRef(null);
  const [duration, setDuration] = useState(20);

  useEffect(() => {
    if (trackRef.current) {
      // Calculate duration based on content width
      // Roughly 50px per second of scroll speed
      const width = trackRef.current.scrollWidth / 2; // Half because we duplicate
      const newDuration = Math.max(15, width / 50); // Minimum 15s, adjust 50 to change speed
      setDuration(newDuration);
    }
  }, []);

  return (
    <div className="bg-ember text-marble py-2 px-4 text-sm font-medium tracking-wide z-50 relative border-b border-ember/50 ticker-container">
      <div 
        ref={trackRef}
        className="ticker-track whitespace-nowrap"
        style={{ animationDuration: `${duration}s` }}
      >
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
