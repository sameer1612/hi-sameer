/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        primary: '#025a4e',
        secondary: '#547e78',
        surface: '#e2e2e2',
        'dark-teal': '#4c6763',
      },
    },
  },
  // plugins: [require('prettier-plugin-tailwindcss')],
};
