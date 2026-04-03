/**
 * App Component - Root Component of Spotify Clone
 *
 * This is the main entry point of the application that:
 * - Assembles all layout components (Sidebar, Header, MainContent, PreviewBanner)
 * - Manages global state (mobile menu toggle)
 * - Provides the overall app structure
 *
 * Layout Structure:
 * ┌─────────────────────────────────────────────┐
 * │  Sidebar  │          Header                 │
 * │           │─────────────────────────────────│
 * │           │                                 │
 * │           │        MainContent              │
 * │           │                                 │
 * │           │                                 │
 * ├───────────┴─────────────────────────────────┤
 * │            PreviewBanner                    │
 * └─────────────────────────────────────────────┘
 *
 * Responsive Behavior:
 * - Desktop (>1024px): Full sidebar visible
 * - Tablet (768-1024px): Collapsed sidebar with icons
 * - Mobile (<768px): Hidden sidebar with hamburger menu
 */

import type React from 'react';
import { useState } from 'react';
import { Sidebar, Header, MainContent, PreviewBanner } from './components';

/**
 * App Component
 * The root component that orchestrates the entire application
 */
const App: React.FC = () => {
  // State for mobile sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  /**
   * Toggle mobile sidebar visibility
   * Called when hamburger menu button is clicked
   */
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  /**
   * Close mobile sidebar
   * Called when clicking outside sidebar or on close button
   */
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="h-screen flex flex-col bg-spotify-dark">
      {/* Main App Layout Container */}
      <div className="flex flex-1 overflow-hidden">
        {/*
         * Mobile Overlay
         * Dark semi-transparent backdrop that appears when mobile sidebar is open
         * Clicking it closes the sidebar
         */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={closeSidebar}
            aria-hidden="true"
          />
        )}

        {/* Sidebar Navigation */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Header with Navigation and Auth */}
          <Header onMenuClick={toggleSidebar} />

          {/* Scrollable Content Area */}
          <MainContent />
        </div>
      </div>

      {/* Bottom Sign-up Banner */}
      <PreviewBanner />
    </div>
  );
};

export default App;