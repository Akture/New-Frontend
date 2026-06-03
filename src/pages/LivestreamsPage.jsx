import { useState } from 'react';
import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import LivestreamHero from '../components/Livestreams/LivestreamHero';
import LivestreamTabs from '../components/Livestreams/LivestreamTabs';
import LivestreamSearchBar from '../components/Livestreams/LivestreamSearchBar';
import LivestreamEmptyState from '../components/Livestreams/LivestreamEmptyState';
import LivestreamAnalytics from '../components/Livestreams/LivestreamAnalytics';

export default function LivestreamsPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');

  const handleClear = () => {
    setSearch('');
    setStatus('all');
  };

  return (
    <div className="min-h-screen bg-marble text-onyx dark:bg-onyx dark:text-marble">
      <Banner />
      <Header />

      <main className="relative pt-24 pb-20">
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <LivestreamHero />
          <LivestreamTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </section>

        <div className="border-t border-gray-200 dark:border-white/10 mt-12" />

        {activeTab === 'overview' ? (
          <section className="max-w-7xl mx-auto px-6 md:px-12 py-10">
            <div className="mb-8">
              <h1 className="text-4xl font-black tracking-tight text-onyx dark:text-white">
                All Livestreams
              </h1>
              <p className="text-slate dark:text-gray-400 mt-2 font-medium">
                0 streams found
              </p>
            </div>

            <LivestreamSearchBar
              search={search}
              setSearch={setSearch}
              status={status}
              setStatus={setStatus}
              onClear={handleClear}
            />

            <LivestreamEmptyState />
          </section>
        ) : (
          <LivestreamAnalytics />
        )}
      </main>

      <Footer />
    </div>
  );
}