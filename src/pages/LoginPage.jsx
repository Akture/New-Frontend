import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLeftPanel from '../components/Auth/AuthLeftPanel';
import AuthFooter from '../components/Auth/AuthFooter';
import { authStyles } from '../components/Auth/authStyles';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      body { font-family: 'Inter', sans-serif; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      ::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
    `;
    document.head.appendChild(style);

    const phosphorScript = document.createElement('script');
    phosphorScript.src = 'https://unpkg.com/@phosphor-icons/web';
    document.head.appendChild(phosphorScript);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

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
                    className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-red-600 transition-all duration-200 font-medium"
                    style={{ ...authStyles.inputBg, '--tw-ring-color': 'rgba(189,32,38,0.2)' }}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wide">
                    Password
                  </label>
                  <a
                    href="#"
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
                    className="w-full pl-12 pr-12 py-3.5 border border-gray-200 rounded-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-red-600 transition-all duration-200 font-medium font-mono text-lg tracking-widest"
                    style={authStyles.inputBg}
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
                className="w-full text-white py-3.5 rounded-[14px] font-semibold text-[15px] shadow-sm transition-all duration-200 mt-2"
                style={{ backgroundColor: '#BD2026' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a61c22')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#BD2026')}
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
                <Link
                  to="/register"
                  className="font-bold hover:underline ml-1"
                  style={{ color: '#BD2026' }}
                >
                  Create one free
                </Link>
              </p>
            </div>

            <p className="text-center text-xs text-gray-400 mt-8">
              By signing in you agree to our{' '}
              <a href="#" className="underline hover:text-gray-600">Terms</a> and{' '}
              <a href="#" className="underline hover:text-gray-600">Privacy Policy</a>.
            </p>
          </div>
        </div>

        <AuthFooter />
      </div>
    </div>
  );
}