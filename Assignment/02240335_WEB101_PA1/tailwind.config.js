/**
 * Tailwind CSS Configuration for Spotify Clone
 *
 * This configuration extends Tailwind's default theme with Spotify's
 * brand colors and custom design tokens for consistent styling.
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /*
       * Custom Color Palette
       * Based on Spotify's actual color scheme for authentic recreation
       */
      colors: {
        spotify: {
          green: '#1DB954',        // Primary brand accent
          'green-dark': '#1aa34a', // Hover state for green elements
          black: '#000000',        // Sidebar background
          dark: '#121212',         // Main app background
          card: '#181818',         // Card/panel backgrounds
          'card-hover': '#282828', // Hover state for cards
          'light-gray': '#b3b3b3', // Secondary/muted text
          border: '#282828',       // Dividers and borders
        }
      },
      /*
       * Font Family Configuration
       * Using Outfit as a close match to Spotify's custom font
       */
      fontFamily: {
        spotify: ['Outfit', 'system-ui', 'sans-serif'],
      },
      /*
       * Custom Spacing
       * Additional spacing values for precise Spotify-like layouts
       */
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      /*
       * Border Radius
       * Spotify uses specific rounded corners throughout the UI
       */
      borderRadius: {
        'spotify': '4px',
        'spotify-lg': '8px',
      },
      /*
       * Animation Configuration
       * Custom animations for smooth UI interactions
       */
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
