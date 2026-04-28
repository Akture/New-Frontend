import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import VideoSection from '../components/VideoSection/VideoSection';
import NewsletterCalloutSection from '../components/NewsletterCalloutSection/NewsletterCalloutSection';
import FacilitySection from '../components/FacilitySection/FacilitySection';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Banner />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <VideoSection />
      <NewsletterCalloutSection />
      <FacilitySection />
      <Footer />
    </>
  );
}