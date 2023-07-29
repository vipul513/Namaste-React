/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'yellow-light': 'rgb(228, 182, 98)',
        'cadetblue': 'rgb(95, 158, 160)'
      },
    },
  },
  plugins: [],
}

