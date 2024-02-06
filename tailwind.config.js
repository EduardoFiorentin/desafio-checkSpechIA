/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue':"#002256",
        'darkblue':"#041837",
        'purple': "#4A0FF3",
        'lightpurple': "#7D63C6",
        'lightblue': "#0769FF",
        'darkgrey': "#1E1E1E",
        "cian": "#00DDFF",
        'transparent': "#ffffff88",
        'inputblue': "#14438B",
        'black': "#000000"
      },
      backgroundImage: {
        'header':"url('/src/assets/img/header-background.png')"
      },
      boxShadow: {
        'button':"-2px 2px 16px 0px #7D63C666",
        'circle': "0px 0px 0px 3px #4A0FF399"
      }
    },
    fontFamily: {
      'imprima': ['Imprima', 'sans-serif']
    }
  },
  plugins: [],
}

