import { useState } from 'react';
import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const faqs = [
  {
    question: 'How does it work?',
    answer:
      'Akture cameras capture all the action for any court or field. Just scan the on-site QR code or visit home.akture.video after playing to get access to all your highlight-worthy moments in HD.',
  },
  {
    question: 'What do I need to use Akture?',
    answer:
      'No phone, no tripod, and no preparation needed. Akture is always capturing the action at enabled facilities.',
  },
  {
    question: 'How do I purchase video?',
    answer: (
      <div className="space-y-4">
        <p>
          After going onto the “Purchase” tab, follow these steps:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Select the location where you played.</li>
          <li>Select the date when you played: “Today,” “Yesterday,” or “2 Days Ago.”</li>
          <li>
            Select a time range during which you were on the court using the “Start Time”
            and “End Time” dropdowns.
          </li>
          <li>
            All available videos during that selected time frame will appear with the exact
            time of video in the title. Each separate box is 15 minutes.
          </li>
          <li>
            Multiple 15-minute video segments can be selected and will be joined to create
            a longer video.
          </li>
          <li>Proceed with purchase.</li>
        </ol>
        <p>
          Once payment has gone through, your video will populate in your “My Videos”
          dashboard. Please allow up to 15 minutes for video to appear.
        </p>
      </div>
    ),
  },
  {
    question: 'How much does it cost?',
    answer:
      'Pricing starts at less than $5 and scales based on how much video you want to save.',
  },
  {
    question: 'Do I need an Akture account before I play?',
    answer:
      'No. You do need an Akture account to purchase your video, but you can create a free account and save that footage any time up to 48 hours after playing.',
  },
  {
    question: 'My video was not fused in the correct order. Why?',
    answer:
      'Videos are joined in the order in which they are selected, not in chronological order. Please select your videos in the order you want them to be joined.',
  },
  {
    question: 'How long after I play can I purchase a video?',
    answer:
      'All site video is held by Akture for 48 hours. After that, it is permanently deleted and no longer available. Save your clips before they are gone.',
  },
  {
    question: 'Where can I find my purchased videos?',
    answer:
      'Your purchased videos can be found in the “My Videos” page under “Purchased Videos.”',
  },
  {
    question: 'Why don’t I immediately see my video in my account after purchase?',
    answer:
      'Please allow up to 15 minutes after purchase for the video to populate on your “My Videos” dashboard.',
  },
  {
    question: 'How do I download videos?',
    answer: (
      <div className="space-y-4">
        <p>
          All purchased videos can be downloaded regardless of subscription tier.
        </p>
        <p>
          Videos can be downloaded using the download button, shown as an arrow pointing
          down, on your purchased video.
        </p>
        <p>
          Downloads can be interrupted by poor signal quality, lack of available device
          storage, or browser limitations. For this reason, we suggest downloading videos
          while on Wi-Fi and using a laptop or PC when possible.
        </p>
        <p>
          On a laptop or PC, you can also use the three-dot menu on the video itself to
          download videos. This method has proven to work when other download methods do not.
        </p>
      </div>
    ),
  },
  {
    question: 'Can I edit my videos?',
    answer:
      'In your Purchased Videos dashboard, you are able to trim the length of any video you own, crop the dimensions, and export your new clip. For more advanced editing after downloading your video, we recommend CapCut, though there are many great options.',
  },
  {
    question: 'How do free video credits work?',
    answer:
      'Subscription tiers include free video credits every month. The exact amount of free footage depends on your subscription tier.',
  },
  {
    question: 'Why should I purchase a subscription?',
    answer: (
      <div className="space-y-4">
        <p>
          While on the free tier, purchased videos are auto-deleted 30 days after purchase.
          This means the video must be downloaded before then if you wish to keep it longer.
        </p>
        <p>
          Higher tiers offer more time to watch video on Akture without needing to download
          footage right away.
        </p>
        <p>
          A free account cannot have more than 3 hours of footage. If a purchase causes a
          free account to go over the limit, the oldest video will be deleted within 24 hours
          in order to bring the account back under the limit.
        </p>
        <p>
          Subscription tiers also offer free video credits every month, making becoming a
          subscriber a great value.
        </p>
        <p>
          Coming soon: our highest tier, GOAT, will allow you to start livestreams of your
          game any time you are at an Akture-enabled facility.
        </p>
      </div>
    ),
  },
  {
    question: 'How do I manage my subscription?',
    answer:
      'In the “My Videos” page of Akture, select the “My Subscription” section. From there, you can upgrade or downgrade your account between any available tier. Please allow up to 12 hours for any changes to take effect before making further changes to your subscription.',
  },
  {
    question: 'How can I reach out for support?',
    answer:
      'From the “My Videos” page of Akture, you can use the “Leave Feedback” section to send us messages about how we can make Akture even better. If you need a response, you can reach our team at contact@akture.video.',
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
      'Ak-ture, with “ak” like “attack” the ball and “ture” like an overture to your incredible athletic performance.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-onyx text-marble overflow-x-hidden">
      <Banner />
      <Header />

      <main className="pt-4">
        <section className="relative px-6 md:px-12 py-24 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <p className="text-ember text-xs font-black tracking-[0.25em] uppercase mb-6">
              FAQ
            </p>

            <h1 className="font-heading text-5xl md:text-7xl font-black tracking-tight text-white mb-6">
              Questions?
              <br />
              <span className="text-ember">We’ve Got Answers.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Learn how Akture works, how to purchase and download videos, how subscriptions
              work, and how to contact our team.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-12 py-20 border-y border-white/10 bg-black/40">
          <div className="max-w-5xl mx-auto">
            <p className="text-ember text-xs font-black tracking-[0.25em] uppercase mb-4 text-center">
              Help Center
            </p>

            <h2 className="font-heading text-4xl md:text-5xl font-black text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-2xl shadow-black/20 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between gap-6 px-6 md:px-8 py-6 text-left hover:bg-white/[0.04] transition-all"
                      aria-expanded={isOpen}
                    >
                      <span className="font-heading text-lg md:text-xl font-black text-white">
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
                      <div className="px-6 md:px-8 pb-6 text-gray-400 leading-relaxed">
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
          <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 md:p-12 text-center shadow-2xl shadow-black/40">
            <p className="text-ember text-xs font-black tracking-[0.25em] uppercase mb-4">
              Still Need Help?
            </p>

            <h2 className="font-heading text-4xl md:text-5xl font-black text-white mb-6">
              Contact the Akture team.
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
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
                className="px-8 py-4 rounded-full border border-white/15 text-white font-bold hover:bg-white/10 transition-all"
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