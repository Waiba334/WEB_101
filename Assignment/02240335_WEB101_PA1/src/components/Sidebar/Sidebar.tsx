/**
 * Sidebar Component
 *
 * The Sidebar is the main navigation area of the Spotify application.
 * It contains:
 * - Logo and brand identity
 * - Primary navigation (Home, Search)
 * - Your Library section
 * - Create playlist and podcast cards
 * - Footer with legal links
 *
 * Responsive Behavior:
 * - Desktop: Full sidebar with all elements visible
 * - Tablet: Collapsed to icons only
 * - Mobile: Hidden, replaced by bottom navigation
 */

import type React from 'react';
import {
  SpotifyLogo,
  HomeIconFilled,
  SearchIcon,
  LibraryIcon,
  PlusIcon,
  GlobeIcon,
} from '../icons/Icons';
import { footerLinks } from '../../data/mockData';

// Props interface for component customization
interface SidebarProps {
  isOpen?: boolean;           // Controls mobile sidebar visibility
  onClose?: () => void;       // Callback when sidebar is closed on mobile
}

/**
 * Sidebar Component
 * Renders the left navigation panel with all its sections
 */
const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, onClose }) => {
  return (
    <aside
      className={`
        fixed lg:relative
        w-[280px] lg:w-[280px] md:w-[72px]
        h-full
        bg-spotify-black
        flex flex-col
        z-50
        transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}
      aria-label="Main Navigation"
    >
      {/* Logo Section - Spotify branding at the top */}
      <div className="p-6 hidden lg:block">
        <a href="/" className="flex items-center gap-2" aria-label="Spotify Home">
          <SpotifyLogo className="text-white" size={32} />
        </a>
      </div>

      {/* Primary Navigation Links */}
      <nav className="px-3 py-2 lg:py-0">
        {/* Home Navigation Item */}
        <a
          href="/"
          className="
            flex items-center gap-4 px-3 py-3
            text-white font-semibold
            hover:text-white transition-colors
            rounded-md
          "
          aria-current="page"
        >
          <HomeIconFilled className="text-white" size={24} />
          <span className="hidden lg:inline">Home</span>
        </a>

        {/* Search Navigation Item */}
        <a
          href="/search"
          className="
            flex items-center gap-4 px-3 py-3
            text-spotify-light-gray font-medium
            hover:text-white transition-colors
            rounded-md
          "
        >
          <SearchIcon className="text-spotify-light-gray" size={24} />
          <span className="hidden lg:inline">Search</span>
        </a>
      </nav>

      {/* Your Library Section */}
      <div className="mt-6 px-2 flex-1 overflow-hidden flex flex-col">
        <div className="bg-spotify-card rounded-lg p-4 flex-1 flex flex-col">
          {/* Library Header with Add Button */}
          <div className="flex items-center justify-between mb-4">
            <button
              className="
                flex items-center gap-3
                text-spotify-light-gray
                hover:text-white transition-colors
                font-medium
              "
              aria-label="Your Library"
            >
              <LibraryIcon size={24} />
              <span className="hidden lg:inline">Your Library</span>
            </button>

            {/* Add Button - Creates new playlist */}
            <button
              className="
                p-2 rounded-full
                text-spotify-light-gray
                hover:text-white hover:bg-spotify-card-hover
                transition-all hidden lg:flex
              "
              aria-label="Create playlist or folder"
            >
              <PlusIcon size={16} />
            </button>
          </div>

          {/* Create Playlist Card */}
          <div className="bg-spotify-card-hover rounded-lg p-4 mb-4 hidden lg:block">
            <h3 className="font-bold text-white mb-2">
              Create your first playlist
            </h3>
            <p className="text-sm text-spotify-light-gray mb-4">
              It's easy, we'll help you
            </p>
            <button
              className="
                px-4 py-2
                bg-white text-black
                rounded-full font-bold text-sm
                hover:scale-105 transition-transform
              "
            >
              Create playlist
            </button>
          </div>

          {/* Browse Podcasts Card */}
          <div className="bg-spotify-card-hover rounded-lg p-4 hidden lg:block">
            <h3 className="font-bold text-white mb-2">
              Let's find some podcasts to follow
            </h3>
            <p className="text-sm text-spotify-light-gray mb-4">
              We'll keep you updated on new episodes
            </p>
            <button
              className="
                px-4 py-2
                bg-white text-black
                rounded-full font-bold text-sm
                hover:scale-105 transition-transform
              "
            >
              Browse podcasts
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section - Legal Links and Language */}
      <footer className="p-4 hidden lg:block">
        {/* Legal Links Grid */}
        <nav className="flex flex-wrap gap-x-4 gap-y-2 mb-6" aria-label="Footer">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                text-[11px] text-spotify-light-gray
                hover:underline
              "
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Language Selector Button */}
        <button
          className="
            flex items-center gap-2
            px-4 py-1.5
            border border-spotify-light-gray rounded-full
            text-white text-sm font-semibold
            hover:border-white hover:scale-105
            transition-all
          "
        >
          <GlobeIcon size={16} />
          English
        </button>
      </footer>
    </aside>
  );
};

export default Sidebar;
