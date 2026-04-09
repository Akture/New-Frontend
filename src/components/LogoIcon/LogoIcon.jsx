export default function LogoIcon({ className = '' }) {
    return (
      <svg viewBox="0 0 100 80" className={`w-full h-full text-ember ${className}`} fill="currentColor">
        <path
          d="M10,20 h80 a10,10 0 0,1 10,10 v40 a10,10 0 0,1 -10,10 h-80 a10,10 0 0,1 -10,-10 v-40 a10,10 0 0,1 10,-10 z M30,15 v-10 h40 v10 z M50,65 a20,20 0 1,0 0,-40 a20,20 0 0,0 0,40 z"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
        />
        <path d="M45,35 l10,-5 l-5,15 l15,5 l-10,10 l-15,-5 l5,-15 z" fill="white" stroke="none" />
      </svg>
    );
  }