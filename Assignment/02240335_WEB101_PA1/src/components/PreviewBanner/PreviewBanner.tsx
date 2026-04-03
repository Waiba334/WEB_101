/**
 * PreviewBanner Component
 *
 * A sticky banner that appears at the bottom of the page for
 * non-logged-in users, encouraging them to sign up.
 *
 * Features:
 * - Gradient background matching Spotify's design
 * - Call-to-action text
 * - Sign up button
 * - Responsive layout
 *
 * This component demonstrates:
 * - CSS gradients in Tailwind
 * - Sticky positioning
 * - Responsive text sizing
 */

import type React from 'react';

/**
 * PreviewBanner Component
 * Renders the sign-up promotion banner at the bottom
 */
const PreviewBanner: React.FC = () => {
  return (
    <div
      className="
        fixed bottom-0 left-0 right-0
        bg-gradient-to-r from-[#ae2896] to-[#509bf5]
        px-4 py-3 md:px-8 md:py-4
        z-50
      "
      role="banner"
      aria-label="Sign up promotion"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Promotional Text */}
        <div className="text-center sm:text-left">
          <p className="text-xs font-bold text-white uppercase tracking-wide">
            Preview of Spotify
          </p>
          <p className="text-white text-sm md:text-base">
            Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
          </p>
        </div>

        {/* Sign Up Button */}
        <button
          className="
            px-8 py-3
            bg-white text-black
            rounded-full font-bold
            hover:scale-105 hover:bg-gray-100
            transition-all
            whitespace-nowrap
          "
          onClick={() => console.log('Sign up clicked')}
        >
          Sign up free
        </button>
      </div>
    </div>
  );
};

export default PreviewBanner;
