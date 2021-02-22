const plugin = require('tailwindcss/plugin');

module.exports = () =>
  plugin(({ addUtilities, theme }) => {
    const themeColors = theme('colors');
    const themeDurations = theme('transitionDuration');

    const hairlineColors = {};
    const hairlineDurations = {};

    Object.keys(themeColors).forEach((key) => {
      const value = themeColors[key];
      if (typeof value === 'string') {
        hairlineColors[`.hairline-${key}`] = {
          '--hairline-color': value,
        };
      } else {
        Object.keys(value).forEach((subKey) => {
          const subValue = value[subKey];
          if (subKey === 'DEFAULT') {
            hairlineColors[`.hairline-${key}`] = {
              '--hairline-color': subValue,
            };
          } else {
            hairlineColors[`.hairline-${key}-${subKey}`] = {
              '--hairline-color': subValue,
            };
          }
        });
      }
    });
    Object.keys(themeDurations).forEach((key) => {
      if (key === 'DEFAULT') return;
      hairlineDurations[`.hairline-duration-${key}`] = {
        '--hairline-transition-duration': themeDurations[key],
      };
    });

    const hairlines = {
      '.hairline-t': {
        '&::before': {
          position: 'absolute',
          left: '0',
          top: '0',
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--hairline-color, rgba(0,0,0,0.2))',
          transformOrigin: 'center top',
          transform: 'scaleY(calc(1 / var(--device-pixel-ratio, 1)))',
          transitionDuration: 'var(--hairline-transition-duration)',
          content: '""',
        },
      },
      '.hairline-t-none': {
        '&::before': {
          display: 'none',
        },
        ':not(.hairline-l):before': {
          display: 'none',
        },
      },
      '.hairline-t-scale': {
        '&::before': {
          transform: 'scaleY(2)',
        },
      },
      '.hairline-l': {
        '&::before': {
          position: 'absolute',
          left: '0',
          top: '0',
          width: '1px',
          height: '100%',
          backgroundColor: 'var(--hairline-color, rgba(0,0,0,0.2))',
          transformOrigin: 'left center',
          transform: 'scaleX(calc(1 / var(--device-pixel-ratio, 1)))',
          transitionDuration: 'var(--hairline-transition-duration)',
          content: '""',
        },
      },
      '.hairline-l-none': {
        '&::before': {
          display: 'none',
        },
        ':not(.hairline-l):before': {
          display: 'none',
        },
      },

      '.hairline-l-scale': {
        '&::before': {
          transform: 'scaleX(2)',
        },
      },
      '.hairline-b': {
        '&::after': {
          position: 'absolute',
          left: '0',
          bottom: '0',
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--hairline-color, rgba(0,0,0,0.2))',
          transformOrigin: 'center bottom',
          transform: 'scaleY(calc(1 / var(--device-pixel-ratio, 1)))',
          transitionDuration: 'var(--hairline-transition-duration)',
          content: '""',
        },
      },
      '.hairline-b-scale': {
        '&::after': {
          transform: 'scaleY(2)',
        },
      },
      '.hairline-b-none': {
        '&::after': {
          display: 'none',
        },
        ':not(.hairline-b):after': {
          display: 'none',
        },
        '> * > *:after': {
          display: 'none',
        },
      },
      '.hairline-r': {
        '&::after': {
          position: 'absolute',
          top: '0',
          right: '0',
          width: '1px',
          height: '100%',
          backgroundColor: 'var(--hairline-color, rgba(0,0,0,0.2))',
          transformOrigin: 'right center',
          transform: 'scaleX(calc(1 / var(--device-pixel-ratio, 1)))',
          transitionDuration: 'var(--hairline-transition-duration)',
          content: '""',
        },
      },
      '.hairline-r-none': {
        '&::after': {
          display: 'none',
        },
        ':not(.hairline-r):after': {
          display: 'none',
        },
      },
      '.hairline-r-scale': {
        '&::after': {
          transform: 'scaleX(2)',
        },
      },
    };

    addUtilities(hairlineColors, ['active']);

    addUtilities(hairlineDurations);

    addUtilities(hairlines, ['last-child']);
  });
