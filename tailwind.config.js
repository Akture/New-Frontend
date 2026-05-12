/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        onyx: "#010101",
        marble: "#FFFFFF",
        ember: "#BD2026",
        emerald: "#00A693",
        sunset: "#FF6F3C",
        slate: "#5A7684",
      },
      fontFamily: {
        heading: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};