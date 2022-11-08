/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    screens:{

      sl: "320",

      sm: "280px",


      md: "768px",


      lg: "1024px",


      xl: "1280px",


      '2xl': '1536px'

    },
    extend: {
      

      colors: {
        'bluelite': 'rgba(43, 51, 224, 0.22)'
      },

      fontFamily: {
        Metamorphous: 'Metamorphous',
        Poppins: 'Poppins'
      },
      
    },
  },
  plugins: [],
}
