/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        onyx: "#010101",
        marble: "#FFFFFF",
        ember: {
          DEFAULT: "#BD2026",
          dark: "#a61c22",
        },
        emerald: "#00A693",
        sunset: "#FF6F3C",
        slate: "#5A7684",
        surface: "#111827",
        deep: "#0F172A",
        panel: "#060A14",
        input: "#F4F6F9",
      },
      fontFamily: {
        heading: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'ember-sm': '0 0 15px rgba(189,32,38,0.4)',
        'ember-md': '0 10px 20px -8px rgba(189,32,38,0.6)',
        'ember-lg': '0 18px 35px -20px rgba(189,32,38,0.8)',
      },
      borderRadius: {
        form: '14px',
      },
    },
  },
  plugins: [],
};
