const plugin = require('tailwindcss/plugin');

module.exports = (userConfig = {}) => {
  let iosFont =
    '-apple-system, SF Pro Text, SF UI Text, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif';
  let materialFont = 'Roboto, system-ui, Noto, Helvetica, Arial, sans-serif';

  const getFonts = (ff) => {
    if (ff.ios) {
      iosFont = Array.isArray(ff.ios) ? ff.ios.join(', ') : ff.ios;
    }
    if (ff.material) {
      materialFont = Array.isArray(ff.fontFamily.material)
        ? ff.fontFamily.material.join(', ')
        : ff.fontFamily.material;
    }
  };
  if (
    userConfig &&
    userConfig.theme &&
    userConfig.theme.extend &&
    userConfig.theme.extend.fontFamily
  ) {
    getFonts(userConfig.theme.extend.fontFamily);
  }

  if (userConfig && userConfig.theme && userConfig.theme.fontFamily) {
    getFonts(userConfig.theme.fontFamily);
  }

  return plugin(({ addBase, config }) => {
    const darkMode = config('darkMode');
    let darkProps = {};
    if (darkMode === 'class') {
      darkProps = {
        '.dark': {
          '--k-hairline-color': 'rgba(255, 255, 255, 0.15)',
          color: '#fff',
        },
      };
    } else if (darkMode === 'media') {
      darkProps = {
        '@media (prefers-color-scheme: dark)': {
          ':root': {
            '--k-hairline-color': 'rgba(255, 255, 255, 0.15)',
            color: '#fff',
          },
        },
      };
    }

    addBase({
      ':root': {
        '--k-device-pixel-ratio': '1',
        '--k-hairline-color': 'rgba(0, 0, 0, 0.2)',
      },
      ...darkProps,
      '@media (min-resolution: 2dppx)': {
        ':root': {
          '--k-device-pixel-ratio': '2',
        },
      },
      '@media (min-resolution: 3dppx)': {
        ':root': {
          '--k-device-pixel-ratio': '3',
        },
      },
      '*': {
        '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
        '-webkit-text-size-adjust': '100%',
      },
      body: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
      },
      '.k-ios, .ios': {
        'font-family': iosFont,
      },
      '.k-material, .md': {
        'font-family': materialFont,
      },
    });
  });
};
