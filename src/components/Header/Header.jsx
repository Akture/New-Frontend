import { useState } from 'react';
import GlassPanel from '../GlassPanel/GlassPanel';
import LogoIcon from '../LogoIcon/LogoIcon';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Live', to: '/livestreams', live: true },
    { label: 'Pricing', to: '/pricing' },
    { label: 'About', to: '/about' },
  ];

  return (
    <header className="fixed top-10 left-0 right-0 z-50 px-6 md:px-12 flex justify-center w-full transition-all duration-300">
      <GlassPanel
        className={`w-full max-w-7xl shadow-2xl shadow-black/50 overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'rounded-3xl' : 'rounded-full'
        }`}
      >
        <div className="flex items-center justify-between gap-4 h-16 px-6 w-full">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative w-12 h-10 flex items-center justify-center">
                <LogoIcon className="group-hover:scale-105 transition-transform" />
              </div>
            </Link>

            <button
              type="button"
              className="md:hidden p-2 rounded-full border border-white/10 text-marble/80 hover:text-marble hover:border-ember transition-colors"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
            >
              <span className={`block w-5 h-0.5 bg-current mb-1 transition-transform duration-300 ${mobileOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`block w-5 h-0.5 bg-current mb-1 transition-all duration-300 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${mobileOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </button>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-marble/80 hover:text-marble transition-colors flex items-center gap-1"
              >
                {link.label}
                {link.live && (
                  <span
                    className="w-2 h-2 rounded-full bg-ember ml-1"
                    style={{
                      display: 'inline-block',
                      animation: 'pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className={`items-center gap-4 ${mobileOpen ? 'hidden' : 'flex'}`}>
            <Link
              to="/akture.video/login"
              className="hidden lg:block text-sm font-medium text-marble/80 hover:text-marble transition-colors"
            >
              Log In
            </Link>

            <Link
              to="https://akture.video/explore"
              className="bg-ember hover:bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all min-w-max lg:ml-4"
              style={{ boxShadow: '0 0 15px rgba(189,32,38,0.4)' }}
            >
              Purchase
            </Link>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
            mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-4 px-6 pb-6 border-t border-white/10 pt-4 w-full">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-marble/80 hover:text-marble transition-colors flex items-center gap-1"
              >
                {link.label}
                {link.live && (
                  <span
                    className="w-2 h-2 rounded-full bg-ember ml-1"
                    style={{
                      display: 'inline-block',
                      animation: 'pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    }}
                  />
                )}
              </Link>
            ))}

            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-marble/80 hover:text-marble transition-colors"
            >
              Log In
            </Link>

            <Link
              to="/https://akture.video/explore"
              onClick={() => setMobileOpen(false)}
              className="bg-ember hover:bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all text-center"
              style={{ boxShadow: '0 0 15px rgba(189,32,38,0.4)' }}
            >
              Purchase
            </Link>
          </nav>
        </div>
      </GlassPanel>
    </header>
  );
}