import { useState } from 'react';
import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import userService from '../services/userService';

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

const channels = [
  {
    icon: 'ph-fill ph-envelope-simple',
    title: 'Players & Users',
    description: 'Help with your videos, purchases, account, or subscription.',
    email: 'contact@akture.video',
  },
  {
    icon: 'ph-fill ph-handshake',
    title: 'Partner Sites',
    description: 'Want Akture cameras at your court, field, or facility?',
    email: 'partners@akture.video',
  },
  {
    icon: 'ph-fill ph-users-three',
    title: 'Join the Team',
    description: 'Opportunities to help grow Akture.',
    email: 'contact@akture.video',
  },
];

export default function ContactUsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const [submitError, setSubmitError] = useState(null);

  const validate = () => {
    const errors = {};
    if (!name.trim()) errors.name = 'Please enter your name';
    if (!email.trim()) {
      errors.email = 'Please enter your email';
    } else if (!EMAIL_PATTERN.test(email.trim())) {
      errors.email = 'Please enter a valid email address';
    }
    if (!message.trim()) errors.message = 'Please enter a message';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus('sending');
    setSubmitError(null);

    try {
      await userService.contactUs({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });
      setStatus('sent');
    } catch (error) {
      setStatus('idle');
      setSubmitError(error.message);
    }
  };

  const handleSendAnother = () => {
    setMessage('');
    setFieldErrors({});
    setSubmitError(null);
    setStatus('idle');
  };

  const inputClasses = (hasError) =>
    `w-full pl-12 pr-4 py-3.5 bg-input dark:bg-surface border ${
      hasError ? 'border-ember' : 'border-gray-200 dark:border-gray-700'
    } rounded-form text-gray-800 dark:text-marble placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ember/20 focus:border-ember transition-all duration-200 font-medium`;

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-onyx dark:text-marble overflow-x-hidden">
      <Banner />
      <Header />

      <main className="pt-4">
        <section className="relative px-6 md:px-12 py-24 text-center">
          <div className="absolute inset-0 bg-dot-pattern opacity-70" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <p className="text-gradient-ember italic text-xs font-black tracking-[0.25em] uppercase mb-6">
              Contact
            </p>

            <h1 className="font-heading text-5xl md:text-7xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
              Contact Akture.
              <br />
              <span className="text-gradient-ember italic inline-block pr-2 pb-2">We're Here to Help.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Questions about your videos, a facility you want covered, or a partnership —
              send us a message and it goes straight to the team.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-12 py-20 border-y border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/40">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-gradient-ember italic text-xs font-black tracking-[0.25em] uppercase mb-2">
                Reach Us Directly
              </p>

              {channels.map((channel) => (
                <div
                  key={channel.title}
                  className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] shadow-sm dark:shadow-2xl dark:shadow-black/20 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-ember/10 flex items-center justify-center shrink-0">
                      <i className={`${channel.icon} text-ember text-xl`} aria-hidden="true"></i>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-black text-gray-900 dark:text-white mb-1">
                        {channel.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-2">
                        {channel.description}
                      </p>
                      <a
                        href={`mailto:${channel.email}`}
                        className="text-sm font-bold text-ember hover:opacity-80 transition-opacity"
                      >
                        {channel.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] shadow-sm dark:shadow-2xl dark:shadow-black/20 p-6">
                <h3 className="font-heading text-lg font-black text-gray-900 dark:text-white mb-3">
                  Follow Along
                </h3>
                <div className="flex items-center gap-4">
                  {[
                    { icon: 'ph-fill ph-instagram-logo', href: 'https://www.instagram.com/akture.video/', label: 'Akture on Instagram' },
                    { icon: 'ph-fill ph-youtube-logo', href: 'https://www.youtube.com/@AktureVideo', label: 'Akture on YouTube' },
                  ].map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-gray-200 dark:bg-white/5 text-gray-500 dark:text-white/70 hover:text-white hover:bg-ember"
                    >
                      <i className={`${item.icon} text-lg`} aria-hidden="true"></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] shadow-sm dark:shadow-2xl dark:shadow-black/20 p-6 md:p-10">
                {status === 'sent' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mx-auto mb-6">
                      <i className="ph-bold ph-check text-emerald text-3xl" aria-hidden="true"></i>
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
                      Message Sent.
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-md mx-auto mb-8">
                      Your message is with the Akture team. Need to add something? Send
                      another message, or email{' '}
                      <a href="mailto:contact@akture.video" className="text-ember font-bold hover:opacity-80 transition-opacity">
                        contact@akture.video
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={handleSendAnother}
                      className="px-8 py-4 rounded-full border border-gray-300 dark:border-white/15 text-gray-900 dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-heading text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">
                      Send a Message
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                      Fill out the form and the team will follow up by email.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-name"
                          className="block text-[11px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide"
                        >
                          Name
                        </label>
                        <div className="relative flex items-center">
                          <i className="ph-fill ph-user absolute left-4 text-gray-400 text-lg z-10" aria-hidden="true"></i>
                          <input
                            id="contact-name"
                            type="text"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={inputClasses(fieldErrors.name)}
                          />
                        </div>
                        {fieldErrors.name && (
                          <p className="text-sm text-ember font-medium">{fieldErrors.name}</p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-email"
                          className="block text-[11px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide"
                        >
                          Email Address
                        </label>
                        <div className="relative flex items-center">
                          <i className="ph-fill ph-envelope absolute left-4 text-gray-400 text-lg z-10" aria-hidden="true"></i>
                          <input
                            id="contact-email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={inputClasses(fieldErrors.email)}
                          />
                        </div>
                        {fieldErrors.email && (
                          <p className="text-sm text-ember font-medium">{fieldErrors.email}</p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-message"
                          className="block text-[11px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide"
                        >
                          Message
                        </label>
                        <textarea
                          id="contact-message"
                          rows={6}
                          placeholder="How can we help?"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className={`${inputClasses(fieldErrors.message)} pl-4 resize-y`}
                        />
                        {fieldErrors.message && (
                          <p className="text-sm text-ember font-medium">{fieldErrors.message}</p>
                        )}
                      </div>

                      {submitError && (
                        <div className="rounded-form border border-ember/40 bg-ember/5 px-4 py-3">
                          <p className="text-sm text-ember font-medium">
                            {submitError} — or email us directly at{' '}
                            <a href="mailto:contact@akture.video" className="font-bold underline">
                              contact@akture.video
                            </a>
                            .
                          </p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-ember text-white font-bold hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                      >
                        {status === 'sending' ? (
                          <>
                            <i className="ph-bold ph-circle-notch animate-spin text-lg" aria-hidden="true"></i>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <i className="ph-bold ph-paper-plane-tilt text-lg" aria-hidden="true"></i>
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
