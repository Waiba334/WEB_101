/**
 * SongCard Component
 *
 * A reusable card component that displays song/album information.
 * This follows the Single Responsibility Principle - it only handles
 * the display of a single song item.
 *
 * Features:
 * - Album artwork with hover play button
 * - Song title with text truncation
 * - Artist name(s)
 * - Explicit content badge (optional)
 *
 * Usage:
 * <SongCard
 *   title="Song Name"
 *   artist="Artist Name"
 *   imageUrl="https://..."
 *   explicit={true}
 * />
 */

import type React from 'react';
import { useState } from 'react';
import { PlayIcon } from '../icons/Icons';

// Props interface defines all customization options
interface SongCardProps {
  id?: string;           // Unique identifier for the song
  title: string;         // Song/album title
  artist: string;        // Artist name(s)
  imageUrl: string;      // Album artwork URL
  explicit?: boolean;    // Whether to show explicit content badge
  onClick?: () => void;  // Optional click handler
}

/**
 * SongCard Component
 * Renders an interactive card with album art, title, and artist
 */
const SongCard: React.FC<SongCardProps> = ({
  title,
  artist,
  imageUrl,
  explicit = false,
  onClick,
}) => {
  // Track hover state for play button visibility
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="
        group
        p-4
        bg-spotify-card hover:bg-spotify-card-hover
        rounded-lg
        cursor-pointer
        transition-all duration-300
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Album Artwork Container */}
      <div className="relative mb-4">
        {/* Album Image */}
        <img
          src={imageUrl}
          alt={`${title} album cover`}
          className="
            w-full aspect-square
            object-cover rounded-md
            shadow-lg
          "
          loading="lazy"
        />

        {/* Play Button Overlay - Appears on hover */}
        <button
          className={`
            absolute bottom-2 right-2
            w-12 h-12
            flex items-center justify-center
            bg-spotify-green rounded-full
            shadow-xl
            transform transition-all duration-300
            hover:scale-110 hover:bg-spotify-green-dark
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
          `}
          aria-label={`Play ${title}`}
          onClick={(e) => {
            e.stopPropagation();
            // Play functionality would go here
            console.log(`Playing: ${title}`);
          }}
        >
          <PlayIcon className="text-black ml-1" size={24} />
        </button>
      </div>

      {/* Song Information */}
      <div className="min-w-0">
        {/* Song Title - Truncates long titles */}
        <h3
          className="
            font-bold text-white
            text-base mb-1
            line-clamp-1
          "
          title={title}
        >
          {title}
        </h3>

        {/* Artist Name with Explicit Badge */}
        <p className="flex items-center gap-1.5 text-sm text-spotify-light-gray line-clamp-2">
          {/* Explicit Content Badge */}
          {explicit && (
            <span
              className="
                inline-flex items-center justify-center
                w-4 h-4 min-w-[16px]
                bg-spotify-light-gray text-black
                text-[9px] font-bold
                rounded-sm
              "
              aria-label="Explicit"
            >
              E
            </span>
          )}
          <span className="truncate">{artist}</span>
        </p>
      </div>
    </article>
  );
};

export default SongCard;
