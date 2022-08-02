/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'most-dark-blue-custom': 'hsl(217, 54%, 11%)',
      'dark-blue-custom': 'hsl(216, 50%, 16%)',
      'blue-custom': 'rgb(134 169 211)',
      'white-custom': 'hsl(0, 0%, 100%)',
      'green-custom': 'rgb(8 243 241)'
    }
  },
  plugins: [],
}
