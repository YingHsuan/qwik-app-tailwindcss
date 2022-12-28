/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        'ci-background-gray': '#f3f5fa',
      }
    },
  },
  plugins: [],
}
