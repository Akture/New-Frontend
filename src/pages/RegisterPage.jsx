import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLeftPanel from '../components/Auth/AuthLeftPanel';
import AuthFooter from '../components/Auth/AuthFooter';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex bg-white dark:bg-[#060A14] text-gray-900 dark:text-marble">
      <AuthLeftPanel />

      <div className="w-full lg:w-[60%] h-full relative flex flex-col overflow-y-auto">
        <div className="absolute top-8 left-8 lg:left-12">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors text-sm font-medium"
          >
            <i className="ph ph-arrow-left text-lg"></i>
            Back to home
          </Link>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center px-6 py-20 w-full">
          <div className="w-full max-w-[440px]">
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">
                Create your account
              </h2>
              <p className="text-gray-500">
                Join Akture to access exclusive video content.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Username
                </label>
                <div className="relative flex items-center">
                  <i className="ph-fill ph-user absolute left-4 text-gray-400 text-lg z-10"></i>
                  <input
                    type="text"
                    placeholder="Choose a username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-input dark:bg-surface border border-gray-200 dark:border-gray-700 rounded-form text-gray-800 dark:text-marble placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ember/20 focus:border-ember transition-all duration-200 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Email Address
                </label>
                <div className="relative flex items-center">
                  <i className="ph-fill ph-envelope absolute left-4 text-gray-400 text-lg z-10"></i>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-input dark:bg-surface border border-gray-200 dark:border-gray-700 rounded-form text-gray-800 dark:text-marble placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ember/20 focus:border-ember transition-all duration-200 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Date of Birth
                </label>
                <div className="relative flex items-center">
                  <i className="ph-fill ph-calendar-blank absolute left-4 text-gray-400 text-lg z-10"></i>
                  <input
                    type="text"
                    placeholder="mm/dd/yyyy"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full pl-12 pr-12 py-3.5 bg-input dark:bg-surface border border-gray-200 dark:border-gray-700 rounded-form text-gray-800 dark:text-marble placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ember/20 focus:border-ember transition-all duration-200 font-medium"
                  />
                  <i className="ph-bold ph-calendar-plus absolute right-4 text-gray-400 text-lg z-10 pointer-events-none"></i>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Password
                </label>
                <div className="relative flex items-center">
                  <i className="ph-fill ph-lock-key absolute left-4 text-gray-400 text-lg z-10"></i>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Min. 6 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-3.5 bg-input dark:bg-surface border border-gray-200 dark:border-gray-700 rounded-form text-gray-800 dark:text-marble placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ember/20 focus:border-ember transition-all duration-200 font-medium"
                  />
                  <button
                    type="button"
                    className="absolute right-4 text-gray-400 hover:text-gray-600 z-10"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i className={`ph-fill ${showPassword ? 'ph-eye-slash' : 'ph-eye'} text-lg`}></i>
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Confirm Password
                </label>
                <div className="relative flex items-center">
                  <i className="ph-fill ph-lock-key absolute left-4 text-gray-400 text-lg z-10"></i>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Repeat your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-3.5 bg-input dark:bg-surface border border-gray-200 dark:border-gray-700 rounded-form text-gray-800 dark:text-marble placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ember/20 focus:border-ember transition-all duration-200 font-medium"
                  />
                  <button
                    type="button"
                    className="absolute right-4 text-gray-400 hover:text-gray-600 z-10"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <i className={`ph-fill ${showConfirmPassword ? 'ph-eye-slash' : 'ph-eye'} text-lg`}></i>
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 pb-2">
                <div className="flex items-center h-5 mt-0.5">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={termsChecked}
                    onChange={(e) => setTermsChecked(e.target.checked)}
                    className="w-[18px] h-[18px] border border-gray-300 rounded cursor-pointer accent-ember"
                  />
                </div>

                <label htmlFor="terms" className="text-[13px] text-gray-600 dark:text-gray-400 cursor-pointer select-none">
                  I agree to the{' '}
                  <Link to="/terms-of-service" className="font-semibold hover:underline" style={{ color: '#BD2026' }}>
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy-policy" className="font-semibold hover:underline" style={{ color: '#BD2026' }}>
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-ember text-white py-3.5 rounded-form font-semibold text-[15px] shadow-sm transition-all duration-200 mt-2"
              >
                Create account
              </button>
            </form>

            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
              <span className="mx-4 text-sm text-gray-400 font-medium">or</span>
              <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
            </div>

            <div className="text-center pb-8">
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Already have an account?
                <Link
                  to="/login"
                  className="text-ember font-bold hover:underline ml-1"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>

        <AuthFooter />
      </div>
    </div>
  );
}