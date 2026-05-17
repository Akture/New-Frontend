export default function FacilitySection() {
  const facilities = [
    {
      icon: 'ph ph-eye',
      color: '#00A693',
      bg: 'rgba(0,166,147,0.1)',
      border: 'rgba(0,166,147,0.2)',
      title: 'Boost Visibility',
      desc: 'Your games are your best marketing tool - and with Akture, facilities and their players have a novel video source to post and share.',
    },
    {
      icon: 'ph ph-rocket',
      color: '#FF6F3C',
      bg: 'rgba(255,111,60,0.1)',
      border: 'rgba(255,111,60,0.2)',
      title: 'Offer New Technologies',
      desc: 'Bring your courts into the future with seamless video capture, livestreaming, and (coming soon) instant replay capability.',
    },
    {
      icon: 'ph ph-target',
      color: '#5A7684',
      bg: 'rgba(90,118,132,0.1)',
      border: 'rgba(90,118,132,0.2)',
      title: 'Engage Athletes',
      desc: 'A picture\'s worth a thousand words - how valuable is video? Let players analyze their performance, review key plays, and level up their game.',
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
            Get the Most Out of Your Facility with Akture
          </h2>
          <p className="text-marble/60 max-w-2xl mx-auto text-lg">
            Join forward-thinking owners everywhere who are maximizing visibility and delivering exceptional experiences to their athletes and fans.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:gap-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {facilities.map((facility, i) => (
              <div key={i} className="group">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors"
                  style={{ background: facility.bg, border: `1px solid ${facility.border}` }}
                >
                  <i className={`${facility.icon} text-3xl`} style={{ color: facility.color }}></i>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {facility.title}
                </h3>
                <p className="text-marble/60 text-sm leading-relaxed">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}