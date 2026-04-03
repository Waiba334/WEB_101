/**
 * ContentSection Component
 *
 * A reusable section component that displays a header and grid of cards.
 * This is a higher-order component that wraps card grids for consistent
 * layout across different content types (songs, artists, playlists).
 *
 * Features:
 * - Section title with "Show all" link
 * - Responsive grid layout
 * - Works with any card component through children
 *
 * This demonstrates:
 * - Composition pattern in React
 * - Children prop usage
 * - Reusable layout components
 */

import type React from 'react';
import type { ReactNode } from 'react';

// Props interface for ContentSection
interface ContentSectionProps {
  title: string;              // Section heading
  showAllLink?: string;       // Optional "Show all" link URL
  children: ReactNode;        // Card components to render
  className?: string;         // Additional styling
}

/**
 * ContentSection Component
 * Provides consistent layout for content sections
 */
const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  showAllLink,
  children,
  className = '',
}) => {
  return (
    <section className={`mb-8 ${className}`}>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-white hover:underline cursor-pointer">
          {title}
        </h2>

        {/* Show All Link - Only rendered if URL provided */}
        {showAllLink && (
          <a
            href={showAllLink}
            className="
              text-sm font-bold text-spotify-light-gray
              hover:underline hover:text-white
              transition-colors
            "
          >
            Show all
          </a>
        )}
      </div>

      {/* Content Grid - Responsive columns with horizontal scroll on mobile */}
      <div
        className="
          grid gap-6
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          xl:grid-cols-6
          2xl:grid-cols-8
        "
      >
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
