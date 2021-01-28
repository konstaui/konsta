const plugin = require('tailwindcss/plugin');

module.exports = () =>
  plugin(({ addUtilities }) => {
    const safe = {};
    ['top', 'right', 'bottom', 'left'].forEach((side) => {
      const first = side[0];
      const upper = `${side[0].toUpperCase()}${side.slice(1)}`;
      safe[`p${first}-safe`] = {
        [`padding${upper}`]: `env(safe-area-inset-${side})`,
      };
      safe[`${side}-safe`] = {
        [side]: `env(safe-area-inset-${side})`,
      };
    });
    addUtilities(safe);
  });
