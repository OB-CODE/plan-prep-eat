/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: { boxShadow: {
      'shadow': '0 15px 25px 0px rgba(0, 0, 0, 0.2)',
    }},
  },
  plugins: [],
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'checked'],
  },
};

module.exports = config;
