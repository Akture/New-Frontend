import { useState } from 'react';
import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PricingHero from '../components/Pricing/PricingHero';
import PricingTabs from '../components/Pricing/PricingTabs';
import PayPerVideoPricing from '../components/Pricing/PayPerVideoPricing';
import SubscriptionPricing from '../components/Pricing/SubscriptionPricing';
import PricingFAQ from '../components/Pricing/PricingFAQ';
import PricingCTA from '../components/Pricing/PricingCTA';

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('pay-per-video');

  return (
    <div className="min-h-screen bg-marble text-onyx dark:bg-onyx dark:text-marble">
      <Banner />
      <Header />

      <main className="pt-4">
        <PricingHero />
        <PricingTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === 'pay-per-video' ? (
          <PayPerVideoPricing />
        ) : (
          <SubscriptionPricing />
        )}

        <PricingFAQ />
        <PricingCTA />
      </main>

      <Footer />
    </div>
  );
}