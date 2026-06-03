import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLeftPanel from '../components/Auth/AuthLeftPanel';
import AuthFooter from '../components/Auth/AuthFooter';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex bg-white text-gray-900">
      <AuthLeftPanel />

      <div className="w-full lg:w-[60%] h-full relative flex flex-col overflow-y-auto">
        <div className="absolute top-8 left-8 lg:left-12">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-400 hover:text-gray-700 transition-colors text-sm font-medium"
          >
            <i className="ph ph-arrow-left text-lg"></i>
            Back to home
          </Link>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center px-6 py-20 w-full">
          <div className="w-full max-w-[440px]">
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
                Welcome back
              </h2>
              <p className="text-gray-500">
                Sign in to your Akture account to continue.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wide">
                  Username or Email
                </label>

                <div className="relative flex items-center">
                  <i className="ph-fill ph-user absolute left-4 text-gray-400 text-lg z-10"></i>
                  <input
                    type="text"
                    placeholder="johndoe or johndoe@gmail.com"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-input border border-gray-200 rounded-form text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ember/20 focus:border-ember transition-all duration-200 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wide">
                    Password
                  </label>
                  <a
                    href="https://akture.video/forgot-password"
                    className="text-[12px] font-semibold hover:text-red-800 transition-colors"
                    style={{ color: '#BD2026' }}
                  >
                    Forgot password?
                  </a>
                </div>

                <div className="relative flex items-center">
                  <i className="ph-fill ph-lock-key absolute left-4 text-gray-400 text-lg z-10"></i>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-3.5 bg-input border border-gray-200 rounded-form text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ember/20 focus:border-ember transition-all duration-200 font-medium font-mono text-lg tracking-widest"
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

              <button
                type="submit"
                className="w-full bg-gradient-ember text-white py-3.5 rounded-form font-semibold text-[15px] shadow-sm transition-all duration-200 mt-2"
              >
                Sign in
              </button>
            </form>

            <div className="flex items-center my-8">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="mx-4 text-sm text-gray-400 font-medium">or</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 font-medium">
                Don't have an account?
                <a
                  href="https://akture.video/register"
                  className="text-ember font-bold hover:underline ml-1"
                >
                  Create one free
                </a>
              </p>
            </div>

            <p className="text-center text-xs text-gray-400 mt-8">
              By signing in you agree to our{' '}
              <a href="https://akture.video/terms-of-service" className="underline hover:text-gray-600">Terms</a> and{' '}
              <a href="https://akture.video/privacy-policy" className="underline hover:text-gray-600">Privacy Policy</a>.
            </p>
          </div>
        </div>

        <AuthFooter />
      </div>
    </div>
  );
}