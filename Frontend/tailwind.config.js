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
        cardCol: "#e8dcd3",
        buttonCol: "#6D7C67",
        background: "#fffaf6"
      },
      fontFamily:{
        custom: ['"Roboto"', "sans-serif"],
      }
    },
  },
  plugins: [],
}

