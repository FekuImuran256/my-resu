/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#2c3e50',
        'secondary': '#4a6491',
      },
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
      }
    },
  },
  plugins: [],
}