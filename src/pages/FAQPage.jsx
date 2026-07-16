import { useState } from 'react';
import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const faqs = [
  {
    question: 'How does it work?',
    answer:
      'Akture cameras capture all the action, for any court or field! Just scan the on-site QR code or visit akture.video after playing to get access to all your highlight-worthy moments in HD.',
  },
  {
    question: 'What do I need to use Akture?',
    answer:
      "No phone, no tripod, no preparation needed - and we're always capturing the action!",
  },
  {
    question: 'How do I purchase video?',
    answer: (
      <div className="space-y-4">
        <p>After going onto the "Purchase" Tab,</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Select the Location where you played</li>
          <li>Select the Date when you played: "Today," "Yesterday," "2 Days Ago"</li>
          <li>
            Select a time range during which you were on the court using the "Start Time"
            and "End Time" dropdowns
          </li>
          <li>
            All available videos during that selected time frame will appear with the exact
            time of video in the title. Each separate box is 15 minutes. Multiple 15-minute
            Video Segments can be selected and will be joined to create a longer video
          </li>
          <li>Proceed with purchase</li>
        </ol>
        <p>
          Once Payment has gone through, your video will populate in your "My Videos"
          Dashboard. Please allow up to 15 minutes for video to populate on your dashboard.
        </p>
      </div>
    ),
  },
  {
    question: 'How much does it cost?',
    answer: 'Starts at less than $5, and scaling with how much video you want to save',
  },
  {
    question: 'Do I need an Akture account before I play?',
    answer:
      'No! You do need an Akture account to purchase your video, but you can create a free account and save that footage any time up to 48 hours after playing.',
  },
  {
    question: 'My Video was not fused in the correct order, why?',
    answer:
      'Videos are joined in the order in which they are selected, NOT in chronological order. Please select your videos in the order you want them to be joined!',
  },
  {
    question: 'How long after I play can I purchase a video?',
    answer:
      "All site video is held by Akture for 48 hours, after which it is permanently deleted and no longer available. Save your clips before they're gone!",
  },
  {
    question: 'Where can I find my purchased videos?',
    answer:
      'Your purchase videos can be found in the "My Videos" page, under "Purchased Videos."',
  },
  {
    question: "Why don't I immediately see my video in my account after purchase?",
    answer:
      'Please leave up to 15 minutes of time after purchase for the video to populate on your "My Videos" Dashboard.',
  },
  {
    question: 'How do I download videos?',
    answer: (
      <div className="space-y-4">
        <p>All purchased videos can be downloaded regardless of subscription tier</p>
        <p className="font-bold text-white">How?</p>
        <p>
          Videos can be downloaded using the download button (arrow pointing down) on your
          purchased video
        </p>
        <p>
          Downloading of videos can be interrupted by various factors including poor signal
          quality, lack of available memory to store video on your device, browser
          capabilities - FOR this reason, we suggest downloading of videos while ON WIFI and
          on a laptop/PC. While on laptop/PC you can also use the three buttons on the video
          itself to download videos and this has proven to work when other methods are not
        </p>
      </div>
    ),
  },
  {
    question: 'Can I edit my videos?',
    answer:
      'In your Purchased Videos dashboard you are able to trim the length of any video you own, as well as crop the dimensions, and export your new clip. For more advanced editing once you download your video, we recommend CapCut but there are plenty of great options!',
  },
  {
    question: 'Why should I purchase a subscription?',
    answer: (
      <div className="space-y-4">
        <p>
          While on a free tier, purchase videos are auto-deleted 30 days after purchase,
          meaning that video must be downloaded before then if you wish to keep the video for
          longer. Our higher tiers offer more time available to watch video on Akture rather
          than having to download footage
        </p>
        <p>
          A free account cannot have more than 3hrs of footage on it. If a purchase causes a
          free account to go over the limit, their oldest video will be deleted within 24hrs
          in order to go back under the limit
        </p>
        <p>
          Subscription tiers offer free video credits every month that makes becoming a
          subscriber a no-brainer - exact amount of free footage depends on the subscription
          tier
        </p>
      </div>
    ),
  },
  {
    question: 'How do I manage my subscription?',
    answer:
      'In the "My Videos" page of Akture, select the "My Subscription" section. From here you can upgrade or downgrade your account between any available tier. PLEASE NOTE: allow for up to 12 hours for any changes to take effect before making further changes to your subscription.',
  },
  {
    question: 'How can I reach out for support?',
    answer:
      'From the "My Videos" page of Akture, you can use the "Leave Feedback" section to send us any messages about how we can make Akture even better. If you need a response, you can reach our team at contact@akture.video.',
  },
  {
    question: 'How can I contact Akture?',
    answer: (
      <div className="space-y-2">
        <p>For players and Akture users: contact@akture.video</p>
        <p>For partner sites and soon-to-be partner sites: partners@akture.video</p>
        <p>For opportunities to join and help grow Akture: contact@akture.video</p>
      </div>
    ),
  },
  {
    question: 'How do I pronounce Akture?',
    answer:
      'Ak-ture, with "ak" like "attack" the ball and "ture" like an overture to your incredible athletic performance.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-onyx dark:text-marble overflow-x-hidden">
      <Banner />
      <Header />

      <main className="pt-4">
        <section className="relative px-6 md:px-12 py-24 text-center">
          <div className="absolute inset-0 bg-dot-pattern opacity-70" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <p className="text-gradient-ember italic text-xs font-black tracking-[0.25em] uppercase mb-6">
              FAQ
            </p>

            <h1 className="font-heading text-5xl md:text-7xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
              Questions?
              <br />
              <span className="text-gradient-ember italic inline-block pr-2 pb-2">We've Got Answers.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Learn how Akture works, how to purchase and download videos, how subscriptions
              work, and how to contact our team.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-12 py-20 border-y border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/40">
          <div className="max-w-5xl mx-auto">
            <p className="text-gradient-ember italic text-xs font-black tracking-[0.25em] uppercase mb-4 text-center">
              Help Center
            </p>

            <h2 className="font-heading text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] shadow-sm dark:shadow-2xl dark:shadow-black/20 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between gap-6 px-6 md:px-8 py-6 text-left hover:bg-gray-50 dark:hover:bg-white/[0.04] transition-all"
                      aria-expanded={isOpen}
                    >
                      <span className="font-heading text-lg md:text-xl font-black text-gray-900 dark:text-white">
                        {faq.question}
                      </span>

                      <span
                        className={`text-ember text-2xl transition-transform duration-300 ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 md:px-8 pb-6 text-gray-500 dark:text-gray-400 leading-relaxed">
                        {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-24">
          <div className="max-w-5xl mx-auto rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] backdrop-blur-md p-8 md:p-12 text-center shadow-sm dark:shadow-2xl dark:shadow-black/40">
            <p className="text-gradient-ember italic text-xs font-black tracking-[0.25em] uppercase mb-4">
              Still Need Help?
            </p>

            <h2 className="font-heading text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Contact the Akture team.
            </h2>

            <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
              If you need support, have questions about your videos, or want to partner with
              Akture, our team is here to help.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:contact@akture.video?subject=Need%20Assistance"
                className="px-8 py-4 rounded-full bg-ember text-white font-bold hover:opacity-90 transition-all"
              >
                Contact Support
              </a>

              <a
                href="mailto:contact@akture.video?subject=Interested%20in%20partnering%20with%20Akture"
                className="px-8 py-4 rounded-full border border-gray-300 dark:border-white/15 text-gray-900 dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
              >
                Partner With Akture
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}