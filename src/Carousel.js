import React, { useState, useEffect } from 'react';

const customStyles = {
  root: {
    '--onyx': '#010101',
    '--white': '#FFFFFF',
    '--ember': '#B02026',
    '--emerald': '#00A693',
    '--sunset': '#FF6F3C',
    '--slate': '#5A7684',
  },
  bgTypography: {
    position: 'absolute',
    fontFamily: "'Teko', sans-serif",
    fontSize: '28vw',
    lineHeight: '0.8',
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 0.02)',
    whiteSpace: 'nowrap',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '0',
    pointerEvents: 'none',
    letterSpacing: '-0.02em',
  },
  bgColorBlock: {
    position: 'absolute',
    width: '40vw',
    height: '60vh',
    background: 'linear-gradient(135deg, #FF6F3C, transparent)',
    filter: 'blur(100px)',
    opacity: '0.15',
    top: '10%',
    right: '10%',
    zIndex: '0',
    borderRadius: '50%',
  },
  bgColorBlockAlt: {
    position: 'absolute',
    width: '40vw',
    height: '60vh',
    background: 'linear-gradient(135deg, #00A693, transparent)',
    filter: 'blur(100px)',
    opacity: '0.15',
    bottom: '-10%',
    left: '-10%',
    zIndex: '0',
    borderRadius: '50%',
  },
  viewportContainer: {
    position: 'relative',
    flex: '1',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: '80px 1fr 100px',
    width: '100%',
    height: '100%',
    padding: '2rem 4rem',
  },
  logo: {
    fontFamily: "'Teko', sans-serif",
    fontSize: '2.5rem',
    fontWeight: '600',
    letterSpacing: '1px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logoMark: {
    width: '24px',
    height: '24px',
    background: '#FF6F3C',
    display: 'inline-block',
    transform: 'skewX(-15deg)',
  },
  heroGraphicContainer: {
    position: 'relative',
    width: '65vw',
    height: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frameBg: {
    position: 'absolute',
    width: '60%',
    height: '80%',
    background: '#FF6F3C',
    right: '5%',
    top: '5%',
    zIndex: '1',
    boxShadow: '-20px 20px 0px rgba(255, 111, 60, 0.2)',
  },
  frameBgSecondary: {
    position: 'absolute',
    width: '40%',
    height: '60%',
    background: '#5A7684',
    left: '10%',
    bottom: '5%',
    zIndex: '1',
    opacity: '0.8',
    mixBlendMode: 'color-dodge',
  },
  heroImage: {
    position: 'absolute',
    width: '75%',
    height: '90%',
    objectFit: 'cover',
    zIndex: '2',
    filter: 'grayscale(100%) contrast(1.2)',
    mixBlendMode: 'hard-light',
    boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
  },
  heroNumber: {
    position: 'absolute',
    fontFamily: "'Teko', sans-serif",
    fontSize: '25vw',
    lineHeight: '0.7',
    color: '#FFFFFF',
    top: '-5%',
    left: '-5%',
    zIndex: '3',
    textShadow: '0 20px 40px rgba(0,0,0,0.5)',
  },
  heroName: {
    position: 'absolute',
    bottom: '-5%',
    right: '0',
    fontFamily: "'Teko', sans-serif",
    fontSize: '6vw',
    color: '#FFFFFF',
    zIndex: '3',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    lineHeight: '0.9',
    textAlign: 'right',
    textShadow: '0 10px 30px rgba(0,0,0,0.8)',
  },
  glassPanel: {
    position: 'absolute',
    left: '-10%',
    bottom: '15%',
    width: '380px',
    background: 'rgba(20, 20, 20, 0.4)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    padding: '24px',
    zIndex: '10',
    boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.05)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  glassBadge: {
    background: '#B02026',
    color: '#FFFFFF',
    fontSize: '0.65rem',
    fontWeight: '700',
    padding: '4px 8px',
    borderRadius: '4px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  glassThumbnail: {
    width: '64px',
    height: '64px',
    borderRadius: '8px',
    background: "url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop') center/cover",
    boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
    border: '1px solid rgba(255,255,255,0.1)',
    flexShrink: 0,
  },
  telemetryTrack: {
    flex: '1',
    height: '4px',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '2px',
    overflow: 'hidden',
  },
  telemetryFill: {
    height: '100%',
    borderRadius: '2px',
  },
  controlBtnMain: {
    width: '40px',
    height: '40px',
    background: '#FFFFFF',
    color: '#010101',
    borderRadius: '50%',
    opacity: '1',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s, transform 0.2s',
  },
  videoContainer: {
    position: 'relative',
    width: '65vw',
    height: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  videoOverlay: {
    position: 'absolute',
    inset: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, rgba(1,1,1,0.6), rgba(1,1,1,0.3))',
    zIndex: '5',
  },
  videoBadge: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: '#FF6F3C',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  carouselNav: {
    position: 'absolute',
    bottom: '100px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    zIndex: '20',
  },
  systemStatus: {
    display: 'flex',
    gap: '2rem',
    fontFamily: "'Teko', sans-serif",
    fontSize: '1.2rem',
    color: 'rgba(255,255,255,0.4)',
    letterSpacing: '0.05em',
  },
  sponsorLogos: {
    display: 'flex',
    gap: '1.5rem',
    opacity: '0.4',
    filter: 'grayscale(100%)',
  },
};

const PulseStyle = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Teko:wght@500;600;700&display=swap');
      * { margin: 0; padding: 0; box-sizing: border-box; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
      @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 0 0 rgba(255, 111, 60, 0.4); } 50% { box-shadow: 0 0 0 12px rgba(255, 111, 60, 0); } }
      .pulse-dot { width: 6px; height: 6px; background: #FFFFFF; border-radius: 50%; animation: blink 1.5s infinite; flex-shrink: 0; }
      .video-badge-animated { animation: pulse-glow 2s infinite; }
      .nav-link { color: #FFFFFF; text-decoration: none; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; position: relative; opacity: 0.6; transition: opacity 0.3s; cursor: pointer; background: none; border: none; font-family: 'Inter', sans-serif; }
      .nav-link:hover { opacity: 1; }
      .nav-link.active { opacity: 1; }
      .nav-link.active::after { content: ''; position: absolute; bottom: -6px; left: 0; width: 100%; height: 2px; background: #FF6F3C; }
      .btn-primary-custom { background: #FFFFFF; color: #010101; border: none; padding: 0.75rem 1.5rem; font-family: 'Inter', sans-serif; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer; transform: skewX(-10deg); transition: transform 0.2s, background 0.2s; }
      .btn-primary-custom:hover { background: #FF6F3C; color: #FFFFFF; transform: skewX(-10deg) scale(1.05); }
      .btn-primary-custom span { display: inline-block; transform: skewX(10deg); }
      .control-btn-plain { background: none; border: none; color: #FFFFFF; cursor: pointer; opacity: 0.7; transition: opacity 0.2s, transform 0.2s; display: flex; align-items: center; justify-content: center; }
      .control-btn-plain:hover { opacity: 1; transform: scale(1.1); }
      .carousel-btn-item { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.2); border: none; cursor: pointer; transition: all 0.3s ease; padding: 0; }
      .carousel-btn-item:hover { background: rgba(255,255,255,0.4); transform: scale(1.2); }
      .carousel-btn-item.active { background: #FF6F3C; width: 32px; border-radius: 4px; }
      .main-ctrl-btn:hover { background: #FF6F3C !important; color: #FFFFFF !important; transform: scale(1.05) !important; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  return null;
};

const TelemetryRow = ({ label, color, width, value }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <span style={{ width: '40px', fontFamily: "'Teko', sans-serif", fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1' }}>{label}</span>
    <div style={customStyles.telemetryTrack}>
      <div style={{ ...customStyles.telemetryFill, background: color, width: width }} />
    </div>
    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: '600', width: '30px', textAlign: 'right', color: '#FFFFFF' }}>{value}</span>
  </div>
);

const GlassControls = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
    <button className="control-btn-plain">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
    </button>
    <button className="main-ctrl-btn" style={customStyles.controlBtnMain}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
    </button>
    <button className="control-btn-plain">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
    </button>
  </div>
);

const Slide1 = () => (
  <div style={{ ...customStyles.heroGraphicContainer }}>
    <div style={customStyles.frameBg}></div>
    <div style={customStyles.frameBgSecondary}></div>
    <img src="https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=1200&auto=format&fit=crop" alt="Athlete in motion" style={customStyles.heroImage} />
    <div style={customStyles.heroNumber}>08</div>
    <div style={customStyles.heroName}>Bruce<br /><span style={{ color: '#FF6F3C', display: 'block' }}>Le</span></div>
    <div style={customStyles.glassPanel}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={customStyles.glassBadge}><div className="pulse-dot"></div> Live Session</div>
        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: '500', letterSpacing: '0.05em' }}>SYS-ID: 8492</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={customStyles.glassThumbnail}></div>
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '4px', letterSpacing: '-0.02em', color: '#FFFFFF' }}>High-Intensity Interval</h3>
          <p style={{ fontSize: '0.85rem', color: '#FF6F3C', fontWeight: '500' }}>Phase 3 Extraction</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <TelemetryRow label="HR" color="#B02026" width="92%" value="184" />
        <TelemetryRow label="VO2" color="#00A693" width="85%" value="64.2" />
        <TelemetryRow label="PWR" color="#FF6F3C" width="62%" value="840w" />
      </div>
      <GlassControls />
    </div>
  </div>
);

const Slide2 = () => (
  <div style={customStyles.heroGraphicContainer}>
    <div style={{ ...customStyles.frameBg, background: '#B02026', boxShadow: '-20px 20px 0px rgba(176, 32, 38, 0.3)' }}></div>
    <div style={{ ...customStyles.frameBgSecondary, background: '#010101' }}></div>
    <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop" alt="Basketball player" style={customStyles.heroImage} />
    <div style={{ ...customStyles.heroNumber, color: '#B02026' }}>23</div>
    <div style={customStyles.heroName}>Derek<br /><span style={{ color: '#B02026', display: 'block' }}>Cross</span></div>
    <div style={customStyles.glassPanel}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ ...customStyles.glassBadge, background: '#00A693' }}><div className="pulse-dot"></div> Recovered</div>
        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: '500', letterSpacing: '0.05em' }}>SYS-ID: 7341</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ ...customStyles.glassThumbnail, background: "url('https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=400&auto=format&fit=crop') center/cover" }}></div>
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '4px', letterSpacing: '-0.02em', color: '#FFFFFF' }}>Full Court Analysis</h3>
          <p style={{ fontSize: '0.85rem', color: '#FF6F3C', fontWeight: '500' }}>Game Speed Extraction</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <TelemetryRow label="SPD" color="#FF6F3C" width="88%" value="34.2" />
        <TelemetryRow label="JMP" color="#00A693" width="94%" value='41"' />
        <TelemetryRow label="AGL" color="#B02026" width="79%" value="9.8" />
      </div>
      <GlassControls />
    </div>
  </div>
);

const Slide3 = () => (
  <div style={customStyles.videoContainer}>
    <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}>
      <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(60%) contrast(1.1)' }}>
        <source src="https://assets.mixkit.co/videos/preview/mixkit-silhouette-of-a-man-running-at-sunset-3845-large.mp4" type="video/mp4" />
      </video>
    </div>
    <div style={customStyles.videoOverlay}>
      <div style={{ ...customStyles.heroNumber, fontSize: '18vw', opacity: '0.3' }}>01</div>
      <div style={customStyles.heroName}>Archive<br /><span style={{ color: '#FF6F3C', display: 'block' }}>Footage</span></div>
      <div style={{ position: 'absolute', bottom: '10%', left: '-10%', display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', background: 'rgba(20, 20, 20, 0.5)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px' }}>
        <div className="video-badge-animated" style={customStyles.videoBadge}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
        </div>
        <div>
          <p style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '4px', color: '#FFFFFF' }}>Sprint Session Alpha</p>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em' }}>4:32 // 1080p60</span>
        </div>
      </div>
    </div>
  </div>
);

const Slide4 = () => (
  <div style={customStyles.heroGraphicContainer}>
    <div style={{ ...customStyles.frameBg, background: '#5A7684', boxShadow: '-20px 20px 0px rgba(90, 118, 132, 0.3)' }}></div>
    <div style={{ ...customStyles.frameBgSecondary, background: '#00A693', mixBlendMode: 'normal', opacity: '0.6' }}></div>
    <img src="https://images.unsplash.com/photo-1434608519344-49d77a699ded?q=80&w=1200&auto=format&fit=crop" alt="Swimmer" style={customStyles.heroImage} />
    <div style={{ ...customStyles.heroNumber, color: '#5A7684' }}>07</div>
    <div style={customStyles.heroName}>Elena<br /><span style={{ color: '#00A693', display: 'block' }}>Voss</span></div>
    <div style={customStyles.glassPanel}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ ...customStyles.glassBadge, background: '#5A7684' }}><div className="pulse-dot"></div> Analysis</div>
        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: '500', letterSpacing: '0.05em' }}>SYS-ID: 5592</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ ...customStyles.glassThumbnail, background: "url('https://images.unsplash.com/photo-1434608519344-49d77a699ded?q=80&w=400&auto=format&fit=crop') center/cover" }}></div>
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '4px', letterSpacing: '-0.02em', color: '#FFFFFF' }}>Underwater Propulsion</h3>
          <p style={{ fontSize: '0.85rem', color: '#FF6F3C', fontWeight: '500' }}>Stroke Efficiency Test</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <TelemetryRow label="STR" color="#00A693" width="96%" value="96%" />
        <TelemetryRow label="DRG" color="#5A7684" width="72%" value="0.42" />
        <TelemetryRow label="LCT" color="#FF6F3C" width="88%" value="1:04" />
      </div>
      <GlassControls />
    </div>
  </div>
);

const slides = [
  { component: <Slide1 />, label: '01' },
  { component: <Slide2 />, label: '02' },
  { component: <Slide3 />, label: '03' },
  { component: <Slide4 />, label: '04' },
];

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeNav, setActiveNav] = useState('Athletes');
  const navItems = ['Athletes', 'Metrics', 'Recruitment', 'System'];

  return (
    <>
      <PulseStyle />
      <div style={{ backgroundColor: '#010101', color: '#FFFFFF', fontFamily: "'Inter', sans-serif", overflowX: 'hidden', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={customStyles.viewportContainer}>
          {/* Background elements */}
          <div style={customStyles.bgTypography}>VELOCITY</div>
          <div style={customStyles.bgColorBlock}></div>
          <div style={customStyles.bgColorBlockAlt}></div>

          {/* Header */}
          <header style={{ gridColumn: '1 / -1', gridRow: '1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: '10' }}>
            <div style={customStyles.logo}>
              <div style={customStyles.logoMark}></div>
              APEX
            </div>
            <nav style={{ display: 'flex', gap: '3rem' }}>
              {navItems.map((item) => (
                <button
                  key={item}
                  className={`nav-link${activeNav === item ? ' active' : ''}`}
                  onClick={() => setActiveNav(item)}
                >
                  {item}
                </button>
              ))}
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <button className="btn-primary-custom"><span>Scout Portal</span></button>
            </div>
          </header>

          {/* Main */}
          <main style={{ gridColumn: '1 / -1', gridRow: '2', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '5' }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: activeSlide === idx ? 1 : 0,
                    transition: 'opacity 0.6s ease',
                    pointerEvents: activeSlide === idx ? 'all' : 'none',
                  }}
                >
                  {slide.component}
                </div>
              ))}
            </div>
          </main>

          {/* Carousel Nav */}
          <div style={customStyles.carouselNav}>
            {slides.map((slide, idx) => (
              <button
                key={idx}
                className={`carousel-btn-item${activeSlide === idx ? ' active' : ''}`}
                onClick={() => setActiveSlide(idx)}
              />
            ))}
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: '600', color: 'rgba(255,255,255,0.4)', marginLeft: '16px', letterSpacing: '0.1em' }}>
              {String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
          </div>

          {/* Footer */}
          <footer style={{ gridColumn: '1 / -1', gridRow: '3', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', zIndex: '10', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
            <div style={customStyles.systemStatus}>
              <div>SYNC <span style={{ color: '#FFFFFF', marginLeft: '8px' }}>ONLINE</span></div>
              <div>NODE <span style={{ color: '#FFFFFF', marginLeft: '8px' }}>ST-04</span></div>
              <div>LATENCY <span style={{ color: '#FFFFFF', marginLeft: '8px' }}>12MS</span></div>
            </div>
            <div style={customStyles.sponsorLogos}>
              <svg viewBox="0 0 100 30" style={{ height: '20px', fill: 'currentColor' }}><path d="M10 15 L20 0 L30 15 L20 30 Z M40 0 H60 V10 H40 Z M40 20 H60 V30 H40 Z M70 0 H90 A10 10 0 0 1 90 20 H70 Z"></path></svg>
              <svg viewBox="0 0 100 30" style={{ height: '20px', fill: 'currentColor' }}><circle cx="15" cy="15" r="15"></circle><rect x="40" y="5" width="40" height="20" rx="10"></rect></svg>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Carousel;