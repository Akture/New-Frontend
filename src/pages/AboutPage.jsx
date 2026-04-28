import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Banner />  
      <Header />
      <main className = "pt-10">
        {/* Hero Section for About */}
        <section className="relative py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About <span className="text-red-500">Akture</span>
          </h1>
            <p className="text-xl text-marble/70 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing sports performance through cutting-edge video capture technology.
              We're on a mission to make professional-grade analysis accessible to everyone.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-6 md:px-12 bg-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-marble mb-6">Our Mission</h2>
                <p className="text-marble/70 leading-relaxed mb-6">
                  At Akture, we believe every athlete deserves access to the same performance analysis tools
                  used by professional teams. Our AI-powered platform captures, analyzes, and provides insights
                  that help athletes of all levels improve their game.
                </p>
                <p className="text-marble/70 leading-relaxed">
                  From youth sports to professional leagues, we're democratizing sports technology to level
                  the playing field and unlock human potential.
                </p>
              </div>
              <div className="bg-gradient-to-br from-ember/20 to-slate/20 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold text-marble mb-2">Our Vision</h3>
                  <p className="text-marble/70">
                    A world where every athlete has the tools to reach their full potential,
                    regardless of their location, budget, or experience level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-marble mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/30 rounded-xl p-6">
                <div className="w-20 h-20 bg-ember rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  👨‍💼
                </div>
                <h3 className="text-xl font-semibold text-marble mb-2">Leadership Team</h3>
                <p className="text-marble/70">Experienced entrepreneurs and sports enthusiasts driving our vision forward.</p>
              </div>
              <div className="bg-black/30 rounded-xl p-6">
                <div className="w-20 h-20 bg-slate rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  👨‍💻
                </div>
                <h3 className="text-xl font-semibold text-marble mb-2">Engineering Team</h3>
                <p className="text-marble/70">World-class developers building the technology that powers athletic excellence.</p>
              </div>
              <div className="bg-black/30 rounded-xl p-6">
                <div className="w-20 h-20 bg-emerald rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  🏆
                </div>
                <h3 className="text-xl font-semibold text-marble mb-2">Sports Advisors</h3>
                <p className="text-marble/70">Former athletes and coaches providing expert guidance on sports performance.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}