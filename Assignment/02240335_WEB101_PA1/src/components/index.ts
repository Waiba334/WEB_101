/**
 * Component Exports
 *
 * This index file provides a centralized export point for all components.
 * Using a barrel export pattern makes importing components cleaner:
 *
 * Instead of:
 *   import Sidebar from './components/Sidebar/Sidebar';
 *   import Header from './components/Header/Header';
 *
 * We can write:
 *   import { Sidebar, Header } from './components';
 *
 * This improves code organization and maintainability.
 */

// Layout Components
export { default as Sidebar } from './Sidebar/Sidebar';
export { default as Header } from './Header/Header';
export { default as MainContent } from './MainContent/MainContent';
export { default as PreviewBanner } from './PreviewBanner/PreviewBanner';

// Card Components (Reusable)
export { default as SongCard } from './Cards/SongCard';
export { default as ArtistCard } from './Cards/ArtistCard';

// Section Components
export { default as ContentSection } from './Section/ContentSection';

// Icon Components
export * from './icons/Icons';
