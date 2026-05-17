import { useState, useEffect, useRef, useCallback } from 'react';
import GlassPanel from '../GlassPanel/GlassPanel';
import { heroSlides } from '../../data/heroSlides';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);
  const totalSlides = heroSlides.length;

  const startInterval = useCallback(() => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
  }, [totalSlides]);

  const resetInterval = useCallback(() => {
    startInterval();
  }, [startInterval]);

  useEffect(() => {
    startInterval();

    return () => clearInterval(intervalRef.current);
  }, [startInterval]);

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    resetInterval();
  };

  const goPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    resetInterval();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetInterval();
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-onyx" style={{ minHeight: '800px' }}>
      <div className="relative w-full h-full">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.id}
            className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === currentSlide ? 1 : 0, zIndex: i === currentSlide ? 10 : 0 }}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-onyx/95 via-onyx/70 to-transparent"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-20">
                <div className="max-w-2xl">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-widest mb-6 ${slide.badgeColor}`}>
                    <i className={slide.badgeIcon}></i> {slide.badgeText}
                  </span>

                  <h1
                    className="font-heading text-6xl md:text-8xl font-extrabold text-marble leading-tight mb-6 tracking-tight"
                    style={{ fontFamily: 'Outfit, sans-serif', lineHeight: 1.1 }}
                  >
                    {slide.headingLine1}
                    <br />
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.headingGradient}`}>
                      {slide.headingLine2}
                    </span>
                  </h1>

                  <p className="text-lg md:text-xl text-marble/70 mb-10 max-w-lg font-light leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    {slide.btn1Text && slide.btn1Href && (
                      <a
                        href={slide.btn1Href}
                        className={`${slide.btn1Class} px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2 text-lg`}
                        style={slide.btn1Shadow ? { boxShadow: slide.btn1Shadow } : {}}
                      >
                        {slide.btn1Text} <i className="ph-bold ph-arrow-right"></i>
                      </a>
                    )}

                    {slide.btn2Text && slide.btn2Href && (
                      <a href={slide.btn2Href}>
                        <GlassPanel className="hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2 text-lg cursor-pointer">
                          {slide.btn2Text} {slide.btn2Icon && <i className={slide.btn2Icon}></i>}
                        </GlassPanel>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-12 right-6 md:right-12 flex gap-4 z-20">
        <button
          onClick={goPrev}
          className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all hover:bg-white/20 glass-panel-base"
        >
          <i className="ph-bold ph-caret-left text-xl"></i>
        </button>
        <button
          onClick={goNext}
          className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all hover:bg-white/20 glass-panel-base"
        >
          <i className="ph-bold ph-caret-right text-xl"></i>
        </button>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className="h-1.5 rounded-full transition-all"
            style={{
              width: i === currentSlide ? '4rem' : '3rem',
              backgroundColor: i === currentSlide ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.3)',
            }}
          />
        ))}
      </div>
    </section>
  );
}