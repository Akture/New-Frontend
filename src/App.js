import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExplorePage from './pages/ExplorePage';
import LocationsPage from './pages/LocationsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PurchasedVideosPage from './pages/PurchasedVideosPage';
import LivestreamsPage from './pages/LivestreamsPage';
import PricingPage from './pages/PricingPage';
import FAQPage from './pages/FAQPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ReturnPolicyPage from './pages/ReturnPolicyPage';
import DisclaimerPage from './pages/DisclaimerPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import NotFound from './components/NotFound/NotFound';

export default function App() {
  useEffect(() => {
    const mediaQuery =
      typeof window !== 'undefined' && typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-color-scheme: dark)')
        : null;

    if (mediaQuery?.matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <Router basename="/">
      <div className="min-h-screen bg-marble text-onyx dark:bg-onyx dark:text-marble">
          <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/my-videos" element={<PurchasedVideosPage />} />
          <Route path="/livestreams" element={<LivestreamsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/return-policy" element={<ReturnPolicyPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Analytics />
    </Router>
  );
}
