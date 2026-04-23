import { useState } from 'react';
import DashboardHeader from '../components/Dashboard/DashboardHeader';
import DashboardSubNav from '../components/Dashboard/DashboardSubNav';
import StorageCard from '../components/Dashboard/StorageCard';
import EmptyVideoGrid from '../components/Dashboard/EmptyVideoGrid';
import FeedbackTab from '../components/Dashboard/FeedbackTab';
import SubscriptionTab from '../components/Dashboard/SubscriptionTab';
// import Footer from '../components/Footer';

export default function PurchasedVideosPage() {
  const [activeSubNav, setActiveSubNav] = useState('purchased');
  const [activeNav, setActiveNav] = useState('myvideos');

  const handleRefresh = () => {};
  const handleBrowse = () => {};

  const renderContent = () => {
    switch (activeSubNav) {
      case 'purchased':
      case 'myvideos':
        return (
          <>
            <div className="flex flex-col items-center text-center gap-4">
              <h1 className="text-4xl font-extrabold text-black tracking-tight">
                My Purchased Videos
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                <p className="text-sm font-medium flex items-center justify-center gap-2" style={{ color: '#BD2026' }}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  *If you are experiencing download issues, please try desktop or another mobile browser.*
                </p>

                <p className="text-sm font-medium flex items-center justify-center gap-2 opacity-90" style={{ color: '#BD2026' }}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
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
              <h1 className="text-4xl font-extrabold text-black tracking-tight">
                Leave Feedback
              </h1>
              <p className="text-gray-500 max-w-md">
                Share your experience and help us improve ActionStream for everyone.
              </p>
            </div>

            <FeedbackTab />
          </>
        );

      case 'subscription':
        return (
          <>
            <div className="flex flex-col items-center text-center gap-4">
              <h1 className="text-4xl font-extrabold text-black tracking-tight">
                My Subscription
              </h1>
              <p className="text-gray-500 max-w-md">
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
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: '#F4F6F8', fontFamily: 'Inter, sans-serif' }}
    >
      <DashboardHeader activeNav={activeNav} setActiveNav={setActiveNav} />
      <DashboardSubNav activeSubNav={activeSubNav} setActiveSubNav={setActiveSubNav} />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8">
        {renderContent()}
      </main>

      {/* <Footer /> */}
    </div>
  );
}