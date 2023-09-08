/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
      },
      colors: {
        TextColor: '#F16262',
        bodyColor: "#2B2E36",
        componentColor: '#32363F',
        NormalTextColor: '#8CB8C4',

      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require("daisyui")],
}
