import { useState } from 'react';
import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PurchaseHero from '../components/PurchaseVideos/PurchaseHero';
import PurchaseSearchForm from '../components/PurchaseVideos/PurchaseSearchForm';
import PurchaseResultsHeader from '../components/PurchaseVideos/PurchaseResultsHeader';
import PurchaseVideoCard from '../components/PurchaseVideos/PurchaseVideoCard';
import { purchaseStyles } from '../components/PurchaseVideos/PurchaseStyles';
import { matchData } from '../components/PurchaseVideos/PurchaseData';

export default function PurchasePage() {
  const [cartItems, setCartItems] = useState([]);
  const [court, setCourt] = useState('main');
  const [date, setDate] = useState('Today');
  const [startTime, setStartTime] = useState('08:30');
  const [endTime, setEndTime] = useState('10:30');
  const [sortOrder, setSortOrder] = useState('Time (Earliest)');
  const [searched, setSearched] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleSearch = () => {
    setSearched(true);
    setVisibleCount(4);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const handleAdd = (id) => {
    setCartItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const sortedMatches = [...matchData].sort((a, b) => {
    if (sortOrder === 'Time (Earliest)') return a.id - b.id;
    if (sortOrder === 'Time (Latest)') return b.id - a.id;
    if (sortOrder === 'Duration') return parseInt(b.duration) - parseInt(a.duration);
    return 0;
  });

  const displayedMatches = sortedMatches.slice(0, visibleCount);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col relative overflow-x-hidden">
      <Banner />
      <Header />

      <main className="flex-grow w-full relative pt-12">
        <div
          className="absolute inset-0 opacity-100 pointer-events-none z-0"
          style={purchaseStyles.bgPattern}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 relative z-10">
          <PurchaseHero />

          <PurchaseSearchForm
            onSearch={handleSearch}
            court={court}
            setCourt={setCourt}
            date={date}
            setDate={setDate}
            startTime={startTime}
            setStartTime={setStartTime}
            endTime={endTime}
            setEndTime={setEndTime}
          />

          {searched && (
            <>
              <PurchaseResultsHeader
                displayedCount={displayedMatches.length}
                date={date}
                court={court}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayedMatches.map((match) => (
                  <PurchaseVideoCard
                    key={match.id}
                    match={match}
                    onAdd={handleAdd}
                    addedToCart={cartItems.includes(match.id)}
                  />
                ))}
              </div>

              {visibleCount < matchData.length && (
                <div className="mt-10 flex justify-center">
                  <button
                    onClick={handleLoadMore}
                    className="bg-[#111827] border-2 border-gray-700 text-white hover:border-[#E63946] hover:text-[#E63946] font-bold py-3 px-8 rounded-xl transition-all uppercase tracking-widest text-xs flex items-center gap-2"
                  >
                    <i className="ph-bold ph-arrows-clockwise"></i> Load More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}