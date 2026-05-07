/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D5F4F',
          light: '#E8F0EC',
          dark: '#1F4438',
        },
        bg: '#FAFAF7',
        surface: '#FFFFFF',
        'text-primary': '#0F1419',
        'text-secondary': '#2C3239',
        'text-muted': '#5A6168',
        'text-subtle': '#9CA3AF',
        dark: '#1A202C',
        border: '#E5E5E0',
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', '"SF Mono"', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};
