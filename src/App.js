import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <Router basename="/">
      <div style={{ backgroundColor: '#010101', color: '#FFFFFF', minHeight: '100vh' }}>
        <Banner />
        <Header />
        <div className="pt-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}