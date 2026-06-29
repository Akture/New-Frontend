import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const sections = [
  { id: 'collect', num: '1', title: 'WHAT INFORMATION DO WE COLLECT?' },
  { id: 'process', num: '2', title: 'HOW DO WE PROCESS YOUR INFORMATION?' },
  { id: 'legal-bases', num: '3', title: 'WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?' },
  { id: 'share', num: '4', title: 'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?' },
  { id: 'cookies', num: '5', title: 'DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?' },
  { id: 'social', num: '6', title: 'HOW DO WE HANDLE YOUR SOCIAL LOGINS?' },
  { id: 'international', num: '7', title: 'IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?' },
  { id: 'retention', num: '8', title: 'HOW LONG DO WE KEEP YOUR INFORMATION?' },
  { id: 'security', num: '9', title: 'HOW DO WE KEEP YOUR INFORMATION SAFE?' },
  { id: 'rights', num: '10', title: 'WHAT ARE YOUR PRIVACY RIGHTS?' },
  { id: 'dnt', num: '11', title: 'CONTROLS FOR DO-NOT-TRACK FEATURES' },
  { id: 'us-rights', num: '12', title: 'DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?' },
  { id: 'updates', num: '13', title: 'DO WE MAKE UPDATES TO THIS NOTICE?' },
  { id: 'contact', num: '14', title: 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' },
  { id: 'review', num: '15', title: 'HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?' },
];

const categoryTable = [
  { cat: 'A. Identifiers', examples: 'Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name', collected: true },
  { cat: 'B. Protected classification characteristics under state or federal law', examples: 'Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data', collected: false },
  { cat: 'C. Commercial information', examples: 'Transaction information, purchase history, financial details, and payment information', collected: true },
  { cat: 'D. Biometric information', examples: 'Fingerprints and voiceprints', collected: false },
  { cat: 'E. Internet or other similar network activity', examples: 'Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements', collected: false },
  { cat: 'F. Geolocation data', examples: 'Device location', collected: false },
  { cat: 'G. Audio, electronic, sensory, or similar information', examples: 'Images and audio, video or call recordings created in connection with our business activities', collected: false },
  { cat: 'H. Professional or employment-related information', examples: 'Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us', collected: false },
  { cat: 'I. Education Information', examples: 'Student records and directory information', collected: false },
  { cat: 'J. Inferences drawn from collected personal information', examples: 'Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual\'s preferences and characteristics', collected: false },
  { cat: 'K. Sensitive personal information', examples: '', collected: false },
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

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-onyx dark:text-marble overflow-x-hidden">
      <Banner />
      <Header />

      <main className="pt-4">
        <section className="relative px-6 md:px-12 py-24 text-center">
          <div className="absolute inset-0 bg-dot-pattern opacity-70" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <p className="text-gradient-ember italic text-xs font-black tracking-[0.25em] uppercase mb-6">
              Legal
            </p>
            <h1 className="font-heading text-5xl md:text-7xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Last updated September 22, 2025
            </p>
          </div>
        </section>

        <section className="px-6 md:px-12 pb-24">
          <div className="max-w-4xl mx-auto">

            {/* Intro */}
            <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] p-8 md:p-10 mb-12">
              <P>
                This Privacy Notice for CraZed Entertainment, LLC (doing business as Akture) ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
              </P>
              <UL>
                <li>Visit our website at <a href="https://akture.video" className="text-ember hover:underline">https://akture.video</a> or any website of ours that links to this Privacy Notice</li>
                <li>Engage with us in other related ways, including any sales, marketing, or events</li>
              </UL>
              <P>
                <strong className="text-gray-900 dark:text-white">Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:Contact@Akture.video" className="text-ember hover:underline">Contact@Akture.video</a>.
              </P>
            </div>

            {/* Summary */}
            <h2 className="font-heading text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-6">
              SUMMARY OF KEY POINTS
            </h2>
            <P>
              This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
            </P>
            <div className="space-y-4 mb-12">
              {[
                ['What personal information do we process?', 'When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.'],
                ['Do we process any sensitive personal information?', 'We do not process sensitive personal information.'],
                ['Do we collect any information from third parties?', 'We do not collect any information from third parties.'],
                ['How do we process your information?', 'We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.'],
                ['In what situations and with which types of parties do we share personal information?', 'We may share information in specific situations and with specific categories of third parties.'],
                ['How do we keep your information safe?', 'We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.'],
                ['What are your rights?', 'Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.'],
                ['How do you exercise your rights?', 'The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.'],
              ].map(([q, a]) => (
                <div key={q} className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6">
                  <p className="font-bold text-gray-900 dark:text-white mb-1">{q}</p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{a}</p>
                </div>
              ))}
            </div>

            {/* Table of Contents */}
            <h2 className="font-heading text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-6">
              TABLE OF CONTENTS
            </h2>
            <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] p-8 mb-12">
              <ol className="space-y-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-ember hover:underline font-medium text-sm"
                    >
                      {s.num}. {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Section 1 */}
            <SectionHeading id="collect" num="1" title="WHAT INFORMATION DO WE COLLECT?" />
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Personal information you disclose to us</h3>
            <P><em>In Short: We collect personal information that you provide to us.</em></P>
            <P>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</P>
            <P><strong className="text-gray-900 dark:text-white">Personal Information Provided by You.</strong> The personal information we collect may include the following:</P>
            <UL>
              <li>Email addresses</li>
              <li>Names</li>
              <li>Phone numbers</li>
              <li>Usernames</li>
              <li>Passwords</li>
              <li>Contact or authentication data</li>
              <li>Contact preferences</li>
            </UL>
            <P><strong className="text-gray-900 dark:text-white">Sensitive Information.</strong> We do not process sensitive information.</P>
            <P><strong className="text-gray-900 dark:text-white">Payment Data.</strong> We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number and the security code associated with your payment instrument. All payment data is handled and stored by Stripe. You may find their privacy notice <a href="https://stripe.com/privacy" className="text-ember hover:underline">here</a>.</P>
            <P><strong className="text-gray-900 dark:text-white">Social Media Login Data.</strong> We may provide you with the option to register with us using your existing social media account details, like your Facebook, X, or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider, as described in the section "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.</P>
            <P>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</P>

            <h3 className="font-bold text-gray-900 dark:text-white mb-2 mt-6">Information automatically collected</h3>
            <P><em>In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</em></P>
            <P>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information.</P>
            <P>Like many businesses, we also collect information through cookies and similar technologies. You can find out more about this in our Cookie Notice: <a href="/cookie-policy" className="text-ember hover:underline">akture.video/cookie-policy</a>.</P>
            <P>The information we collect includes:</P>
            <UL>
              <li><strong className="text-gray-900 dark:text-white">Log and Usage Data.</strong> Service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services, including your IP address, device information, browser type, and activity information such as date/time stamps, pages viewed, searches, and other actions.</li>
              <li><strong className="text-gray-900 dark:text-white">Device Data.</strong> Information about your computer, phone, tablet, or other device you use to access the Services, such as your IP address, device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, and operating system.</li>
              <li><strong className="text-gray-900 dark:text-white">Location Data.</strong> Information about your device's location, which can be either precise or imprecise. You can opt out of allowing us to collect this information either by refusing access or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
            </UL>

            {/* Section 2 */}
            <SectionHeading id="process" num="2" title="HOW DO WE PROCESS YOUR INFORMATION?" />
            <P><em>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</em></P>
            <P>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</P>
            <UL>
              <li><strong className="text-gray-900 dark:text-white">To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
              <li><strong className="text-gray-900 dark:text-white">To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</li>
            </UL>

            {/* Section 3 */}
            <SectionHeading id="legal-bases" num="3" title="WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?" />
            <P><em>In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason to do so under applicable law.</em></P>
            <P>If you are located in the EU or UK, this section applies to you. The GDPR and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information:</P>
            <UL>
              <li><strong className="text-gray-900 dark:text-white">Consent.</strong> We may process your information if you have given us permission to use your personal information for a specific purpose. You can withdraw your consent at any time.</li>
              <li><strong className="text-gray-900 dark:text-white">Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation.</li>
              <li><strong className="text-gray-900 dark:text-white">Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
            </UL>

            {/* Section 4 */}
            <SectionHeading id="share" num="4" title="WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?" />
            <P><em>In Short: We may share information in specific situations described in this section and/or with the following categories of third parties.</em></P>
            <P><strong className="text-gray-900 dark:text-white">Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf. The categories of third parties we may share personal information with include:</P>
            <UL>
              <li>Cloud Computing Services</li>
              <li>Data Storage Service Providers</li>
              <li>User Account Registration &amp; Authentication Services</li>
              <li>Website Hosting Service Providers</li>
              <li>Data Analytics Services</li>
            </UL>
            <P>We also may need to share your personal information in the following situations:</P>
            <UL>
              <li><strong className="text-gray-900 dark:text-white">Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            </UL>

            {/* Section 5 */}
            <SectionHeading id="cookies" num="5" title="DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?" />
            <P><em>In Short: We may use cookies and other tracking technologies to collect and store your information.</em></P>
            <P>We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</P>
            <P>We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders.</P>
            <P>To the extent these online tracking technologies are deemed to be a "sale"/"sharing" under applicable US state laws, you can opt out by submitting a request as described in section 12 below.</P>
            <P>Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice: <a href="/cookie-policy" className="text-ember hover:underline">akture.video/cookie-policy</a>.</P>

            {/* Section 6 */}
            <SectionHeading id="social" num="6" title="HOW DO WE HANDLE YOUR SOCIAL LOGINS?" />
            <P><em>In Short: If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</em></P>
            <P>Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public.</P>
            <P>We will use the information we receive only for the purposes that are described in this Privacy Notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information.</P>

            {/* Section 7 */}
            <SectionHeading id="international" num="7" title="IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?" />
            <P><em>In Short: We may transfer, store, and process your information in countries other than your own.</em></P>
            <P>Our servers are located in the United States. Regardless of your location, please be aware that your information may be transferred to, stored by, and processed by us in our facilities and in the facilities of the third parties with whom we may share your personal information, including facilities in other countries.</P>
            <P>If you are a resident in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. However, we will take all necessary measures to protect your personal information in accordance with this Privacy Notice and applicable law.</P>

            {/* Section 8 */}
            <SectionHeading id="retention" num="8" title="HOW LONG DO WE KEEP YOUR INFORMATION?" />
            <P><em>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</em></P>
            <P>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than six (6) months past the termination of the user's account.</P>
            <P>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible, then we will securely store your personal information and isolate it from any further processing until deletion is possible.</P>

            {/* Section 9 */}
            <SectionHeading id="security" num="9" title="HOW DO WE KEEP YOUR INFORMATION SAFE?" />
            <P><em>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</em></P>
            <P>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</P>

            {/* Section 10 */}
            <SectionHeading id="rights" num="10" title="WHAT ARE YOUR PRIVACY RIGHTS?" />
            <P><em>In Short: Depending on your state of residence in the US or your region, you have rights that allow you greater access to and control over your personal information.</em></P>
            <P>In some regions (like the EEA, UK, and Switzerland), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us using the contact details in section 14 below.</P>
            <P>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority. If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.</P>
            <P><strong className="text-gray-900 dark:text-white">Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time by contacting us using the contact details in section 14. Please note that this will not affect the lawfulness of the processing before its withdrawal.</P>
            <P><strong className="text-gray-900 dark:text-white">Opting out of marketing and promotional communications:</strong> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details in section 14. However, we may still communicate with you for service-related purposes necessary for the administration and use of your account.</P>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2 mt-6">Account Information</h3>
            <P>If you would at any time like to review or change the information in your account or terminate your account, you can log in to your account settings and update your user account. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</P>
            <P><strong className="text-gray-900 dark:text-white">Cookies and similar technologies:</strong> Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject cookies, though this could affect certain features or services. For further information, please see our Cookie Notice: <a href="/cookie-policy" className="text-ember hover:underline">akture.video/cookie-policy</a>.</P>
            <P>If you have questions or comments about your privacy rights, you may email us at <a href="mailto:Contact@Akture.video" className="text-ember hover:underline">Contact@Akture.video</a>.</P>

            {/* Section 11 */}
            <SectionHeading id="dnt" num="11" title="CONTROLS FOR DO-NOT-TRACK FEATURES" />
            <P>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</P>
            <P>California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.</P>

            {/* Section 12 */}
            <SectionHeading id="us-rights" num="12" title="DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?" />
            <P><em>In Short: If you are a resident of Texas, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law.</em></P>

            <h3 className="font-bold text-gray-900 dark:text-white mb-4 mt-6">Categories of Personal Information We Collect</h3>
            <P>The table below shows the categories of personal information we have collected in the past twelve (12) months.</P>
            <div className="overflow-x-auto mb-6 rounded-2xl border border-gray-200 dark:border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-white/[0.05] text-left">
                    <th className="px-4 py-3 font-bold text-gray-900 dark:text-white w-1/3">Category</th>
                    <th className="px-4 py-3 font-bold text-gray-900 dark:text-white">Examples</th>
                    <th className="px-4 py-3 font-bold text-gray-900 dark:text-white text-center w-24">Collected</th>
                  </tr>
                </thead>
                <tbody>
                  {categoryTable.map((row, i) => (
                    <tr key={i} className="border-t border-gray-200 dark:border-white/10">
                      <td className="px-4 py-3 text-gray-900 dark:text-white font-medium align-top">{row.cat}</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400 align-top">{row.examples}</td>
                      <td className="px-4 py-3 text-center align-top">
                        <span className={`font-bold ${row.collected ? 'text-emerald' : 'text-gray-400 dark:text-gray-600'}`}>
                          {row.collected ? 'YES' : 'NO'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <P>We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of receiving help through our customer support channels, participation in customer surveys or contests, and facilitation in the delivery of our Services.</P>
            <P>We will use and retain the collected personal information as needed to provide the Services or for:</P>
            <UL>
              <li>Category A - As long as the user has an account with us</li>
              <li>Category C - As long as the user has an account with us</li>
            </UL>

            <h3 className="font-bold text-gray-900 dark:text-white mb-2 mt-6">How We Use and Share Personal Information</h3>
            <P>We collect and share your personal information through beacons/pixels/tags. We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.</P>
            <P>We have not sold or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under section 4 above.</P>

            <h3 className="font-bold text-gray-900 dark:text-white mb-2 mt-6">Your Rights</h3>
            <P>You have rights under certain US state data protection laws. These rights include:</P>
            <UL>
              <li>Right to know whether or not we are processing your personal data</li>
              <li>Right to access your personal data</li>
              <li>Right to correct inaccuracies in your personal data</li>
              <li>Right to request the deletion of your personal data</li>
              <li>Right to obtain a copy of the personal data you previously shared with us</li>
              <li>Right to non-discrimination for exercising your rights</li>
              <li>Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling</li>
            </UL>

            <h3 className="font-bold text-gray-900 dark:text-white mb-2 mt-6">How to Exercise Your Rights</h3>
            <P>To exercise these rights, you can contact us by emailing us at <a href="mailto:Contact@Akture.video" className="text-ember hover:underline">Contact@Akture.video</a>, by calling toll-free at <a href="tel:5124360546" className="text-ember hover:underline">512.436.0546</a>, or by referring to the contact details in section 14. We will honor your opt-out preferences if you enact the Global Privacy Control (GPC) opt-out signal on your browser.</P>

            <h3 className="font-bold text-gray-900 dark:text-white mb-2 mt-6">Request Verification</h3>
            <P>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.</P>

            <h3 className="font-bold text-gray-900 dark:text-white mb-2 mt-6">Appeals</h3>
            <P>Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <a href="mailto:Contact@Akture.video" className="text-ember hover:underline">Contact@Akture.video</a>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.</P>

            {/* Section 13 */}
            <SectionHeading id="updates" num="13" title="DO WE MAKE UPDATES TO THIS NOTICE?" />
            <P><em>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></P>
            <P>We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</P>

            {/* Section 14 */}
            <SectionHeading id="contact" num="14" title="HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" />
            <P>If you have questions or comments about this notice, you may email us at <a href="mailto:Contact@akture.video" className="text-ember hover:underline">Contact@akture.video</a> or contact us by post at:</P>
            <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] p-6 mb-4">
              <p className="text-gray-900 dark:text-white font-medium leading-relaxed">
                CraZed Entertainment, LLC<br />
                460 Bastrop Hwy SB, Suite 1217<br />
                Austin, TX 78741<br />
                United States
              </p>
            </div>

            {/* Section 15 */}
            <SectionHeading id="review" num="15" title="HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?" />
            <P>Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please contact us at <a href="mailto:Contact@Akture.video" className="text-ember hover:underline">Contact@Akture.video</a>.</P>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
