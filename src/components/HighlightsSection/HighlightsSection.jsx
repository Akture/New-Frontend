import { useState } from 'react';
import { videoCards } from '../../data/videoCards';

export default function HighlightsSection() {
  const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <section className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-ember font-bold tracking-widest text-sm uppercase mb-2 block">Akture Originals</span>
            <h2 className="font-heading text-4xl font-bold tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Latest Highlights
            </h2>
          </div>
          <button className="text-sm font-medium hover:text-ember transition-colors flex items-center gap-2">
            View All Gallery <i className="ph-bold ph-arrow-right"></i>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoCards.map((card, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-gray-900 border border-white/5"
              style={{ aspectRatio: '16/9' }}
              onClick={() => setPlayingIndex(playingIndex === i ? null : i)}
            >
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ opacity: playingIndex === i ? 0.3 : 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 glass-panel-base"
                  style={{
                    background: playingIndex === i ? 'rgba(189,32,38,0.9)' : 'rgba(255, 255, 255, 0.03)',
                  }}
                >
                  <i className={`ph-fill ${playingIndex === i ? 'ph-pause' : 'ph-play'} text-2xl text-white ml-1`}></i>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-2 py-1 rounded bg-black/50 backdrop-blur-sm text-xs font-semibold mb-2">
                  {card.duration}
                </span>
                <h3 className="font-heading font-semibold text-lg line-clamp-1 group-hover:text-ember transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}