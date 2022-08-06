/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      background: '#0D090A',
      primary: '#EAF2EF',
      secondary: '#D9F679',
    },
    extend: {},
  },
  plugins: [],
};
