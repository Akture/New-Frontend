import HeroSection from '../components/HeroSection/HeroSection';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import HighlightsSection from '../components/HighlightsSection/HighlightsSection';
import NewsletterSection from '../components/NewsletterSection/NewsletterSection';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HighlightsSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}