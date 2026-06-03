import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function P({ children, className = '' }) {
  return <p className={`text-gray-600 dark:text-gray-400 leading-relaxed mb-4 ${className}`}>{children}</p>;
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-onyx dark:text-marble overflow-x-hidden">
      <Banner />
      <Header />

      <main className="pt-4">
        <section className="py-20 bg-white dark:bg-onyx border-b border-gray-100 dark:border-white/5">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <span className="text-ember text-sm font-semibold uppercase tracking-widest mb-4 block">Legal</span>
            <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight mb-6 text-gray-900 dark:text-white">
              Disclaimer
            </h1>
            <p className="text-gray-500 dark:text-marble/50 text-sm">Last updated September 12, 2024</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">

          <h2 className="font-heading text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-4">WEBSITE DISCLAIMER</h2>
          <P>The information provided by CraZed Entertainment, LLC ("we," "us," or "our") on <a href="https://akture.video" className="text-ember hover:underline">https://akture.video</a> (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</P>
          <P className="uppercase text-sm leading-relaxed">UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.</P>

        </div>
      </main>

      <Footer />
    </div>
  );
}
