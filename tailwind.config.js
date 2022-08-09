/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#00bcd4",
          light: "#b3e5fc",
          dark: "#00acc1",
          contrast: "#ffffff",
        },
      }
    },
  },
  plugins: [],
}
