/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'checked'],
  },
};

module.exports = config;
