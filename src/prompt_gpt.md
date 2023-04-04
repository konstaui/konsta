Here is my code, it's a Unocss preset:
```js
const pluginBase = require('../src/config/plugin-base.js');

const config = (options = {}) => {
  const konstaConfig = {
    dark: options.dark || 'class',
    colors: {
      primary: '#007aff',
    },
  };
  const theme = {
    colors: konstaConfig.colors,
  }
  const rules = [
    // example of a rule
    // [/^text-(.*)$/, ([, c], { theme }) => {
    //   if (theme.colors[c])
    //     return { color: theme.colors[c] }
    // }],
    // [/^m-(\d)$/, ([, d]) => ({ margin: `${d / 4}rem` }), { layer: 'utilities' }],
    // when you omit the layer, it will be `default`
    // ['btn', { padding: '4px' }],
  ];
  const shortcuts = [
  //  // example of a shortcut
  //  // you could still have object style
  // {
  //   btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
  // },
  // // dynamic shortcuts
  // [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`],
  ];
  const variants = [
  //  // example of a variant
  //  // hover:
  // (matcher) => {
  //   if (!matcher.startsWith('hover:'))
  //     return matcher
  //   return {
  //     // slice `hover:` prefix and passed to the next variants and rules
  //     matcher: matcher.slice(6),
  //     selector: s => `${s}:hover`,
  //   }
  // }
  ];
  const preflights = [
    // example of a preflight
    // {
    //   layer: 'my-layer',
    //   getCSS: async () => (await fetch('my-style.css')).text(),
    // },
  ]
  const preprocess = (matcher) => {
    // return matcher.startsWith('prefix-')
    //   ? matcher.slice(7)
    //   : undefined // ignore
    return undefined
  }

  const plugin = (plg) => {
    // plg is a PostCSS plugin
    plg({
      addBase: (res) => {
        // res example:
    //   {
    //   '@media (min-resolution: 3dppx)': {
    //     ':root': {
    //       '--k-device-pixel-ratio': '3',
    //     },
    //   },
    //   '*': {
    //     '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
    //     '-webkit-text-size-adjust': '100%',
    //   },
    //   body: {
    //     '-webkit-font-smoothing': 'antialiased',
    //     '-moz-osx-font-smoothing': 'grayscale',
    //   },
    //   '.k-ios, .ios': {
    //     'font-family': iosFont,
    //   },
    // }
        // Create the code here
      },
      addUtilities: (res) => {
        // res is same as in addBase
        // Create the code here
      },
      addVariant(name, variantFn) {
        // variantFn is a function that takes a function as parameter
        // and returns a PostCSS Root node
        // Create the code here
      },
      config: (key) => konstaConfig[key],
    });
    return rls;
  };
  pluginBase({}, konstaConfig, plugin)

  return {
    name: 'unocss-preset-konstaui',
    theme,
    rules,
    variants,
    shortcuts,
    preflights,
  };
};

module.exports = config;
```
Here is one example of the pluginBase.js it's made for Tailwindcss, i cannot modify it:
```js
const hexToRgb = require('./hex-to-rgb.js');
const iosColors = require('./ios-colors.js');
const mdColors = require('./md-colors.js');

module.exports = (userConfig = {}, konstConfig = {}, plugin) => {
  let iosFont =
    '-apple-system, SF Pro Text, SF UI Text, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif';
  let materialFont = 'Roboto, system-ui, Noto, Helvetica, Arial, sans-serif';

  const getFonts = (ff) => {
    if (ff.ios) {
      iosFont = Array.isArray(ff.ios) ? ff.ios.join(', ') : ff.ios;
    }
    if (ff.material) {
      materialFont = Array.isArray(ff.material)
        ? ff.material.join(', ')
        : ff.material;
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
          backgroundColor: '#000',
          '--k-hairline-color': 'rgba(255, 255, 255, 0.15)',
          color: '#fff',
        },
      };
    } else if (darkMode === 'media') {
      darkProps = {
        '@media (prefers-color-scheme: dark)': {
          ':root': {
            backgroundColor: '#000',
            '--k-hairline-color': 'rgba(255, 255, 255, 0.15)',
            color: '#fff',
          },
        },
      };
    }

    const primaryColors = {
      ...iosColors(konstConfig.colors.primary),
      ...mdColors(konstConfig.colors.primary),
    };
    Object.keys(konstConfig.colors).forEach((key) => {
      primaryColors[key] = konstConfig.colors[key];
    });
    const primaryColorVars = {};

    Object.keys(primaryColors).forEach((key) => {
      primaryColorVars[`--k-color-${key}`] = hexToRgb(primaryColors[key]).join(
        ' '
      );
    });

    addBase({
      ':root': {
        '--k-device-pixel-ratio': '1',
        '--k-hairline-color': 'rgba(0, 0, 0, 0.2)',
        ...primaryColorVars,
      },
      ...darkProps,
      '@media (min-resolution: 1.25dppx)': {
        ':root': {
          '--k-device-pixel-ratio': '1.25',
        },
      },
      '@media (min-resolution: 1.5dppx)': {
        ':root': {
          '--k-device-pixel-ratio': '1.5',
        },
      },
      '@media (min-resolution: 1.75dppx)': {
        ':root': {
          '--k-device-pixel-ratio': '1.75',
        },
      },
      '@media (min-resolution: 2dppx)': {
        ':root': {
          '--k-device-pixel-ratio': '2',
        },
      },
      '@media (min-resolution: 2.25dppx)': {
        ':root': {
          '--k-device-pixel-ratio': '2.25',
        },
      },
      '@media (min-resolution: 2.5dppx)': {
        ':root': {
          '--k-device-pixel-ratio': '2.5',
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
```

Help me to write addBase, addUtilities, and addVariant functions.
My goal is to make them add to the variables rules, variants, shortcuts, preflights in Unocss format
Like that i will be able to use any tailwindcss plugin with Unocss
