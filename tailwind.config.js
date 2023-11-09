/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: {
      'white': '#FCF4E7',
      'black': '#1E1E1E',
      'primary': '#DA7B36',
      'beige': 'F9EED8',
      'secondary': '#88159B',
      'terciary': '#F3AD9B'
    },
    extend: {},
  },
  plugins: [],
}

