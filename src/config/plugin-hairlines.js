const plugin = require('tailwindcss/plugin');

module.exports = () =>
  plugin(({ addUtilities }) => {
    const hairlines = {
      '.no-hairlines': {
        '--hairline-color': 'transparent',
      },
      '.no-hairline': {
        '--hairline-color': 'transparent',
      },
      '.active-no-hairline': {
        '&:active': {
          '--hairline-color': 'transparent',
        },
      },
      '.active-no-hairlines': {
        '&:active': {
          '--hairline-color': 'transparent',
        },
      },
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
          content: '""',
        },
      },
      '.no-hairline-t': {
        '&::before': {
          content: '""',
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
          content: '""',
        },
      },
      '.no-hairline-l': {
        '&::before': {
          content: '""',
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
          content: '""',
        },
      },
      '.no-hairline-b': {
        '&::after': {
          content: '""',
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
          content: '""',
        },
      },
      '.no-hairline-r': {
        '&::after': {
          content: '""',
        },
      },
    };
    addUtilities(hairlines, [
      'last',
      'first',
      'ios',
      'material',
      'last-child',
      'first-child',
    ]);
  });
