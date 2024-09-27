/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#26f0b0',
      },
      backgroundImage: {
        banner: `url('../public/images/banner.webp')`,
      },
      fontFamily: {
        jalnan: ['yg-jalnan'],
      },
    },
  },
  plugins: [],
};
