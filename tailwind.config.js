const tailwindMobile = require('tailwind-mobile/config');

module.exports = tailwindMobile({
  mode: 'jit',
  purge: ['./kitchen-sink/react/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  variants: {
    extend: {
      width: ['ios', 'material'],
      height: ['ios', 'material'],
      inset: ['ios', 'material'],
    },
  },
});
