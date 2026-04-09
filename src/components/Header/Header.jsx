import GlassPanel from '../GlassPanel/GlassPanel';
import LogoIcon from '../LogoIcon/LogoIcon';

export default function Header() {
  return (
    <header className="fixed top-14 left-0 right-0 z-50 px-6 md:px-12 flex justify-center w-full transition-all duration-300">
      <GlassPanel className="w-full max-w-7xl rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/50">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative w-10 h-8 flex items-center justify-center">
            <LogoIcon className="group-hover:scale-105 transition-transform" />
          </div>
          <span
            className="font-heading font-bold text-2xl tracking-tight text-marble"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            akture
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-marble/80 hover:text-marble transition-colors">Home</a>
          <a href="#" className="text-sm font-medium text-marble/80 hover:text-marble transition-colors">Features</a>
          <a href="#" className="text-sm font-medium text-marble/80 hover:text-marble transition-colors flex items-center gap-1">
            Live{' '}
            <span
              className="w-2 h-2 rounded-full bg-ember ml-1"
              style={{ display: 'inline-block', animation: 'pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
            />
          </a>
          <a href="#" className="text-sm font-medium text-marble/80 hover:text-marble transition-colors">Pricing</a>
          <a href="#" className="text-sm font-medium text-marble/80 hover:text-marble transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#" className="hidden lg:block text-sm font-medium text-marble/80 hover:text-marble transition-colors">Log In</a>
          <a
            href="#"
            className="bg-ember hover:bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
            style={{ boxShadow: '0 0 15px rgba(189,32,38,0.4)' }}
          >
            Start Free Trial
          </a>
        </div>
      </GlassPanel>
    </header>
  );
}