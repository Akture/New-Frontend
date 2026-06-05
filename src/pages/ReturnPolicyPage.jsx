import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function P({ children, className = '' }) {
  return <p className={`text-gray-600 dark:text-gray-400 leading-relaxed mb-4 ${className}`}>{children}</p>;
}

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-onyx dark:text-marble overflow-x-hidden">
      <Banner />
      <Header />

      <main className="pt-4">
        <section className="py-20 bg-white dark:bg-onyx border-b border-gray-100 dark:border-white/5">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <span className="text-ember text-sm font-semibold uppercase tracking-widest mb-4 block">Legal</span>
            <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight mb-6 text-gray-900 dark:text-white">
              Return Policy
            </h1>
            <p className="text-gray-500 dark:text-marble/50 text-sm">Last updated September 12, 2024</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">

          <h2 className="font-heading text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-4">REFUNDS</h2>
          <P>All sales are final and no refund will be issued.</P>
          <P>Refunds are generally not permitted, except in extenuating circumstances. If you wish to request a refund for such a circumstance, please contact us at <a href="mailto:contact@akture.video?subject=Refund%20Requested" className="text-ember hover:underline">contact@akture.video</a> with "Refund Requested" in the subject line. It is in Akture's sole and absolute discretion whether to provide a refund, and, if so, in what amount.</P>

          <h2 className="font-heading text-xl md:text-2xl font-black text-gray-900 dark:text-white mt-12 mb-4">QUESTIONS</h2>
          <P>If you have any questions concerning our return policy, please contact us at:</P>
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] p-6 mt-2">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Email: <a href="mailto:contact@akture.video" className="text-ember hover:underline">contact@akture.video</a>
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
