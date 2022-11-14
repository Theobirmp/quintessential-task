/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        textBlue: '#474EBB',
        textBlur: '#C4C4C4',
        textBlackish: '#282121',
        textWhiteBlur: '#C4C4C4',
        bgBlue: '#04347F',
        bgDarkBlue: '#072C5E',
        bgPage: '#E5E5E5',
        error: '#dc2626',
        bgPageDark: '#1f2937',
      },
    },
  },
  plugins: [],
};
