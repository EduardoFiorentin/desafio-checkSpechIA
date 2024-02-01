/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue':'#002256',
        'purple': "#4A0FF3",
        'lightpurple': "#7D63C6",
        'lightblue': "#0769FF",
        'darkgrey': "#1E1E1E",
        'cian': '#00DDFF'
      },
      backgroundImage: {
        'header':"url('./src/assets/img/header-background.png')"
      }
    },
    fontFamily: {
      'imprima': ['Imprima', 'sans-serif']
    }
  },
  plugins: [],
}

