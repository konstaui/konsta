const plugin = require('tailwindcss/plugin');

module.exports = () =>
  plugin(({ addBase }) => {
    addBase({
      ':root': {
        '--twm-device-pixel-ratio': '1',
        '--twm-hairline-color': 'rgba(0, 0, 0, 0.2)',
      },
      '.dark': {
        '--twm-hairline-color': 'rgba(255, 255, 255, 0.15)',
      },
      '@media (min-resolution: 2dppx)': {
        ':root': {
          '--twm-device-pixel-ratio': '2',
        },
      },
      '@media (min-resolution: 3dppx)': {
        ':root': {
          '--twm-device-pixel-ratio': '3',
        },
      },
      '*': {
        '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
        '-webkit-text-size-adjust': '100%',
      },
      body: {
        margin: 0,
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        color: '#000',
        '&.dark': {
          color: '#fff',
        },
        '.dark &': {
          color: '#fff',
        },
      },
      '.twm-ios': {
        'font-family':
          '-apple-system, SF Pro Text, SF UI Text, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
      },
      '.twm-material': {
        'font-family': 'Roboto, system-ui, Noto, Helvetica, Arial, sans-serif',
      },
      '.twm-ios-preloader > span': {
        animation: 'twm-ios-preloader-spin 1s steps(8, end) infinite',
      },

      '.twm-material-preloader > span': {
        animation: 'twm-material-preloader-rotate 1.4s linear infinite',
      },

      '.twm-material-preloader circle': {
        'stroke-dasharray': '100px',
        'stroke-dashoffset': '80px',
        'stroke-width': '4',
        transform: 'rotate(-90deg)',
        'transform-origin': '18px 18px',
        animation:
          'twm-material-preloader-circle-rotate 5.6s ease-in-out infinite',
      },

      '@keyframes twm-ios-preloader-spin': {
        '100%': {
          transform: 'rotate(360deg)',
        },
      },

      '@keyframes twm-material-preloader-rotate': {
        '0%': {
          transform: 'rotate(0deg)',
        },
        '100%': {
          transform: 'rotate(360deg)',
        },
      },

      '@keyframes twm-material-preloader-circle-rotate': {
        '0%': {
          transform: 'rotate(-90deg)',
          'stroke-dashoffset': '100px',
        },

        '12.5%': {
          transform: 'rotate(-90deg)',
          'stroke-dashoffset': '25px',
        },

        '25%': {
          'stroke-dashoffset': '100px',
          transform: 'rotate(180deg)',
        },

        '25.1%': {
          transform: 'rotate(-180deg)',
          'stroke-dashoffset': '100px',
        },

        '37.5%': {
          transform: 'rotate(-180deg)',
          'stroke-dashoffset': '25px',
        },

        '50%': {
          'stroke-dashoffset': '100px',
          transform: 'rotate(90deg)',
        },

        '50.1%': {
          transform: 'rotate(90deg)',
          'stroke-dashoffset': '100px',
        },

        '62.5%': {
          transform: 'rotate(90deg)',
          'stroke-dashoffset': '25px',
        },

        '75%': {
          'stroke-dashoffset': '100px',
          transform: 'rotate(360deg)',
        },

        '75.1%': {
          transform: 'rotate(0deg)',
          'stroke-dashoffset': '100px',
        },

        '87.5%': {
          transform: 'rotate(0deg)',
          'stroke-dashoffset': '25px',
        },

        '100%': {
          'stroke-dashoffset': '100px',
          transform: 'rotate(270deg)',
        },
      },
    });
  });
