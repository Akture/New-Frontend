import { videoCards } from '../../data/videoCards';

export default function VideoSection() {
  return (
    <section className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            See Akture in Action
          </h2>
          <p className="text-marble/60 max-w-2xl mx-auto text-lg">
            Preview the quality, simplicity, and connection of Akture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videoCards.map((card, i) => (
            <a
              key={i}
              href={card.url}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-2xl overflow-hidden block bg-gray-900 border border-white/5"
              style={{ aspectRatio: '16/9' }}
            >
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 glass-panel-base" style={{ background: 'rgba(255, 255, 255, 0.04)' }}>
                  <i className="ph-bold ph-play text-2xl text-white"></i>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/10 to-transparent">
                <h3 className="font-heading font-semibold text-2xl text-white mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {card.title}
                </h3>
                <p className="text-marble/60 text-sm leading-relaxed">{card.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}