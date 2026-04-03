/**
 * ArtistCard Component
 *
 * A reusable card component for displaying artist information.
 * Unlike SongCard, this uses a circular image to differentiate
 * artists from albums/playlists (a common Spotify design pattern).
 *
 * Features:
 * - Circular profile image
 * - Artist name
 * - "Artist" type label
 * - Hover play button
 *
 * This component demonstrates:
 * - Single Responsibility Principle
 * - Component reusability
 * - Consistent styling patterns
 */

import type React from 'react';
import { useState } from 'react';
import { PlayIcon } from '../icons/Icons';

// Props interface for ArtistCard
interface ArtistCardProps {
  id?: string;           // Unique identifier
  name: string;          // Artist name
  imageUrl: string;      // Profile image URL
  type?: string;         // Label (defaults to "Artist")
  onClick?: () => void;  // Optional click handler
}

/**
 * ArtistCard Component
 * Renders an artist card with circular profile image
 */
const ArtistCard: React.FC<ArtistCardProps> = ({
  name,
  imageUrl,
  type = 'Artist',
  onClick,
}) => {
  // Track hover state for animations
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
      {/* Artist Image Container */}
      <div className="relative mb-4">
        {/* Circular Profile Image - Key visual differentiator from albums */}
        <img
          src={imageUrl}
          alt={`${name} profile`}
          className="
            w-full aspect-square
            object-cover rounded-full
            shadow-xl
          "
          loading="lazy"
        />

        {/* Play Button Overlay */}
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
          aria-label={`Play ${name}`}
          onClick={(e) => {
            e.stopPropagation();
            console.log(`Playing: ${name}`);
          }}
        >
          <PlayIcon className="text-black ml-1" size={24} />
        </button>
      </div>

      {/* Artist Information */}
      <div className="min-w-0 text-center">
        {/* Artist Name */}
        <h3
          className="
            font-bold text-white
            text-base mb-1
            line-clamp-1
          "
          title={name}
        >
          {name}
        </h3>

        {/* Type Label */}
        <p className="text-sm text-spotify-light-gray">
          {type}
        </p>
      </div>
    </article>
  );
};

export default ArtistCard;