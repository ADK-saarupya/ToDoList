/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        fav:"#4f4f4f",
        blueCol:"#3b71ca"
      },
      
    },
  },
  plugins: [],
}
