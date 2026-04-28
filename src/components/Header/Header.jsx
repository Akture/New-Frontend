import { useState } from 'react';
import GlassPanel from '../GlassPanel/GlassPanel';
import LogoIcon from '../LogoIcon/LogoIcon';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={`fixed top-10 left-0 right-0 z-50 px-6 md:px-12 flex w-full transition-all duration-300 ${mobileOpen ? 'justify-start md:justify-center' : 'justify-center'}`}>
      <GlassPanel
        className={`inline-flex flex-col max-w-7xl rounded-full shadow-2xl shadow-black/50 overflow-hidden ${mobileOpen ? 'w-max md:w-full rounded-3xl' : 'w-full rounded-full'}`}
        style={{ transition: mobileOpen ? 'width 300ms ease 0ms' : 'width 300ms ease 0ms' }}
      >
        <div className={`flex items-center justify-between gap-4 h-16 px-6 ${mobileOpen ? 'w-max md:w-full' : 'w-full'}`}>
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative w-12 h-10 flex items-center justify-center">
                <LogoIcon className="group-hover:scale-105 transition-transform" />
              </div>
            </a>

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
            <Link to="/" className="text-sm font-medium text-marble/80 hover:text-marble transition-colors">Home</Link>
            <Link to ="/Purchase" className="text-sm font-medium text-marble/80 hover:text-marble transition-colors">Purchase</Link>
            <a href="#" className="text-sm font-medium text-marble/80 hover:text-marble transition-colors flex items-center gap-1">
              Live{' '}
              <span
                className="w-2 h-2 rounded-full bg-ember ml-1"
                style={{ display: 'inline-block', animation: 'pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
              />
            </a>
            <a href="#" className="text-sm font-medium text-marble/80 hover:text-marble transition-colors">Pricing</a>
            <Link to="/about" className="text-sm font-medium text-marble/80 hover:text-marble transition-colors">About</Link>
          </nav>

          <div className={`items-center gap-4 ${mobileOpen ? 'hidden md:flex' : 'flex'}`}>
            <Link to="/login" className="hidden lg:block text-sm font-medium text-marble/80 hover:text-marble transition-colors">Log In</Link>
            <Link to="/register" className="bg-ember hover:bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all min-w-max lg:ml-4" style={{ boxShadow: '0 0 15px rgba(189,32,38,0.4)' }}
            >Register</Link>
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="w-max min-w-[200px] flex flex-col gap-4 px-4 pb-4 border-t border-white/10 pt-3">
            <Link to="/" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-marble/80 hover:text-marble transition-colors">Home</Link>
            <a href="#" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-marble/80 hover:text-marble transition-colors">Features</a>
            <a href="#" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-marble/80 hover:text-marble transition-colors">Live</a>
            <Link to="/about" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-marble/80 hover:text-marble transition-colors">About</Link>
            <a href="#" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-marble/80 hover:text-marble transition-colors">Pricing</a>
            <a href="#" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-marble/80 hover:text-marble transition-colors">Contact</a>
            <a href="#" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-marble/80 hover:text-marble transition-colors">Log In</a>
          </nav>
        </div>
      </GlassPanel>
    </header>
  );
}