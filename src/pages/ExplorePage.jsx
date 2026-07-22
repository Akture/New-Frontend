import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ExploreHero from '../components/ExploreVideos/ExploreHero';
import ExploreSearchForm from '../components/ExploreVideos/ExploreSearchForm';
import ExploreResultsHeader from '../components/ExploreVideos/ExploreResultsHeader';
import ExploreVideoCard from '../components/ExploreVideos/ExploreVideoCard';
import CartBar from '../components/ExploreVideos/CartBar';
import PurchaseConfirmationModal from '../components/ExploreVideos/PurchaseConfirmationModal';
import { fetchVideos } from '../store/videoSlice';
import { labelToDate } from '../utils/videoUtils';

export default function ExplorePage() {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.video.videos);
  const totalPages = useSelector((state) => state.video.totalPages);
  const currentPage = useSelector((state) => state.video.currentPage);
  const isLoading = useSelector((state) => state.video.loading.fetchVideos);

  // Cart holds full video objects (in selection order) so the reel survives
  // later searches replacing the redux results list.
  const [cartItems, setCartItems] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [court, setCourt] = useState('main');
  const [date, setDate] = useState('Today');
  const [startTime, setStartTime] = useState('08:30');
  const [endTime, setEndTime] = useState('10:30');
  const [sortOrder, setSortOrder] = useState('Time (Earliest)');
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    setSearched(true);
    dispatch(fetchVideos({
      page: 0,
      size: 12,
      courtId: court,
      date: labelToDate(date),
      startTime,
      endTime,
    }));
  };

  const handleLoadMore = () => {
    dispatch(fetchVideos({
      page: currentPage + 1,
      size: 12,
      courtId: court,
      date: labelToDate(date),
      startTime,
      endTime,
    }));
  };

  const handleAdd = (id) => {
    setCartItems((prev) => {
      if (prev.some((item) => item.id === id)) {
        return prev.filter((item) => item.id !== id);
      }
      const video = videos.find((v) => v.id === id);
      return video ? [...prev, video] : prev;
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

  const sortedVideos = [...videos].sort((a, b) => {
    if (sortOrder === 'Time (Earliest)') return new Date(a.startTime) - new Date(b.startTime);
    if (sortOrder === 'Time (Latest)') return new Date(b.startTime) - new Date(a.startTime);
    if (sortOrder === 'Duration') return (b.duration ?? 0) - (a.duration ?? 0);
    return 0;
  });

  return (
    <div className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white min-h-screen flex flex-col relative overflow-x-hidden">
      <Banner />
      <Header />

      <main className="flex-grow w-full relative pt-12">
        <div className="absolute inset-0 opacity-100 pointer-events-none z-0 bg-dot-pattern" />

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

          {isLoading && (
            <div className="flex justify-center items-center py-20">
              <span className="w-8 h-8 border-4 border-ember border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {!isLoading && searched && (
            <>
              <ExploreResultsHeader
                displayedCount={sortedVideos.length}
                date={date}
                court={court}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
              />

              {sortedVideos.length === 0 ? (
                <div className="text-center py-16">
                  <i className="ph-duotone ph-video-camera-slash text-5xl text-gray-300 dark:text-gray-600"></i>
                  <p className="mt-4 font-bold text-gray-900 dark:text-white">
                    No videos in this window
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    Try widening the time range or picking another date.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sortedVideos.map((video) => (
                    <ExploreVideoCard
                      key={video.id}
                      video={video}
                      onAdd={handleAdd}
                      addedToCart={cartItems.some((item) => item.id === video.id)}
                      cartIndex={cartItems.findIndex((item) => item.id === video.id)}
                    />
                  ))}
                </div>
              )}

              {currentPage + 1 < totalPages && (
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

      <CartBar
        cart={cartItems}
        onReview={() => setShowConfirmation(true)}
        onClear={handleClear}
      />

      <PurchaseConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        cart={cartItems}
        onRemove={handleRemove}
        onMove={handleMove}
      />

      <Footer />
    </div>
  );
}
