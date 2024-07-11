/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm : ".6rem",
      md: "1.4rem",
      lg : ["3.8rem", 1],
    },


    screens: {
      'xs': '320px',
      's': '600px',
      'm': '768px',
      'l': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'yo': {'min': '0', 'max': '767px'},
      ...defaultTheme.screens,
    },

    
    extend: {
      fontFamily: {
        'sans': ["'Poppins', sans-serif;"],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 20s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(15%)' },
          to: { transform: 'translateX(-100%)' },
        }
      },            

      colors: {
        primaryOrange:'#EB5E28',
        primaryDarkBrown: '#252422',
        primaryLightBiege:'#FFFCF2',
        secondaryPink:'#E75A7C',
        secondaryYellow:'#FFCC37',
      },

      spacing:{
        0: "0",
        1: "0.4rem",
        2: "0.8rem",
        3: "1.2rem",
        4: "1.6rem",
        5: "2rem",
        6: "2.4rem",
        7: "2.8rem",
        8: "3.2rem",
        9: "3.6rem",
        10: "4rem",
        11: "4.4rem",
        12: "4.8rem"
      },

    },
  },
    
  plugins: [],
  }



