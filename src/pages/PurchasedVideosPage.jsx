import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import DashboardSubNav from '../components/Dashboard/DashboardSubNav';
import StorageCard from '../components/Dashboard/StorageCard';
import EmptyVideoGrid from '../components/Dashboard/EmptyVideoGrid';
import PurchasedVideoCard from '../components/Dashboard/PurchasedVideoCard';
import FeedbackTab from '../components/Dashboard/FeedbackTab';
import SubscriptionTab from '../components/Dashboard/SubscriptionTab';
import { fetchUserPurchasedVideos } from '../store/videoSlice';
import { useState } from 'react';

export default function PurchasedVideosPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeSubNav, setActiveSubNav] = useState('purchased');

  const user = useSelector((state) => state.auth.user);
  const purchasedVideos = useSelector((state) => state.video.userPurchasedVideos);
  const isLoading = useSelector((state) => state.video.loading.fetchUserPurchasedVideos);

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchUserPurchasedVideos(user.id));
    }
  }, [dispatch, user?.id]);

  const handleRefresh = () => {
    if (user?.id) dispatch(fetchUserPurchasedVideos(user.id));
  };

  const renderContent = () => {
    switch (activeSubNav) {
      case 'purchased':
      case 'myvideos':
        return (
          <>
            <div className="flex flex-col items-center text-center gap-4">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                My Purchased Videos
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                <p className="text-sm font-medium flex items-center justify-center gap-2 text-ember">
                  *If you are experiencing download issues, please try desktop or another mobile browser.*
                </p>
                <p className="text-sm font-medium flex items-center justify-center gap-2 text-ember/90">
                  *Leave us feedback below or via the "Leave Feedback" tab.*
                </p>
              </div>
            </div>

            <StorageCard onRefresh={handleRefresh} />

            <div className="w-full mt-8">
              {isLoading ? (
                <div className="flex justify-center items-center py-20">
                  <span className="w-8 h-8 border-4 border-ember border-t-transparent rounded-full animate-spin" />
                </div>
              ) : !user ? (
                <div className="text-center py-16">
                  <p className="text-gray-500 dark:text-gray-400 mb-4">Sign in to view your purchased videos.</p>
                  <button
                    onClick={() => navigate('/login')}
                    className="bg-gradient-ember text-white px-6 py-3 rounded-xl font-bold"
                  >
                    Sign In
                  </button>
                </div>
              ) : purchasedVideos.length === 0 ? (
                <EmptyVideoGrid onBrowse={() => navigate('/explore')} />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {purchasedVideos.map((video) => (
                    <PurchasedVideoCard key={video.id} video={video} />
                  ))}
                </div>
              )}
            </div>
          </>
        );

      case 'feedback':
        return (
          <>
            <div className="flex flex-col items-center text-center gap-4">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Leave Feedback
              </h1>
              <p className="text-gray-500 dark:text-gray-400 max-w-md">
                Share your experience and help us improve Akture for everyone.
              </p>
            </div>
            <FeedbackTab />
          </>
        );

      case 'subscription':
        return (
          <>
            <div className="flex flex-col items-center text-center gap-4">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                My Subscription
              </h1>
              <p className="text-gray-500 dark:text-gray-400 max-w-md">
                Manage your plan and unlock more features.
              </p>
            </div>
            <SubscriptionTab />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white min-h-screen flex flex-col relative overflow-x-hidden">
      <Banner />
      <Header />

      <main className="flex-grow w-full relative pt-12">
        <div className="absolute inset-0 opacity-100 pointer-events-none z-0 bg-dot-pattern" />

        <div className="relative z-10">
          <DashboardSubNav activeSubNav={activeSubNav} setActiveSubNav={setActiveSubNav} />

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8">
            {renderContent()}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
