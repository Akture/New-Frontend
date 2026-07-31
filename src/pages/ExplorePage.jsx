import { useState } from 'react';
import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ExploreHero from '../components/ExploreVideos/ExploreHero';
import ExploreSearchForm from '../components/ExploreVideos/ExploreSearchForm';
import ExploreResultsHeader from '../components/ExploreVideos/ExploreResultsHeader';
import ExploreVideoCard from '../components/ExploreVideos/ExploreVideoCard';
import CartBar from '../components/ExploreVideos/CartBar';
import PurchaseConfirmationModal from '../components/ExploreVideos/PurchaseConfirmationModal';
import { getClipDuration, toPrice } from '../components/ExploreVideos/clipShape';
import { matchData } from '../components/ExploreVideos/ExploreData';

export default function ExplorePage() {
  // The reel holds whole clips in the order they were chosen, so the selection
  // survives re-sorting and paging through results.
  const [cartItems, setCartItems] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
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
    setCartItems((prev) => {
      if (prev.some((item) => item.id === id)) {
        return prev.filter((item) => item.id !== id);
      }
      const match = matchData.find((item) => item.id === id);
      return match ? [...prev, match] : prev;
    });
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleMove = (index, direction) => {
    setCartItems((prev) => {
      const target = index + direction;
      if (target < 0 || target >= prev.length) return prev;
      const next = [...prev];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  };

  const handleClear = () => {
    setCartItems([]);
    setShowConfirmation(false);
  };

  const sortedMatches = [...matchData].sort((a, b) => {
    if (sortOrder === 'Time (Earliest)') return a.id - b.id;
    if (sortOrder === 'Time (Latest)') return b.id - a.id;
    if (sortOrder === 'Duration') return parseInt(b.duration) - parseInt(a.duration);
    return 0;
  });

  const displayedMatches = sortedMatches.slice(0, visibleCount);

  // Preview totals from the sample clip data, so the overlay can be reviewed
  // before checkout exists. The real figures come from the server, which prices
  // an order by its total combined duration and returns the billable seconds
  // and any credits applied — swap this object for that response and the
  // overlay renders it unchanged.
  const previewPricing = (() => {
    if (cartItems.length === 0) return null;
    const prices = cartItems.map((clip) => toPrice(clip.price));
    if (prices.some((price) => price === null)) return null;
    return {
      status: 'ready',
      price: prices.reduce((sum, price) => sum + price, 0),
      billableSeconds: cartItems.reduce((sum, clip) => sum + getClipDuration(clip), 0),
    };
  })();

  return (
    <div className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white min-h-screen flex flex-col relative overflow-x-hidden">
      <Banner />
      <Header />

      <main className="flex-grow w-full relative pt-12">
        <div className="absolute inset-0 opacity-100 pointer-events-none z-0 bg-dot-pattern"></div>

        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 py-12 relative z-10 ${
            cartItems.length > 0 ? 'pb-32' : ''
          }`}
        >
          <ExploreHero />

          <ExploreSearchForm
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
              <ExploreResultsHeader
                displayedCount={displayedMatches.length}
                date={date}
                court={court}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayedMatches.map((match) => (
                  <ExploreVideoCard
                    key={match.id}
                    match={match}
                    onAdd={handleAdd}
                    addedToCart={cartItems.some((item) => item.id === match.id)}
                    cartIndex={cartItems.findIndex((item) => item.id === match.id)}
                  />
                ))}
              </div>

              {visibleCount < matchData.length && (
                <div className="mt-10 flex justify-center">
                  <button
                    onClick={handleLoadMore}
                    className="bg-white dark:bg-surface border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white hover:border-ember hover:text-ember font-bold py-3 px-8 rounded-xl transition-all uppercase tracking-widest text-xs flex items-center gap-2"
                  >
                    <i className="ph-bold ph-arrows-clockwise"></i> Load More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <CartBar cart={cartItems} onReview={() => setShowConfirmation(true)} onClear={handleClear} />

      <PurchaseConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        cart={cartItems}
        onRemove={handleRemove}
        onMove={handleMove}
        pricing={previewPricing}
      />

      <Footer />
    </div>
  );
}
