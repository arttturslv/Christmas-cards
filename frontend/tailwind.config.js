/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./App.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      fontFamily: {
        'sans': 'Mountains of Christmas, serif',
      },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'dark-green': '#003E1F',
      'dark-red': '#990913',
      'nude': '#F4E7DE',
      'dark-blue': '#172329',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },  
    extend: {
      boxShadow: {
        '3xl': '0 5px 5px 0px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}

