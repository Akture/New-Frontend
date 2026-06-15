export default function FeaturesSection() {
  const features = [
    {
      icon: 'ph ph-lightning',
      color: '#00A693',
      bg: 'rgba(0,166,147,0.1)',
      border: 'rgba(0,166,147,0.2)',
      title: 'Relive the Moment',
      desc: 'Go back and relive those game-changing plays, clutch shots, and total fails anytime, anywhere. Make sure to show off to Grandma.',
    },
    {
      icon: 'ph ph-chart-polar',
      color: '#FF6F3C',
      bg: 'rgba(255,111,60,0.1)',
      border: 'rgba(255,111,60,0.2)',
      title: 'Easy to Use',
      desc: 'Accessing your footage is as simple as scanning a QR code, selecting the time and location you played, and confirming your choice.',
    },
    {
      icon: 'ph ph-broadcast',
      color: '#BD2026',
      bg: 'rgba(189,32,38,0.1)',
      border: 'rgba(189,32,38,0.2)',
      title: 'Competitive Advantage',
      desc: 'Enhance your play with instant access to HD game and practice footage, spot opportunities for improvement and elevate your play.',
    },
    {
      icon: 'ph ph-users-three',
      color: '#94a3b8',
      bg: 'rgba(90,118,132,0.1)',
      border: 'rgba(90,118,132,0.2)',
      title: 'Share the Memories',
      desc: 'Celebrate with your community and showcase standout moments - whether it’s for bragging rights or building your personal portfolio.',
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-onyx relative overflow-hidden">
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
            Why Athletes Choose Akture
          </h2>
          <p className="text-gray-500 dark:text-marble/60 max-w-2xl mx-auto text-lg">
            The ultimate ecosystem built for performance, analysis, and broadcasting your journey to greatness.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:gap-24">
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
                <p className="text-gray-500 dark:text-marble/60 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-ember text-white px-8 py-4 rounded-full font-semibold transition-all">
              Start Capturing With Akture
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
