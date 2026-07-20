import { useState } from 'react';
import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import LocationsHero from '../components/Locations/LocationsHero';
import LocationCard from '../components/Locations/LocationCard';
import LocationsMapView from '../components/Locations/LocationsMapView';
import LocationDetailModal from '../components/Locations/LocationDetailModal';
import RequestLocationModal from '../components/Locations/RequestLocationModal';
import NotifyModal from '../components/Locations/NotifyModal';
import { locations } from '../components/Locations/LocationsData';

export default function LocationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [viewMode, setViewMode] = useState('list');
  const [isSearching, setIsSearching] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [notifyLocation, setNotifyLocation] = useState(null);

  const filtered = locations.filter((loc) => {
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      loc.name.toLowerCase().includes(q) ||
      loc.address.toLowerCase().includes(q) ||
      loc.city.toLowerCase().includes(q);
    const matchCity = !cityFilter || loc.cityValue === cityFilter;
    return matchSearch && matchCity;
  });

  const handleFindNearest = () => {
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 800);
  };

  return (
    <div className="min-h-screen bg-marble text-onyx dark:bg-onyx dark:text-marble">
      <Banner />
      <Header />

      <main className="pt-4">
        <LocationsHero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          cityFilter={cityFilter}
          setCityFilter={setCityFilter}
          isSearching={isSearching}
          onFindNearest={handleFindNearest}
        />

        <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 border-b border-gray-200 dark:border-gray-800 pb-4">
            <h2 className="text-xl font-bold text-onyx dark:text-white flex items-center gap-2">
              <span className="bg-onyx dark:bg-white dark:text-onyx text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">
                {filtered.length}
              </span>
              Locations Found
            </h2>

            <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setViewMode('list')}
                className={`px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${
                  viewMode === 'list'
                    ? 'bg-white dark:bg-[#0F172A] text-onyx dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-onyx dark:hover:text-white'
                }`}
              >
                <i className="ph-bold ph-list"></i>
                List
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${
                  viewMode === 'map'
                    ? 'bg-white dark:bg-[#0F172A] text-onyx dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-onyx dark:hover:text-white'
                }`}
              >
                <i className="ph-bold ph-map-trifold"></i>
                Map
              </button>
            </div>
          </div>

          {viewMode === 'list' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((loc) => (
                <LocationCard
                  key={loc.id}
                  location={loc}
                  onView={() => setSelectedLocation(loc)}
                  onNotify={() => setNotifyLocation(loc)}
                />
              ))}
              {filtered.length === 0 && (
                <div className="col-span-full text-center py-12 text-gray-500 dark:text-gray-400 font-medium">
                  No locations match your search.
                </div>
              )}
            </div>
          ) : (
            <LocationsMapView locations={filtered} onSelect={setSelectedLocation} />
          )}
        </section>

        <section className="bg-onyx w-full py-24 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-20" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Don't see your home court?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 font-medium">
              We're constantly expanding the AKTURE network. Let us know where you play, and
              we'll work on bringing our platform to your favorite facility.
            </p>
            <button
              onClick={() => setShowRequestModal(true)}
              className="bg-gradient-ember text-white px-10 py-4 rounded-xl font-black text-lg transition-all shadow-[0_0_40px_-10px_rgba(189,32,38,0.5)] hover:shadow-[0_0_60px_-10px_rgba(189,32,38,0.7)] scale-100 hover:scale-105 active:scale-95"
            >
              Request a Location
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <LocationDetailModal location={selectedLocation} onClose={() => setSelectedLocation(null)} />
      <RequestLocationModal isOpen={showRequestModal} onClose={() => setShowRequestModal(false)} />
      <NotifyModal
        isOpen={!!notifyLocation}
        location={notifyLocation}
        onClose={() => setNotifyLocation(null)}
      />
    </div>
  );
}
