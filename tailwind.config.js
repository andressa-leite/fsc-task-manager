/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: {
           stone: '#0c0a09',
          primary: '#00ADB5',
          'dark-grey': '#818181',
          'text-grey': '#9A9C9F',
          'light-grey': '#EEEEEE',
          border: '#F4F4F5',
          white: '#FFFFFF',
          background: '#F8F8F8',
          process: '#FFAA04',
          danger: '#EF4444',
        },
      },
    },
  },
  plugins: [],
};
