import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PurchasePage from './pages/PurchasePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PurchasedVideosPage from './pages/PurchasedVideosPage';
import LivestreamsPage from './pages/LivestreamsPage';
import PricingPage from './pages/PricingPage';

export default function App() {
  useEffect(() => {
  const prefersDark = window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, []);

  return (
    <Router basename="/">
      <div className="min-h-screen bg-marble text-onyx dark:bg-onyx dark:text-marble">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/my-videos" element={<PurchasedVideosPage />} />
          <Route path="/livestreams" element={<LivestreamsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </div>
      <Analytics />
    </Router>
  );
}