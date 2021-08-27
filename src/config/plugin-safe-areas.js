const plugin = require('tailwindcss/plugin');

module.exports = () =>
  plugin(({ addUtilities, addBase, theme }) => {
    const base = {
      ':root': {
        '--twm-safe-area-left': '0px',
        '--twm-safe-area-right': '0px',
        '--twm-safe-area-top': '0px',
        '--twm-safe-area-bottom': '0px',
      },

      '@supports (left: env(safe-area-inset-left))': {
        '.safe-areas': {
          '--twm-safe-area-left': 'env(safe-area-inset-left)',
          '--twm-safe-area-right': 'env(safe-area-inset-right)',
          '--twm-safe-area-top': 'env(safe-area-inset-top)',
          '--twm-safe-area-bottom': 'env(safe-area-inset-bottom)',
        },
        '.no-safe-areas': {
          '--twm-safe-area-left': '0px',
          '--twm-safe-area-right': '0px',
          '--twm-safe-area-top': '0px',
          '--twm-safe-area-bottom': '0px',
        },
        '.no-safe-areas-top': {
          '--twm-safe-area-top': '0px',
        },
        '.no-safe-areas-right': {
          '--twm-safe-area-right': '0px',
        },
        '.no-safe-areas-bottom': {
          '--twm-safe-area-bottom': '0px',
        },
        '.no-safe-areas-left': {
          '--twm-safe-area-left': '0px',
        },
      },
    };
    const safe = {};
    const spacing = theme('spacing');
    ['top', 'right', 'bottom', 'left'].forEach((side) => {
      const first = side[0];
      const upper = `${side[0].toUpperCase()}${side.slice(1)}`;

      safe[`.p${first}-safe`] = {
        [`padding${upper}`]: `var(--twm-safe-area-${side})`,
      };
      safe[`.m${first}-safe`] = {
        [`margin${upper}`]: `var(--twm-safe-area-${side})`,
      };
      safe[`.${side}-safe`] = {
        [side]: `var(--twm-safe-area-${side})`,
      };

      Object.keys(spacing).forEach((key) => {
        const value = spacing[key];
        safe[`.p${first}-${key}-safe`] = {
          [`padding${upper}`]: `calc(var(--twm-safe-area-${side}) + ${value})`,
        };
        safe[`.m${first}-${key}-safe`] = {
          [`margin${upper}`]: `calc(var(--twm-safe-area-${side}) + ${value})`,
        };
        safe[`.${side}-${key}-safe`] = {
          [side]: `calc(var(--twm-safe-area-${side}) + ${value})`,
        };
      });
    });
    addBase(base);
    addUtilities(safe);
  });
