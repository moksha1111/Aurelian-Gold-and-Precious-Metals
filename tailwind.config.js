/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold:  { DEFAULT: '#C8952A', light: '#E8B84B', pale: '#FBF3E0', dim: '#8A6520' },
        dark:  { DEFAULT: '#080808', card: '#101010', surface: '#181818', border: '#252525' },
        ash:   { DEFAULT: '#D0D0D0', dim: '#7A7A7A' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Inter', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 0 40px rgba(200,149,42,0.18)',
        card: '0 8px 48px rgba(0,0,0,0.7)',
      },
    },
  },
  plugins: [],
};
