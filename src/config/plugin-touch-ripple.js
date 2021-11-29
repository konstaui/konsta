const plugin = require('tailwindcss/plugin');
const hexToRgb = require('./hex-to-rgb.js');

module.exports = () =>
  plugin(({ addUtilities, addBase, theme }) => {
    addBase({
      ':root': {
        '--k-touch-ripple-black': 'rgba(0, 0, 0, 0.1)',
        '--k-touch-ripple-white': 'rgba(255, 255, 255, 0.15)',
        '--k-touch-ripple-color': 'var(--k-touch-ripple-black)',
      },
      '.k-touch-ripple-wave': {
        left: '0',
        top: '0',
        position: 'absolute !important',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: '-1',
        padding: '0',
        margin: '0',
        fontSize: '0',
        transform: 'translate3d(0px, 0px, 0) scale(0)',
        backgroundColor: 'var(--k-touch-ripple-color)',
        animation: 'k-touch-ripple-in 200ms forwards',
        display: 'block !important',
        '&.k-touch-ripple-wave-out': {
          transform: 'var(--k-ripple-transform)',
          animation: 'k-touch-ripple-out 300ms forwards',
        },
      },
      '@keyframes k-touch-ripple-in': {
        from: {
          transform: 'translate3d(0px, 0px, 0) scale(0)',
        },
        to: {
          transform: 'var(--k-ripple-transform)',
        },
      },
      '@keyframes k-touch-ripple-out': {
        from: {
          opacity: '1',
        },
        to: {
          opacity: '0',
        },
      },
    });
    const themeColors = theme('colors');

    const touchRippleColors = {
      '.touch-ripple-current': {
        '--k-touch-ripple-color': 'currentColor',
      },
    };

    Object.keys(themeColors).forEach((key) => {
      let value = themeColors[key];
      if (typeof value === 'string') {
        if (value[0] === '#') {
          const [r, g, b] = hexToRgb(value);
          value = `rgba(${r}, ${g}, ${b}, 0.25)`;
        }
        touchRippleColors[`.touch-ripple-${key}`] = {
          '--k-touch-ripple-color': value,
        };
      } else {
        Object.keys(value).forEach((subKey) => {
          let subValue = value[subKey];
          if (subValue[0] === '#') {
            const [r, g, b] = hexToRgb(subValue);
            subValue = `rgba(${r}, ${g}, ${b}, 0.25)`;
          }
          if (subKey === 'DEFAULT') {
            touchRippleColors[`.touch-ripple-${key}`] = {
              '--k-touch-ripple-color': subValue,
            };
          } else {
            touchRippleColors[`.touch-ripple-${key}-${subKey}`] = {
              '--k-touch-ripple-color': subValue,
            };
          }
        });
      }
    });
    Object.assign(touchRippleColors, {
      '.touch-ripple-black': {
        '--k-touch-ripple-color': 'var(--k-touch-ripple-black)',
      },
      '.touch-ripple-white': {
        '--k-touch-ripple-color': 'var(--k-touch-ripple-white)',
      },
    });

    addUtilities(touchRippleColors, ['dark']);
  });
