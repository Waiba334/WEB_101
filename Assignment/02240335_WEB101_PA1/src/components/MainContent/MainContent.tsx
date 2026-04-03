/**
 * MainContent Component
 *
 * The main content area of the Spotify clone that displays:
 * - Trending songs section
 * - Popular artists section
 * - Featured playlists section
 *
 * This component:
 * - Imports and uses reusable card components
 * - Maps over data arrays to render content
 * - Maintains responsive layout
 *
 * This demonstrates:
 * - Component composition
 * - Array mapping in JSX
 * - Importing/using shared components
 */

import type React from 'react';
import ContentSection from '../Section/ContentSection';
import SongCard from '../Cards/SongCard';
import ArtistCard from '../Cards/ArtistCard';
import { trendingSongs, popularArtists, featuredPlaylists } from '../../data/mockData';

/**
 * MainContent Component
 * Renders all content sections with their respective cards
 */
const MainContent: React.FC = () => {
  return (
    <main className="flex-1 px-4 md:px-8 py-6 pb-32 overflow-y-auto bg-gradient-to-b from-spotify-card-hover to-spotify-dark">
      {/*
       * Trending Songs Section
       * Displays currently popular tracks in a grid layout
       */}
      <ContentSection
        title="Trending songs"
        showAllLink="/trending"
      >
        {trendingSongs.map((song) => (
          <SongCard
            key={song.id}
            id={song.id}
            title={song.title}
            artist={song.artist}
            imageUrl={song.imageUrl}
            explicit={song.explicit}
            onClick={() => console.log(`Selected song: ${song.title}`)}
          />
        ))}
      </ContentSection>

      {/*
       * Popular Artists Section
       * Features artists with circular profile images
       */}
      <ContentSection
        title="Popular artists"
        showAllLink="/artists"
      >
        {popularArtists.map((artist) => (
          <ArtistCard
            key={artist.id}
            id={artist.id}
            name={artist.name}
            imageUrl={artist.imageUrl}
            type={artist.type}
            onClick={() => console.log(`Selected artist: ${artist.name}`)}
          />
        ))}
      </ContentSection>

      {/*
       * Featured Playlists Section
       * Curated playlists displayed as song cards
       */}
      <ContentSection
        title="Featured playlists"
        showAllLink="/playlists"
      >
        {featuredPlaylists.map((playlist) => (
          <SongCard
            key={playlist.id}
            id={playlist.id}
            title={playlist.title}
            artist={playlist.description}
            imageUrl={playlist.imageUrl}
            onClick={() => console.log(`Selected playlist: ${playlist.title}`)}
          />
        ))}
      </ContentSection>
    </main>
  );
};

export default MainContent;
