import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PurchasePage from './pages/PurchasePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PurchasedVideosPage from './pages/PurchasedVideosPage';

export default function App() {
  return (
    <Router basename="/">
      <div style={{ backgroundColor: '#010101', color: '#FFFFFF', minHeight: '100vh' }}>
        <div className="pt-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path ="/purchase" element ={<PurchasePage />} />
            <Route path ="/login" element ={<LoginPage />} />
            <Route path ="/register" element ={<RegisterPage />} />
            <Route path ="/my-videos" element ={<PurchasedVideosPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}