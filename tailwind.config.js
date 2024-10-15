/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary':"#FB5722",
        'secondary':"#0C0DB5",
        'red':"#FF0000",
        'green':"#5EAA22",
        'gulabi':"#FC17EC",
        'skyBlue':"#33B9EF",
        'orange':"#FF9100",
        'lightGray':"#F8F8F8",
        'darkGray':"#D9D9D933",
      },

      backgroundImage:{
        'button-gradient': 'linear-gradient(90deg,  #F9F8A5  0%, #DDA80E 100%)',
        'button-gradient2': 'linear-gradient(90deg, #DDA80E    0%, #F9F8A5 100%)',
        'button-level':'linear-gradient(180deg, #1E1E1E 0%, #00000000 50%, #F3E78533 100%)',
        'gradient': 'linear-gradient(90.37deg, rgba(255, 255, 255, 0.52) 10.97%, rgba(243, 243, 243, 0.29) 100%)'
        
      
      },

      
    },
  },
  plugins: [],
}

