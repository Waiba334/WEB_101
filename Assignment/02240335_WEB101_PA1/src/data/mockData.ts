/**
 * Mock Data for Spotify Clone
 *
 * This file contains sample data that simulates what would normally
 * come from Spotify's API. Using mock data allows us to develop and
 * test the UI without needing actual API access.
 *
 * Data Structure:
 * - Songs: Trending music tracks with album artwork
 * - Artists: Popular artists with profile images
 * - Playlists: Curated playlists and charts
 */

// Type definitions for type safety and code documentation
export interface Song {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  explicit?: boolean; // Some songs have explicit content markers
}

export interface Artist {
  id: string;
  name: string;
  imageUrl: string;
  type: 'Artist'; // All items in this array are artists
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

/**
 * Trending Songs Data
 * These represent currently popular tracks on Spotify
 * Images are from Unsplash to avoid copyright issues
 */
export const trendingSongs: Song[] = [
  {
    id: '1',
    title: 'Midnight Dreams',
    artist: 'Luna Nova',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    explicit: true,
  },
  {
    id: '2',
    title: 'Electric Pulse',
    artist: 'Neon Waves',
    imageUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop',
  },
  {
    id: '3',
    title: 'Golden Hour',
    artist: 'Sunset Collective',
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
  },
  {
    id: '4',
    title: 'City Lights',
    artist: 'Urban Echo',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    explicit: true,
  },
  {
    id: '5',
    title: 'Ocean Breeze',
    artist: 'Coastal Dreams',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop',
  },
  {
    id: '6',
    title: 'Mountain High',
    artist: 'Alpine Sounds',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop',
  },
  {
    id: '7',
    title: 'Starlight',
    artist: 'Cosmos Band',
    imageUrl: 'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=300&h=300&fit=crop',
  },
  {
    id: '8',
    title: 'Thunder Road',
    artist: 'Storm Riders',
    imageUrl: 'https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=300&h=300&fit=crop',
    explicit: true,
  },
];

/**
 * Popular Artists Data
 * Featured artists with circular profile images
 * Using portrait-oriented photos for realistic appearance
 */
export const popularArtists: Artist[] = [
  {
    id: '1',
    name: 'Luna Nova',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop',
    type: 'Artist',
  },
  {
    id: '2',
    name: 'Marcus Reed',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    type: 'Artist',
  },
  {
    id: '3',
    name: 'Elena Storm',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    type: 'Artist',
  },
  {
    id: '4',
    name: 'Jay Walker',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
    type: 'Artist',
  },
  {
    id: '5',
    name: 'Aria Blue',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    type: 'Artist',
  },
  {
    id: '6',
    name: 'Drake Stone',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    type: 'Artist',
  },
  {
    id: '7',
    name: 'Mia Rose',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop',
    type: 'Artist',
  },
  {
    id: '8',
    name: 'Chris Martin',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop',
    type: 'Artist',
  },
];

/**
 * Featured Playlists Data
 * Curated playlists similar to Spotify's editorial playlists
 */
export const featuredPlaylists: Playlist[] = [
  {
    id: '1',
    title: 'Top Songs - Global',
    description: 'Your weekly update of the most played tracks right now.',
    imageUrl: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=300&h=300&fit=crop',
  },
  {
    id: '2',
    title: 'Chill Vibes',
    description: 'Kick back with these relaxing tunes.',
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
  },
  {
    id: '3',
    title: 'Workout Energy',
    description: 'High-energy tracks to fuel your workout.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
  },
  {
    id: '4',
    title: 'Focus Flow',
    description: 'Concentration-boosting ambient music.',
    imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300&h=300&fit=crop',
  },
  {
    id: '5',
    title: 'Party Mix',
    description: 'Turn up the volume with these party hits.',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=300&fit=crop',
  },
  {
    id: '6',
    title: 'Acoustic Sessions',
    description: 'Stripped-down versions of your favorites.',
    imageUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300&h=300&fit=crop',
  },
];

/**
 * Navigation Links for Footer
 * Legal and informational links displayed in sidebar footer
 */
export const footerLinks = [
  { label: 'Legal', href: '#' },
  { label: 'Safety & Privacy Center', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Cookies', href: '#' },
  { label: 'About Ads', href: '#' },
  { label: 'Accessibility', href: '#' },
];
