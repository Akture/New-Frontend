import { Link } from 'react-router-dom';

export default function LogoIcon({ className = '', to = '/' }) {
  return (
    <Link to={to} aria-label="Home">
      <img
        src="/akture-logo-with-text.png"
        alt="Akture Logo"
        className={`w-full h-full object-contain ${className}`}
      />
    </Link>
  );
}