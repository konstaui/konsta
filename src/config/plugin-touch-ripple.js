const plugin = require('tailwindcss/plugin');
const hexToRgb = require('./hex-to-rgb');

module.exports = () =>
  plugin(({ addUtilities, addBase, theme }) => {
    addBase({
      ':root': {
        '--twm-touch-ripple-black': 'rgba(0, 0, 0, 0.1)',
        '--twm-touch-ripple-white': 'rgba(255, 255, 255, 0.15)',
        '--twm-touch-ripple-color': 'var(--twm-touch-ripple-black)',
      },
      '.twm-touch-ripple-wave': {
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
        backgroundColor: 'var(--twm-touch-ripple-color)',
        animation: 'twm-touch-ripple-in 200ms forwards',
        display: 'block !important',
        '&.twm-touch-ripple-wave-out': {
          transform: 'var(--twm-ripple-transform)',
          animation: 'twm-touch-ripple-out 300ms forwards',
        },
      },
      '@keyframes twm-touch-ripple-in': {
        from: {
          transform: 'translate3d(0px, 0px, 0) scale(0)',
        },
        to: {
          transform: 'var(--twm-ripple-transform)',
        },
      },
      '@keyframes twm-touch-ripple-out': {
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
        '--twm-touch-ripple-color': 'currentColor',
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
          '--twm-touch-ripple-color': value,
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
              '--twm-touch-ripple-color': subValue,
            };
          } else {
            touchRippleColors[`.touch-ripple-${key}-${subKey}`] = {
              '--twm-touch-ripple-color': subValue,
            };
          }
        });
      }
    });
    Object.assign(touchRippleColors, {
      '.touch-ripple-black': {
        '--twm-touch-ripple-color': 'var(--twm-touch-ripple-black)',
      },
      '.touch-ripple-white': {
        '--twm-touch-ripple-color': 'var(--twm-touch-ripple-white)',
      },
    });

    addUtilities(touchRippleColors, ['dark']);
  });
