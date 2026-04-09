import GlassPanel from '../GlassPanel/GlassPanel';

export default function FeaturesSection() {
  const features = [
    {
      icon: 'ph ph-lightning',
      color: '#00A693',
      bg: 'rgba(0,166,147,0.1)',
      border: 'rgba(0,166,147,0.2)',
      title: 'Real-time Telemetry',
      desc: 'Instantly sync data from wearables to analyze speed, power, and efficiency exactly when it happens.',
    },
    {
      icon: 'ph ph-chart-polar',
      color: '#FF6F3C',
      bg: 'rgba(255,111,60,0.1)',
      border: 'rgba(255,111,60,0.2)',
      title: 'AI Form Correction',
      desc: 'Upload video for immediate AI analysis comparing your form against thousands of professional profiles.',
    },
    {
      icon: 'ph ph-broadcast',
      color: '#BD2026',
      bg: 'rgba(189,32,38,0.1)',
      border: 'rgba(189,32,38,0.2)',
      title: 'HD Live Streaming',
      desc: 'Broadcast your events or training sessions in 4K with integrated overlays showing your live stats.',
    },
    {
      icon: 'ph ph-users-three',
      color: '#94a3b8',
      bg: 'rgba(90,118,132,0.1)',
      border: 'rgba(90,118,132,0.2)',
      title: 'Elite Community',
      desc: 'Connect with coaches, scouts, and other athletes. Share insights, compete on leaderboards, and grow.',
    },
  ];

  return (
    <section className="py-24 bg-onyx relative overflow-hidden">
      <div
        className="absolute top-0 right-0 rounded-full pointer-events-none"
        style={{
          width: '800px',
          height: '800px',
          background: 'rgba(189,32,38,0.05)',
          filter: 'blur(120px)',
          transform: 'translateY(-50%) translateX(33%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 rounded-full pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'rgba(0,166,147,0.05)',
          filter: 'blur(100px)',
          transform: 'translateY(33%) translateX(-33%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Why Athletes Choose Us
          </h2>
          <p className="text-marble/60 max-w-2xl mx-auto text-lg">
            The ultimate ecosystem built for performance, analysis, and broadcasting your journey to greatness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative group">
            <div
              className="absolute inset-0 transform transition-transform duration-700 group-hover:scale-105"
              style={{
                background: 'linear-gradient(to top right, rgba(189,32,38,0.2), rgba(0,166,147,0.2))',
                filter: 'blur(2rem)',
                borderRadius: '3rem',
              }}
            />
            <div
              className="relative overflow-hidden shadow-2xl shadow-black/80"
              style={{
                borderRadius: '2.5rem',
                border: '8px solid #111827',
                background: '#000',
                aspectRatio: '4/5',
              }}
            >
              <div className="w-full h-full flex flex-col" style={{ background: '#010101' }}>
                <img
                  src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Dashboard background"
                  className="w-full h-48 object-cover opacity-60"
                />
                <div className="p-6 -mt-12 relative z-10 flex-1 flex flex-col gap-4">
                  <GlassPanel className="p-4 rounded-2xl flex justify-between items-end">
                    <div>
                      <p className="text-xs text-marble/60 uppercase font-semibold mb-1">Current Pace</p>
                      <p className="font-heading text-4xl font-bold" style={{ color: '#00A693', fontFamily: 'Outfit, sans-serif' }}>
                        4:20<span className="text-xl text-marble/60 font-medium">/km</span>
                      </p>
                    </div>
                    <i className="ph-fill ph-trend-up text-2xl" style={{ color: '#00A693' }}></i>
                  </GlassPanel>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl border border-white/5" style={{ background: 'rgba(17,24,39,0.8)' }}>
                      <i className="ph ph-heartbeat text-xl mb-2 block" style={{ color: '#BD2026' }}></i>
                      <p className="text-2xl font-bold">168</p>
                      <p className="text-xs text-marble/50">Avg BPM</p>
                    </div>

                    <div className="p-4 rounded-2xl border border-white/5" style={{ background: 'rgba(17,24,39,0.8)' }}>
                      <i className="ph ph-fire text-xl mb-2 block" style={{ color: '#FF6F3C' }}></i>
                      <p className="text-2xl font-bold">840</p>
                      <p className="text-xs text-marble/50">Kcal Burned</p>
                    </div>
                  </div>

                  <div className="mt-auto p-4 rounded-2xl border border-white/5 h-24 flex items-center justify-center" style={{ background: 'rgba(17,24,39,0.8)' }}>
                    <svg className="w-full h-12" viewBox="0 0 100 30" preserveAspectRatio="none">
                      <path d="M0,30 L10,25 L20,28 L30,15 L40,20 L50,5 L60,10 L70,2 L80,15 L90,10 L100,20 L100,30 Z" fill="rgba(189,32,38,0.2)" />
                      <path d="M0,30 L10,25 L20,28 L30,15 L40,20 L50,5 L60,10 L70,2 L80,15 L90,10 L100,20" fill="none" stroke="#BD2026" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {features.map((feature, i) => (
              <div key={i} className="group">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors"
                  style={{ background: feature.bg, border: `1px solid ${feature.border}` }}
                >
                  <i className={`${feature.icon} text-3xl`} style={{ color: feature.color }}></i>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-marble/60 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}