import { useState } from 'react';
import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import DashboardSubNav from '../components/Dashboard/DashboardSubNav';
import StorageCard from '../components/Dashboard/StorageCard';
import EmptyVideoGrid from '../components/Dashboard/EmptyVideoGrid';
import FeedbackTab from '../components/Dashboard/FeedbackTab';
import SubscriptionTab from '../components/Dashboard/SubscriptionTab';

export default function PurchasedVideosPage() {
  const [activeSubNav, setActiveSubNav] = useState('purchased');

  const handleRefresh = () => {};
  const handleBrowse = () => {};

  const renderContent = () => {
    switch (activeSubNav) {
      case 'purchased':
      case 'myvideos':
        return (
          <>
            <div className="flex flex-col items-center text-center gap-4">
              <h1 className="text-4xl font-extrabold text-white tracking-tight">
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
              <EmptyVideoGrid onBrowse={handleBrowse} />
            </div>
          </>
        );

      case 'feedback':
        return (
          <>
            <div className="flex flex-col items-center text-center gap-4">
              <h1 className="text-4xl font-extrabold text-white tracking-tight">
                Leave Feedback
              </h1>
              <p className="text-gray-400 max-w-md">
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
              <h1 className="text-4xl font-extrabold text-white tracking-tight">
                My Subscription
              </h1>
              <p className="text-gray-400 max-w-md">
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
    <div className="bg-black text-white min-h-screen flex flex-col relative overflow-x-hidden">
      <Banner />
      <Header />

      <main className="flex-grow w-full relative pt-12">
        <div className="absolute inset-0 opacity-100 pointer-events-none z-0 bg-dot-pattern" />

        <div className="relative z-10">
          <DashboardSubNav
            activeSubNav={activeSubNav}
            setActiveSubNav={setActiveSubNav}
          />

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8">
            {renderContent()}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}