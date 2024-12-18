/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#f1f5f9",
        secondary: "#FFF",
        textSec: "#859c7c",
        textPri: "#474747",
      },
      fontFamily:{
        custom: ['"Roboto"', "sans-serif"],
      }
    },
  },
  plugins: [],
}

