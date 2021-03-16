const plugin = require('tailwindcss/plugin');

module.exports = () =>
  plugin(({ addUtilities }) => {
    addUtilities({
      '.translucent': {
        '--tw-bg-opacity': '0.8 !important',
        '-webkit-backdrop-filter': 'saturate(180%) blur(20px)',
        'backdrop-filter': 'saturate(180%) blur(20px)',
      },
    });
  });
