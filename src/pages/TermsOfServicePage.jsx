import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const sections = [
  { id: 'our-services', num: '1', title: 'OUR SERVICES' },
  { id: 'ip-rights', num: '2', title: 'INTELLECTUAL PROPERTY RIGHTS' },
  { id: 'user-representations', num: '3', title: 'USER REPRESENTATIONS' },
  { id: 'user-registration', num: '4', title: 'USER REGISTRATION' },
  { id: 'products', num: '5', title: 'PRODUCTS' },
  { id: 'purchases', num: '6', title: 'PURCHASES AND PAYMENT' },
  { id: 'subscriptions', num: '7', title: 'SUBSCRIPTIONS' },
  { id: 'refunds', num: '8', title: 'REFUNDS POLICY' },
  { id: 'prohibited', num: '9', title: 'PROHIBITED ACTIVITIES' },
  { id: 'ugc', num: '10', title: 'USER GENERATED CONTRIBUTIONS' },
  { id: 'contribution-license', num: '11', title: 'CONTRIBUTION LICENSE' },
  { id: 'services-management', num: '12', title: 'SERVICES MANAGEMENT' },
  { id: 'privacy', num: '13', title: 'PRIVACY POLICY' },
  { id: 'termination', num: '14', title: 'TERM AND TERMINATION' },
  { id: 'modifications', num: '15', title: 'MODIFICATIONS AND INTERRUPTIONS' },
  { id: 'governing-law', num: '16', title: 'GOVERNING LAW' },
  { id: 'dispute-resolution', num: '17', title: 'DISPUTE RESOLUTION' },
  { id: 'corrections', num: '18', title: 'CORRECTIONS' },
  { id: 'disclaimer', num: '19', title: 'DISCLAIMER' },
  { id: 'liability', num: '20', title: 'LIMITATIONS OF LIABILITY' },
  { id: 'indemnification', num: '21', title: 'INDEMNIFICATION' },
  { id: 'user-data', num: '22', title: 'USER DATA' },
  { id: 'electronic', num: '23', title: 'ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES' },
  { id: 'california', num: '24', title: 'CALIFORNIA USERS AND RESIDENTS' },
  { id: 'miscellaneous', num: '25', title: 'MISCELLANEOUS' },
  { id: 'contact', num: '26', title: 'CONTACT US' },
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

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-onyx dark:text-marble overflow-x-hidden">
      <Banner />
      <Header />

      <main className="pt-4">
        {/* Hero */}
        <section className="py-20 bg-white dark:bg-onyx border-b border-gray-100 dark:border-white/5">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <span className="text-ember text-sm font-semibold uppercase tracking-widest mb-4 block">Legal</span>
            <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight mb-6 text-gray-900 dark:text-white">
              Terms of Service
            </h1>
            <p className="text-gray-500 dark:text-marble/50 text-sm">Last updated September 23, 2024</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">

          {/* Agreement intro */}
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] p-8 mb-12">
            <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-4">AGREEMENT TO OUR LEGAL TERMS</h2>
            <P>We are CraZed Entertainment, LLC, doing business as Akture ("Company," "we," "us," "our"). We operate the website <a href="https://akture.video" className="text-ember hover:underline">https://akture.video</a> (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").</P>
            <P>Akture provides recreational and competitive athletes with instant access to high-definition video of their time on the court or field.</P>
            <P>You can contact us by phone at <a href="tel:+15124360546" className="text-ember hover:underline">(+1) 512-436-0546</a>, email at <a href="mailto:contact@akture.video" className="text-ember hover:underline">contact@akture.video</a>, or by mail to 460 Bastrop Hwy SB, Suite 1217, Austin, TX 78741, United States.</P>
            <P>These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and CraZed Entertainment, LLC, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. <strong className="text-gray-900 dark:text-white">IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</strong></P>
            <P>We will provide you with prior notice of any scheduled changes to the Services you are using. Changes to these Legal Terms will become effective seven (7) days after the notice is given, except if the changes apply to new functionality, security updates, bug fixes, and a court order, in which case the changes will be effective immediately. By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms. If you disagree with such changes, you may terminate Services as per the section "TERM AND TERMINATION."</P>
            <P>The Services are intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.</P>
            <P className="mb-0">We recommend that you print a copy of these Legal Terms for your records.</P>
          </div>

          {/* Table of Contents */}
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

          {/* Section 1 */}
          <SectionHeading id="our-services" num="1" title="OUR SERVICES" />
          <P>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</P>
          <P>The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).</P>

          {/* Section 2 */}
          <SectionHeading id="ip-rights" num="2" title="INTELLECTUAL PROPERTY RIGHTS" />
          <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Our intellectual property</h3>
          <P>We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").</P>
          <P>Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.</P>
          <P>The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use only.</P>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Your use of our Services</h3>
          <P>Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive, non-transferable, revocable license to:</P>
          <UL>
            <li>access the Services; and</li>
            <li>download or print a copy of any portion of the Content to which you have properly gained access,</li>
          </UL>
          <P>solely for your personal, non-commercial use.</P>
          <P>Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</P>
          <P>If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: <a href="mailto:contact@akture.video" className="text-ember hover:underline">contact@akture.video</a>. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.</P>
          <P>We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.</P>
          <P>Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.</P>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Your submissions</h3>
          <P>Please review this section and the "PROHIBITED ACTIVITIES" section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.</P>
          <P><strong className="text-gray-900 dark:text-white">Submissions:</strong> By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.</P>
          <P><strong className="text-gray-900 dark:text-white">You are responsible for what you post or upload:</strong> By sending us Submissions through any part of the Services you:</P>
          <UL>
            <li>confirm that you have read and agree with our "PROHIBITED ACTIVITIES" and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</li>
            <li>to the extent permissible by applicable law, waive any and all moral rights to any such Submission;</li>
            <li>warrant that any such Submission are original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and</li>
            <li>warrant and represent that your Submissions do not constitute confidential information.</li>
          </UL>
          <P>You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party's intellectual property rights, or (c) applicable law.</P>

          {/* Section 3 */}
          <SectionHeading id="user-representations" num="3" title="USER REPRESENTATIONS" />
          <P>By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not under the age of 13; (5) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services; (6) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (7) you will not use the Services for any illegal or unauthorized purpose; and (8) your use of the Services will not violate any applicable law or regulation.</P>
          <P>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).</P>

          {/* Section 4 */}
          <SectionHeading id="user-registration" num="4" title="USER REGISTRATION" />
          <P>You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.</P>

          {/* Section 5 */}
          <SectionHeading id="products" num="5" title="PRODUCTS" />
          <P>All products are subject to availability. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.</P>

          {/* Section 6 */}
          <SectionHeading id="purchases" num="6" title="PURCHASES AND PAYMENT" />
          <P>We accept the following forms of payment:</P>
          <UL>
            <li>Visa</li>
            <li>Mastercard</li>
            <li>American Express</li>
            <li>Discover</li>
          </UL>
          <P>You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in US dollars.</P>
          <P>You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.</P>
          <P>We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.</P>

          {/* Section 7 */}
          <SectionHeading id="subscriptions" num="7" title="SUBSCRIPTIONS" />
          <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Billing and Renewal</h3>
          <P>Your subscription will continue and automatically renew unless canceled. You consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order. The length of your billing cycle is monthly.</P>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Free Trial</h3>
          <P>We offer a free trial to new users who register with the Services. The free trial period does not have a set duration; however, free trial accounts have limited storage capacity. When a user exceeds their allotted storage, they have the option to subscribe, which increases their storage capacity, or they can delete their videos to free up storage space.</P>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Cancellation</h3>
          <P>You can cancel your subscription at any time by logging into your account. Your cancellation will take effect at the end of the current paid term. If you have any questions or are unsatisfied with our Services, please email us at <a href="mailto:contact@akture.video" className="text-ember hover:underline">contact@akture.video</a>.</P>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Fee Changes</h3>
          <P>We may, from time to time, make changes to the subscription fee and will communicate any price changes to you in accordance with applicable law.</P>

          {/* Section 8 */}
          <SectionHeading id="refunds" num="8" title="REFUNDS POLICY" />
          <P>All sales are final and no refund will be issued.</P>

          {/* Section 9 */}
          <SectionHeading id="prohibited" num="9" title="PROHIBITED ACTIVITIES" />
          <P>You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</P>
          <P>As a user of the Services, you agree not to:</P>
          <UL>
            <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
            <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
            <li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
            <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
            <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
            <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
            <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
            <li>Engage in unauthorized framing of or linking to the Services.</li>
            <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
            <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
            <li>Delete the copyright or other proprietary rights notice from any Content.</li>
            <li>Attempt to impersonate another user or person or use the username of another user.</li>
            <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1x1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").</li>
            <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
            <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
            <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
            <li>Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
            <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
            <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</li>
            <li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
            <li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
            <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
            <li>Sell or otherwise transfer your profile.</li>
          </UL>

          {/* Section 10 */}
          <SectionHeading id="ugc" num="10" title="USER GENERATED CONTRIBUTIONS" />
          <P>The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Services' Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:</P>
          <UL>
            <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
            <li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
            <li>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
            <li>Your Contributions are not false, inaccurate, or misleading.</li>
            <li>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
            <li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</li>
            <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
            <li>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</li>
            <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
            <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
            <li>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</li>
            <li>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
            <li>Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.</li>
          </UL>
          <P>Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.</P>

          {/* Section 11 */}
          <SectionHeading id="contribution-license" num="11" title="CONTRIBUTION LICENSE" />
          <P>You and Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).</P>
          <P>By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.</P>
          <P>We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</P>

          {/* Section 12 */}
          <SectionHeading id="services-management" num="12" title="SERVICES MANAGEMENT" />
          <P>We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.</P>

          {/* Section 13 */}
          <SectionHeading id="privacy" num="13" title="PRIVACY POLICY" />
          <P>We care about data privacy and security. Please review our Privacy Policy: <a href="/privacy-policy" className="text-ember hover:underline">akture.video/privacy-policy</a>. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in the United States. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Services, you are transferring your data to the United States, and you expressly consent to have your data transferred to and processed in the United States.</P>
          <P>Further, we do not knowingly accept, request, or solicit information from children or knowingly market to children. Therefore, in accordance with the U.S. Children's Online Privacy Protection Act, if we receive actual knowledge that anyone under the age of 13 has provided personal information to us without the requisite and verifiable parental consent, we will delete that information from the Services as quickly as is reasonably practical.</P>

          {/* Section 14 */}
          <SectionHeading id="termination" num="14" title="TERM AND TERMINATION" />
          <P>These Legal Terms shall remain in full force and effect while you use the Services. <strong className="text-gray-900 dark:text-white">WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.</strong></P>
          <P>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</P>

          {/* Section 15 */}
          <SectionHeading id="modifications" num="15" title="MODIFICATIONS AND INTERRUPTIONS" />
          <P>We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We also reserve the right to modify or discontinue all or part of the Services without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.</P>
          <P>We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.</P>

          {/* Section 16 */}
          <SectionHeading id="governing-law" num="16" title="GOVERNING LAW" />
          <P>These Legal Terms and your use of the Services are governed by and construed in accordance with the laws of the State of Texas applicable to agreements made and to be entirely performed within the State of Texas, without regard to its conflict of law principles.</P>

          {/* Section 17 */}
          <SectionHeading id="dispute-resolution" num="17" title="DISPUTE RESOLUTION" />
          <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Informal Negotiations</h3>
          <P>To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a "Dispute" and collectively, the "Disputes") brought by either you or us (individually, a "Party" and collectively, the "Parties"), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.</P>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Binding Arbitration</h3>
          <P>If the Parties are unable to resolve a Dispute through informal negotiations, the Dispute (except those Disputes expressly excluded below) will be finally and exclusively resolved by binding arbitration. <strong className="text-gray-900 dark:text-white">YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL.</strong> The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association ("AAA") and, where appropriate, the AAA's Supplementary Procedures for Consumer Related Disputes ("AAA Consumer Rules"). Your arbitration fees and your share of arbitrator compensation shall be governed by the AAA Consumer Rules and, where appropriate, limited by the AAA Consumer Rules. If such costs are determined by the arbitrator to be excessive, we will pay all arbitration fees and expenses. The arbitration may be conducted in person, through the submission of documents, by phone, or online. The arbitrator will make a decision in writing, but need not provide a statement of reasons unless requested by either Party. The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so. Except where otherwise required by the applicable AAA rules or applicable law, the arbitration will take place in Travis County, Texas.</P>
          <P>If for any reason, a Dispute proceeds in court rather than arbitration, the Dispute shall be commenced or prosecuted in the state and federal courts located in Travis County, Texas, and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction, and forum non conveniens with respect to venue and jurisdiction in such state and federal courts. Application of the United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transaction Act (UCITA) are excluded from these Legal Terms.</P>
          <P>In no event shall any Dispute brought by either Party related in any way to the Services be commenced more than one (1) year after the cause of action arose. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.</P>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Restrictions</h3>
          <P>The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.</P>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Exceptions to Informal Negotiations and Arbitration</h3>
          <P>The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations and binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.</P>

          {/* Section 18 */}
          <SectionHeading id="corrections" num="18" title="CORRECTIONS" />
          <P>There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.</P>

          {/* Section 19 */}
          <SectionHeading id="disclaimer" num="19" title="DISCLAIMER" />
          <P className="uppercase text-sm leading-relaxed">THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.</P>

          {/* Section 20 */}
          <SectionHeading id="liability" num="20" title="LIMITATIONS OF LIABILITY" />
          <P className="uppercase text-sm leading-relaxed">IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.</P>

          {/* Section 21 */}
          <SectionHeading id="indemnification" num="21" title="INDEMNIFICATION" />
          <P>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.</P>

          {/* Section 22 */}
          <SectionHeading id="user-data" num="22" title="USER DATA" />
          <P>We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</P>

          {/* Section 23 */}
          <SectionHeading id="electronic" num="23" title="ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES" />
          <P>Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. <strong className="text-gray-900 dark:text-white">YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES.</strong> You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</P>

          {/* Section 24 */}
          <SectionHeading id="california" num="24" title="CALIFORNIA USERS AND RESIDENTS" />
          <P>If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.</P>

          {/* Section 25 */}
          <SectionHeading id="miscellaneous" num="25" title="MISCELLANEOUS" />
          <P>These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.</P>

          {/* Section 26 */}
          <SectionHeading id="contact" num="26" title="CONTACT US" />
          <P>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</P>
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] p-6 mt-2">
            <p className="text-gray-700 dark:text-marble/80 font-semibold mb-1">CraZed Entertainment, LLC</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">460 Bastrop Hwy SB, Suite 1217</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Austin, TX 78741</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">United States</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Phone: <a href="tel:+15124360546" className="text-ember hover:underline">(+1) 512-436-0546</a></p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Email: <a href="mailto:contact@akture.video" className="text-ember hover:underline">contact@akture.video</a></p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
