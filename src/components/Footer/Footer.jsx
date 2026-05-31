import { Link } from 'react-router-dom';
import LogoIcon from '../LogoIcon/LogoIcon';

export default function Footer() {
  const exploreLinks = [
    { label: 'Home', path: '/' },
    { label: 'Purchase', path: 'https://akture.video/explore' },
    { label: 'Pricing', path: 'https://akture.video/pricing' },
    { label: 'Contact', path: 'https://akture.video/contact' },
  ];

  const policyLinks = [
    { label: 'Privacy Policy', path: 'https://akture.video/privacy-policy' },
    { label: 'Cookie Policy', path: 'https://akture.video/cookie-policy' },
    { label: 'Terms of Service', path: 'https://akture.video/terms-of-service' },
    { label: 'Return Policy', path: 'https://akture.video/return-policy' },
    { label: 'Disclaimer', path: 'https://akture.video/disclaimer' },
  ];

  const companyLinks = [
    { label: 'About Us', path: 'https://home.akture.video/about' },
    { label: 'Careers', path: 'mailto:contact@akture.video?subject=Interested%20in%20joining%20the%20Akture%20team' },
    { label: 'Contact', path: '/mailto:contact@akture.video?subject=Contacting%20Akture' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', path: 'https://akture.video/privacy-policy' },
    { label: 'Terms of Service', path: 'https://akture.video/terms-of-service' },
    { label: 'Cookie Settings', path: 'https://akture.video/cookie-policy' },
  ];

  return (
    <footer className="bg-onyx pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* <div className="mb-12 text-center">
          <p className="text-marble/60 text-sm mb-2">
            Interested in joining our team?{' '}
            <a href="mailto:contact@akture.video?subject=Interested%20in%20joining%20the%20Akture%20team" className="text-ember hover:text-red-400 transition-colors">Reach out HERE</a>
          </p>
          <p className="text-marble/60 text-sm">
            Want Akture at your facility?{' '}
            <a href="mailto:contact@akture.video?subject=Want%20Akture%20at%20your%20facility" className="text-ember hover:text-red-400 transition-colors">Reach out HERE</a>
          </p>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 inline-flex">
              <div className="relative w-10 h-7 flex items-center justify-center">
                <LogoIcon />
              </div>
            </div>

            <p className="text-marble/50 text-sm leading-relaxed mb-8 max-w-sm">
              Experience sports like never before. Join the revolution in live sports streaming and share your passion with the world.
            </p>

            <div className="flex items-center gap-4">
              {[
                { icon: 'ph-fill ph-instagram-logo', href: 'https://www.instagram.com/akture.video/' },
                { icon: 'ph-fill ph-youtube-logo', href: 'https://www.youtube.com/@AktureVideo' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors text-white/70 hover:text-white hover:bg-ember"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <i className={`${item.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-4">
              {exploreLinks.map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="text-marble/60 hover:text-ember transition-colors text-sm">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Policies</h4>
            <ul className="space-y-4">
              {policyLinks.map((item, i) => (
                <li key={i}>
                  <a href={item.path} className="text-marble/60 hover:text-ember transition-colors text-sm">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((item, i) => (
                <li key={i}>
                  {item.path.startsWith('mailto') ? (
                    <a href={item.path} className="text-marble/60 hover:text-ember transition-colors text-sm">{item.label}</a>
                  ) : (
                    <Link to={item.path} className="text-marble/60 hover:text-ember transition-colors text-sm">{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-marble/40 text-xs">© 2026 Akture Inc. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-marble/40">
            {legalLinks.map((item, i) => (
              <a key={i} href={item.path} className="hover:text-white transition-colors">{item.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
