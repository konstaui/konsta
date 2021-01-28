const tailwindMobile = require('./src/config');

module.exports = tailwindMobile({
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
});
