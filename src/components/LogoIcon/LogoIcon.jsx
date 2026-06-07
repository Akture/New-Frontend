import { Link } from 'react-router-dom';

export default function LogoIcon({ className = '', to = '/' }) {
  return (
    <Link to={to} aria-label="Home">
      <img
        src="/akture-logo-with-text.png"
        alt="Akture Logo"
        className={`w-full h-full object-contain hidden dark:block ${className}`}
      />
      <img
        src="/Akture%20Logo_black.png"
        alt="Akture Logo"
        className={`w-full h-full object-contain block dark:hidden ${className}`}
      />
    </Link>
  );
}