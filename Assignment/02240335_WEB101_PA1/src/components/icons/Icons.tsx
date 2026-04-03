/**
 * Icons Component File
 *
 * This file contains all SVG icon components used throughout the Spotify clone.
 * Using SVG components instead of icon libraries gives us:
 * - Complete control over styling
 * - No external dependencies
 * - Better performance (no icon font loading)
 *
 * Each icon accepts className prop for flexible styling with Tailwind CSS.
 */

import type React from 'react';

// Common props interface for all icon components
interface IconProps {
  className?: string;
  size?: number;
}

/**
 * Spotify Logo Icon
 * The recognizable Spotify brand logo with three curved lines
 */
export const SpotifyLogo: React.FC<IconProps> = ({ className = '', size = 32 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Spotify"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

/**
 * Home Icon
 * House-shaped icon for home navigation
 */
export const HomeIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Home"
  >
    <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"/>
  </svg>
);

/**
 * Home Icon Filled - Active state version
 */
export const HomeIconFilled: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Home"
  >
    <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"/>
  </svg>
);

/**
 * Search Icon
 * Magnifying glass for search functionality
 */
export const SearchIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Search"
  >
    <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"/>
  </svg>
);

/**
 * Library Icon
 * Stack of items representing your library
 */
export const LibraryIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Your Library"
  >
    <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"/>
  </svg>
);

/**
 * Plus Icon
 * Used for "Create Playlist" and add actions
 */
export const PlusIcon: React.FC<IconProps> = ({ className = '', size = 16 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Add"
  >
    <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"/>
  </svg>
);

/**
 * Globe Icon
 * Language selection indicator
 */
export const GlobeIcon: React.FC<IconProps> = ({ className = '', size = 16 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Language"
  >
    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM5.78 1.8A6.02 6.02 0 0 0 2.05 7H4.5c.07-1.75.33-3.36.79-4.64.16-.45.35-.87.57-1.25l-.08-.3zM4.5 9H2.06a6.02 6.02 0 0 0 3.72 5.2l.08-.31c-.22-.38-.41-.8-.57-1.25A13.67 13.67 0 0 1 4.5 9zM7 9c.08 1.67.36 3.21.85 4.47.21.54.45.98.7 1.3.24.31.45.43.6.43s.36-.12.6-.43c.25-.32.49-.76.7-1.3.49-1.26.77-2.8.85-4.47H7zm4.5 0c-.07 1.75-.33 3.36-.79 4.64-.16.45-.35.87-.57 1.25l.08.3a6.02 6.02 0 0 0 3.73-5.2H11.5zM13.94 7a6.02 6.02 0 0 0-3.72-5.2l-.08.31c.22.38.41.8.57 1.25.46 1.28.72 2.89.79 4.64h2.44zM7 7h4.3c-.08-1.67-.36-3.21-.85-4.47a6.1 6.1 0 0 0-.7-1.3C9.51 1.12 9.3 1 9.15 1s-.36.12-.6.43c-.25.32-.49.76-.7 1.3C7.36 3.79 7.08 5.33 7 7z"/>
  </svg>
);

/**
 * Play Icon
 * Triangle play button for media controls
 */
export const PlayIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Play"
  >
    <path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/>
  </svg>
);

/**
 * Download Icon
 * Arrow pointing down into a tray
 */
export const DownloadIcon: React.FC<IconProps> = ({ className = '', size = 16 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Download"
  >
    <path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8.53 12.28a.75.75 0 0 1-1.06 0L4.995 9.805a.75.75 0 0 1 0-1.06z"/>
    <path d="M0 12.75A2.75 2.75 0 0 0 2.75 15.5h10.5A2.75 2.75 0 0 0 16 12.75v-.5a.75.75 0 0 0-1.5 0v.5c0 .69-.56 1.25-1.25 1.25H2.75c-.69 0-1.25-.56-1.25-1.25v-.5a.75.75 0 0 0-1.5 0v.5z"/>
  </svg>
);

/**
 * External Link Icon
 * Arrow pointing to upper right
 */
export const ExternalLinkIcon: React.FC<IconProps> = ({ className = '', size = 16 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="External Link"
  >
    <path d="M1 2.75A.75.75 0 0 1 1.75 2H7a.75.75 0 0 1 0 1.5H2.5v10h10V9a.75.75 0 0 1 1.5 0v5.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"/>
    <path d="M14.25 1A.75.75 0 0 0 13.5.25H9a.75.75 0 0 0 0 1.5h3.19L6.47 7.47a.75.75 0 1 0 1.06 1.06l5.72-5.72v3.19a.75.75 0 0 0 1.5 0v-4.5A.75.75 0 0 0 14.25 1z"/>
  </svg>
);

/**
 * Menu Icon (Hamburger)
 * Three horizontal lines for mobile menu
 */
export const MenuIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Menu"
  >
    <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
  </svg>
);

/**
 * Close Icon (X)
 * X mark for closing modals/menus
 */
export const CloseIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Close"
  >
    <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
  </svg>
);
