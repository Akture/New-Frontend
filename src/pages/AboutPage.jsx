import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-onyx text-marble overflow-x-hidden">
      <Banner />
      <Header />

      <main className="pt-4">
        <section className="relative px-6 md:px-12 py-24 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <p className="text-gradient-ember text-xs font-black tracking-[0.25em] uppercase mb-6">
              About Akture
            </p>

            <h1 className="font-heading text-5xl md:text-7xl font-black tracking-tight text-white mb-6">
              Built for Athletes.
              <br />
              <span className="text-gradient-ember">Designed for Moments.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Akture is revolutionizing sports performance through cutting-edge video capture technology,
              making professional-grade analysis and memories accessible to every athlete.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-12 py-20 border-y border-white/10 bg-black/40">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gradient-ember text-xs font-black tracking-[0.25em] uppercase mb-4">
                Our Mission
              </p>

              <h2 className="font-heading text-4xl md:text-5xl font-black text-white mb-6">
                Give every athlete access to elite tools.
              </h2>

              <p className="text-gray-400 leading-relaxed mb-6">
                We believe every athlete deserves access to the same performance analysis tools used by
                professional teams. Our platform captures, organizes, and delivers video so athletes can
                review, improve, and share their best moments.
              </p>

              <p className="text-gray-400 leading-relaxed">
                From youth sports to competitive programs, we’re helping teams and players unlock better
                training, better memories, and better performance.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 shadow-2xl shadow-black/40">
              <div className="text-5xl mb-6"><i className="ph ph-crosshair"></i></div>
              <h3 className="font-heading text-2xl font-black text-white mb-3">
                Our Vision
              </h3>
              <p className="text-gray-400 leading-relaxed">
                A world where every athlete has the tools to reach their full potential, regardless of
                location, budget, or experience level.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-24">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gradient-ember text-xs font-black tracking-[0.25em] uppercase mb-4">
              The Team
            </p>

            <h2 className="font-heading text-4xl md:text-5xl font-black text-white mb-14">
              Built by people who love sport and technology.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'ph ph-briefcase',
                  title: 'Leadership Team',
                  text: 'Experienced entrepreneurs and sports enthusiasts driving the vision forward.',
                  color: 'bg-ember',
                },
                {
                  icon: 'ph ph-code',
                  title: 'Engineering Team',
                  text: 'Developers building the capture, playback, and performance tools behind Akture.',
                  color: 'bg-slate',
                },
                {
                  icon: 'ph ph-trophy',
                  title: 'Sports Advisors',
                  text: 'Athletes and coaches helping shape the product around real training needs.',
                  color: 'bg-emerald',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 text-left hover:border-ember/60 transition-all"
                >
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                    <i className={item.icon}></i>
                  </div>

                  <h3 className="font-heading text-xl font-black text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}