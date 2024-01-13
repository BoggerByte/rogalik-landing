/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('postcss-nested'),
    require('@tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer')
  ],
};
