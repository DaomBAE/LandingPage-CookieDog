/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sansation': ['Sansation', 'sans-serif'],
        'hero': ['Hero', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'matahari': ['"Matahari Extended"', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
};