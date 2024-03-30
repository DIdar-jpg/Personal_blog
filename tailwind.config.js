/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      'Roboto': ['Roboto']
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        'DEFAULT': '1rem',
        'sm': '2rem',
        'lg': '4rem',
        'xl': '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'header-black': '#0D0D0D',
        'coal': '#202020',
        'bg-color': '#161616',
        'grey-1': '#D2D2D2',
        'grey-2': '#828282',
        'main-blue': '#3137C9',
      },
      // safelist: [
      //   {
      //     pattern: /bg-slpic(0..9)/,
      //  },
      // ], 
      backgroundImage: {
        'sl_pic_1': "url('/src/images/slider_pics/sl_3.png')",
        'sl_pic_2': "url('/src/images/slider_pics/sl_4.png')",
      },
    },
  },
  plugins: [],
}

