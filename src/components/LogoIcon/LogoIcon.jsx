export default function LogoIcon({ className = '' }) {
  return (
    <img
      src="/akture-logo-with-text.png"
      alt="Akture Logo"
      className={`w-full h-full object-contain ${className}`}
    />
  );
}