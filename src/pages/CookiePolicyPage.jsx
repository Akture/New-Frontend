import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const sections = [
  { id: 'what-are-cookies', num: '1', title: 'WHAT ARE COOKIES?' },
  { id: 'how-we-use', num: '2', title: 'HOW WE USE COOKIES' },
  { id: 'types', num: '3', title: 'TYPES OF COOKIES WE USE' },
  { id: 'third-party', num: '4', title: 'THIRD-PARTY COOKIES' },
  { id: 'managing', num: '5', title: 'MANAGING YOUR COOKIE PREFERENCES' },
  { id: 'updates', num: '6', title: 'UPDATES TO THIS POLICY' },
  { id: 'contact', num: '7', title: 'CONTACT US' },
];

function SectionHeading({ id, num, title }) {
  return (
    <h2 id={id} className="flex items-baseline gap-3 font-heading text-xl md:text-2xl font-black text-gray-900 dark:text-white mt-14 mb-4 scroll-mt-28">
      <span className="text-ember shrink-0">{num}.</span>
      <span>{title}</span>
    </h2>
  );
}

function P({ children, className = '' }) {
  return <p className={`text-gray-600 dark:text-gray-400 leading-relaxed mb-4 ${className}`}>{children}</p>;
}

function UL({ children }) {
  return <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{children}</ul>;
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-onyx dark:text-marble overflow-x-hidden">
      <Banner />
      <Header />

      <main className="pt-4">
        <section className="py-20 bg-white dark:bg-onyx border-b border-gray-100 dark:border-white/5">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <span className="text-ember text-sm font-semibold uppercase tracking-widest mb-4 block">Legal</span>
            <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight mb-6 text-gray-900 dark:text-white">
              Cookie Policy
            </h1>
            <p className="text-gray-500 dark:text-marble/50 text-sm">Last updated September 12, 2024</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">

          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] p-8 mb-12">
            <P className="mb-0">This Cookie Policy explains how CraZed Entertainment, LLC, doing business as Akture ("Company," "we," "us," or "our"), uses cookies and similar tracking technologies when you visit <a href="https://akture.video" className="text-ember hover:underline">https://akture.video</a> (the "Site"). It explains what these technologies are, why we use them, and your rights to control our use of them.</P>
          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] p-8 mb-12">
            <h2 className="font-heading text-lg font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider">Table of Contents</h2>
            <ol className="space-y-2">
              {sections.map((s) => (
                <li key={s.id} className="flex items-baseline gap-2">
                  <span className="text-ember font-semibold shrink-0 w-7">{s.num}.</span>
                  <a href={`#${s.id}`} className="text-gray-600 dark:text-gray-400 hover:text-ember dark:hover:text-ember transition-colors text-sm">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          <SectionHeading id="what-are-cookies" num="1" title="WHAT ARE COOKIES?" />
          <P>Cookies are small text files that are placed on your device (computer, smartphone, or other device) when you visit a website. They are widely used to make websites work more efficiently and to provide information to website operators. Cookies allow a website to recognize your device and remember certain information about your visit, such as your preferences and settings.</P>
          <P>Cookies are not harmful to your device and do not contain any personally identifiable information on their own. They simply help us deliver a better and more personalized experience on our Site.</P>

          <SectionHeading id="how-we-use" num="2" title="HOW WE USE COOKIES" />
          <P>We use cookies and similar tracking technologies for a number of reasons, including to:</P>
          <UL>
            <li>Keep you signed in to your account during your visit</li>
            <li>Remember your preferences and settings</li>
            <li>Understand how you interact with our Site so we can improve it</li>
            <li>Analyze Site traffic and usage patterns</li>
            <li>Ensure the security and integrity of the Site</li>
            <li>Deliver relevant content and features based on your usage</li>
          </UL>

          <SectionHeading id="types" num="3" title="TYPES OF COOKIES WE USE" />
          <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Strictly Necessary Cookies</h3>
          <P>These cookies are essential for the Site to function properly. They enable core features such as account authentication and security. You cannot opt out of these cookies as the Site cannot function without them.</P>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Performance & Analytics Cookies</h3>
          <P>These cookies collect information about how visitors use the Site — for example, which pages are visited most often and whether visitors receive error messages. This data helps us improve the performance and usability of the Site. All information collected by these cookies is aggregated and anonymous.</P>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Functionality Cookies</h3>
          <P>These cookies allow the Site to remember choices you make (such as your display preferences) and provide enhanced, personalized features. They may be set by us or by third-party providers whose services we have added to our pages.</P>

          <SectionHeading id="third-party" num="4" title="THIRD-PARTY COOKIES" />
          <P>In some cases we use cookies provided by trusted third parties. For example, we may use analytics services such as Google Analytics to help us understand how you use the Site and how we can improve your experience. These third-party services may set their own cookies on your device. We do not control the use of those cookies and you should review the privacy policies of those third parties for more information.</P>
          <P>Third-party cookies used on our Site may include those from:</P>
          <UL>
            <li><strong className="text-gray-700 dark:text-marble/80">Google Analytics</strong> — website usage analytics</li>
            <li><strong className="text-gray-700 dark:text-marble/80">Stripe</strong> — payment processing and fraud prevention</li>
            <li><strong className="text-gray-700 dark:text-marble/80">Vercel Analytics</strong> — site performance monitoring</li>
          </UL>

          <SectionHeading id="managing" num="5" title="MANAGING YOUR COOKIE PREFERENCES" />
          <P>You have the right to decide whether to accept or decline cookies (other than strictly necessary cookies). You can manage your cookie preferences through your browser settings. Most browsers allow you to:</P>
          <UL>
            <li>View the cookies stored on your device</li>
            <li>Delete all or specific cookies</li>
            <li>Block cookies from specific websites</li>
            <li>Block all third-party cookies</li>
            <li>Block all cookies (note: this may affect Site functionality)</li>
          </UL>
          <P>For instructions on how to manage cookies in your specific browser, please refer to your browser's help documentation. Please be aware that restricting cookies may impact the functionality of our Site and some features may not work as intended.</P>
          <P>You may also opt out of Google Analytics tracking at any time by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-ember hover:underline">Google Analytics Opt-out Browser Add-on</a>.</P>

          <SectionHeading id="updates" num="6" title="UPDATES TO THIS POLICY" />
          <P>We may update this Cookie Policy from time to time to reflect changes in technology, law, or our data practices. When we make changes, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically to stay informed about how we use cookies.</P>

          <SectionHeading id="contact" num="7" title="CONTACT US" />
          <P>If you have any questions about our use of cookies or this Cookie Policy, please contact us at:</P>
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] p-6 mt-2">
            <p className="text-gray-700 dark:text-marble/80 font-semibold mb-1">CraZed Entertainment, LLC</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">460 Bastrop Hwy SB, Suite 1217</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Austin, TX 78741, United States</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Email: <a href="mailto:contact@akture.video" className="text-ember hover:underline">contact@akture.video</a></p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
