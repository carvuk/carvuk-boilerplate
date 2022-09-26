/** @type {import('tailwindcss').Config} */
const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');
const aspect = require('@tailwindcss/aspect-ratio');
const scrollbar = require('tailwind-scrollbar');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [forms, aspect, scrollbar, typography],
  variants: {
    scrollbar: ['rounded'],
  },
};
