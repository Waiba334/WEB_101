/**
 * Header Component
 *
 * The Header appears at the top of the main content area and contains:
 * - Navigation controls (back/forward arrows)
 * - Navigation links (Premium, Support, Download)
 * - Authentication buttons (Sign up, Log in)
 *
 * Responsive Behavior:
 * - Desktop: Full header with all elements
 * - Mobile: Simplified header with menu button
 */

import type React from 'react';
import { DownloadIcon, MenuIcon } from '../icons/Icons';

// Props interface for Header customization
interface HeaderProps {
  onMenuClick?: () => void;  // Callback for mobile menu toggle
}

/**
 * Header Component
 * Renders the top navigation bar with auth controls
 */
const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header
      className="
        sticky top-0
        flex items-center justify-between
        px-4 md:px-8 py-4
        bg-spotify-dark/90 backdrop-blur-md
        z-40
      "
    >
      {/* Left Section - Navigation Arrows */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button - Only visible on mobile */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 text-white"
          aria-label="Open menu"
        >
          <MenuIcon size={24} />
        </button>

        {/* Navigation Arrows - Desktop only */}
        <div className="hidden md:flex items-center gap-2">
          {/* Back Button */}
          <button
            className="
              w-8 h-8
              flex items-center justify-center
              bg-black/70 rounded-full
              text-white
              hover:bg-black transition-colors
              disabled:opacity-50 disabled:cursor-not-allowed
            "
            aria-label="Go back"
            disabled
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"/>
            </svg>
          </button>

          {/* Forward Button */}
          <button
            className="
              w-8 h-8
              flex items-center justify-center
              bg-black/70 rounded-full
              text-white
              hover:bg-black transition-colors
              disabled:opacity-50 disabled:cursor-not-allowed
            "
            aria-label="Go forward"
            disabled
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Center Section - Navigation Links (Desktop only) */}
      <nav className="hidden lg:flex items-center gap-2">
        <a
          href="/premium"
          className="
            px-4 py-2
            text-spotify-light-gray font-semibold text-sm
            hover:text-white hover:scale-105
            transition-all
          "
        >
          Premium
        </a>
        <a
          href="/support"
          className="
            px-4 py-2
            text-spotify-light-gray font-semibold text-sm
            hover:text-white hover:scale-105
            transition-all
          "
        >
          Support
        </a>
        <a
          href="/download"
          className="
            px-4 py-2
            text-spotify-light-gray font-semibold text-sm
            hover:text-white hover:scale-105
            transition-all
          "
        >
          Download
        </a>

        {/* Divider Line */}
        <div className="w-px h-6 bg-white/30 mx-2" />

        {/* Install App Link */}
        <a
          href="/download"
          className="
            flex items-center gap-2
            px-4 py-2
            text-white font-semibold text-sm
            hover:scale-105 transition-transform
          "
        >
          <DownloadIcon size={16} />
          Install App
        </a>
      </nav>

      {/* Right Section - Auth Buttons */}
      <div className="flex items-center gap-2">
        {/* Sign Up Button */}
        <a
          href="/signup"
          className="
            hidden sm:block
            px-4 md:px-8 py-3
            text-spotify-light-gray font-bold text-sm
            hover:text-white hover:scale-105
            transition-all
          "
        >
          Sign up
        </a>

        {/* Log In Button - Primary CTA */}
        <a
          href="/login"
          className="
            px-6 md:px-8 py-3
            bg-white text-black
            rounded-full font-bold text-sm
            hover:scale-105 hover:bg-white/90
            transition-all
          "
        >
          Log in
        </a>
      </div>
    </header>
  );
};

export default Header;
