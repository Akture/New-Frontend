import { Link } from 'react-router-dom';

export default function AuthFooter() {
    return (
      <div className="w-full text-center pb-8 pt-4 bg-white dark:bg-[#060A14] z-10 mt-auto">
        <p className="text-[13px] text-gray-400 font-medium">
          © 2026 Akture.{' '}
          <Link to="/privacy-policy" className="hover:text-gray-600 ml-2">Privacy</Link> ·{' '}
          <Link to="/terms-of-service" className="hover:text-gray-600">Terms</Link>
        </p>
      </div>
    );
  }