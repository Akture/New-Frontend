import LogoIcon from '../LogoIcon/LogoIcon';

export default function Footer() {
  return (
    <footer className="bg-onyx pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <p className="text-marble/60 text-sm mb-2">
            Interested in joining our team? <a href="#contact" className="text-ember hover:text-red-400 transition-colors">Reach out HERE</a>
          </p>
          <p className="text-marble/60 text-sm">
            Want Akture at your facility? <a href="#facility" className="text-ember hover:text-red-400 transition-colors">Reach out HERE</a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6 inline-flex">
              <div className="relative w-10 h-7 flex items-center justify-center">
                <LogoIcon />
              </div>
            </a>

            <p className="text-marble/50 text-sm leading-relaxed mb-8 max-w-sm">
              Experience sports like never before. Join the revolution in live sports streaming and share your passion with the world.
            </p>

            <div className="flex items-center gap-4">
              {['ph-fill ph-instagram-logo', 'ph-fill ph-youtube-logo'].map((icon, i) => (
                <a
                  key={i}
                  href={i === 0 ? 'https://www.instagram.com/akture.video/' : 'https://www.youtube.com/@AktureVideo'}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors text-white/70 hover:text-white hover:bg-ember"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <i className={`${icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Platform</h4>
            <ul className="space-y-4">
              {['Features', 'Live Streaming', 'Hardware Sync', 'Pricing Plans'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-marble/60 hover:text-ember transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-4">
              {['Help Center', 'Community Forum', 'API Documentation', 'Blog & News'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-marble/60 hover:text-ember transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Press Kit', 'Contact'].map((item, i) => (
                <li key={i}>
                  <a href={item === 'Careers' ? '#contact' : '#'} className="text-marble/60 hover:text-ember transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-marble/40 text-xs">© 2026 Akture Inc. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-marble/40">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item, i) => (
              <a key={i} href="#" className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}