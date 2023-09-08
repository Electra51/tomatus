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

      }, screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      }

    },
  },
  plugins: [require('tailwind-scrollbar'), require("daisyui")],
}
