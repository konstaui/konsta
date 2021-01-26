const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        0.25: '0.0625rem',
        4.5: '1.125rem',
        5.5: '1.375rem',
      },
      height: {
        0.25: '0.0625rem',
        4.5: '1.125rem',
        5.5: '1.375rem',
      },
      minWidth: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
      },
      minHeight: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
      },
      backgroundOpacity: {
        15: '0.15',
        25: '0.25',
        35: '0.35',
        45: '0.45',
        55: '0.55',
        65: '0.65',
        75: '0.75',
        85: '0.85',
        95: '0.95',
      },
      opacity: {
        15: '0.15',
        25: '0.25',
        35: '0.35',
        45: '0.45',
        55: '0.55',
        65: '0.65',
        75: '0.75',
        85: '0.85',
        95: '0.95',
      },
      textOpacity: {
        15: '0.15',
        25: '0.25',
        35: '0.35',
        45: '0.45',
        55: '0.55',
        65: '0.65',
        75: '0.75',
        85: '0.85',
        95: '0.95',
      },
      transitionDuration: {
        0: '0ms',
      },
      colors: {
        'page-ios': '#efeff4',
        'page-material': '#fff',
        primary: {
          light: '#298fff',
          DEFAULT: '#007aff',
          dark: '#0066d6',
        },
      },
    },
  },
  variants: {
    extend: {
      accessibility: ['ios', 'material'],
      alignContent: ['ios', 'material'],
      alignItems: ['ios', 'material'],
      alignSelf: ['ios', 'material'],
      animation: ['ios', 'material'],
      appearance: ['ios', 'material'],
      backgroundAttachment: ['ios', 'material'],
      backgroundClip: ['ios', 'material'],
      backgroundColor: [
        'active',
        'ios',
        'material',
        'ios-active',
        'material-active',
      ],
      backgroundImage: ['ios', 'material'],
      backgroundOpacity: [
        'active',
        'ios',
        'material',
        'ios-active',
        'material-active',
      ],
      borderColor: ['ios', 'material'],
      borderOpacity: ['ios', 'material'],
      borderRadius: ['last', 'first', 'ios', 'material'],
      borderStyle: ['ios', 'material'],
      borderWidth: ['last', 'first', 'ios', 'material'],
      boxShadow: ['active', 'ios', 'material', 'ios-active', 'material-active'],
      boxSizing: ['ios', 'material'],
      clear: ['ios', 'material'],
      container: ['ios', 'material'],
      cursor: ['ios', 'material'],
      display: ['ios', 'material'],
      divideColor: ['ios', 'material'],
      divideOpacity: ['ios', 'material'],
      divideStyle: ['ios', 'material'],
      divideWidth: ['ios', 'material'],
      fill: ['ios', 'material'],
      flex: ['ios', 'material'],
      flexDirection: ['ios', 'material'],
      flexGrow: ['ios', 'material'],
      flexShrink: ['ios', 'material'],
      flexWrap: ['ios', 'material'],
      float: ['ios', 'material'],
      fontFamily: ['ios', 'material'],
      fontSize: ['ios', 'material'],
      fontSmoothing: ['ios', 'material'],
      fontStyle: ['ios', 'material'],
      fontVariantNumeric: ['ios', 'material'],
      fontWeight: ['ios', 'material'],
      gap: ['ios', 'material'],
      gradientColorStops: ['ios', 'material'],
      gridAutoColumns: ['ios', 'material'],
      gridAutoFlow: ['ios', 'material'],
      gridAutoRows: ['ios', 'material'],
      gridColumn: ['ios', 'material'],
      gridColumnEnd: ['ios', 'material'],
      gridColumnStart: ['ios', 'material'],
      gridRow: ['ios', 'material'],
      gridRowEnd: ['ios', 'material'],
      gridRowStart: ['ios', 'material'],
      gridTemplateColumns: ['ios', 'material'],
      gridTemplateRows: ['ios', 'material'],
      height: ['ios', 'material'],
      inset: ['ios', 'material'],
      justifyContent: ['ios', 'material'],
      justifyItems: ['ios', 'material'],
      justifySelf: ['ios', 'material'],
      letterSpacing: ['ios', 'material'],
      lineHeight: ['ios', 'material'],
      listStylePosition: ['ios', 'material'],
      listStyleType: ['ios', 'material'],
      margin: ['ios', 'material'],
      maxHeight: ['ios', 'material'],
      maxWidth: ['ios', 'material'],
      minHeight: ['ios', 'material'],
      minWidth: ['ios', 'material'],
      objectFit: ['ios', 'material'],
      objectPosition: ['ios', 'material'],
      opacity: ['active', 'ios', 'material', 'ios-active', 'material-active'],
      order: ['ios', 'material'],
      outline: ['ios', 'material'],
      overflow: ['ios', 'material'],
      overscrollBehavior: ['ios', 'material'],
      padding: ['ios', 'material'],
      placeContent: ['ios', 'material'],
      placeItems: ['ios', 'material'],
      placeSelf: ['ios', 'material'],
      placeholderColor: ['ios', 'material'],
      placeholderOpacity: ['ios', 'material'],
      pointerEvents: ['ios', 'material'],
      position: ['ios', 'material'],
      resize: ['ios', 'material'],
      ringColor: ['ios', 'material'],
      ringOffsetColor: ['ios', 'material'],
      ringOffsetWidth: ['ios', 'material'],
      ringOpacity: ['ios', 'material'],
      ringWidth: ['ios', 'material'],
      rotate: ['ios', 'material'],
      scale: ['ios', 'material'],
      skew: ['ios', 'material'],
      space: ['ios', 'material'],
      stroke: ['ios', 'material'],
      strokeWidth: ['ios', 'material'],
      tableLayout: ['ios', 'material'],
      textAlign: ['ios', 'material'],
      textColor: ['active', 'ios', 'material', 'ios-active', 'material-active'],
      textDecoration: ['ios', 'material'],
      textOpacity: ['ios', 'material'],
      textOverflow: ['ios', 'material'],
      textTransform: ['ios', 'material'],
      transform: ['ios', 'material'],
      transformOrigin: ['ios', 'material'],
      transitionDelay: ['ios', 'material'],
      transitionDuration: [
        'active',
        'ios',
        'material',
        'ios-active',
        'material-active',
      ],
      transitionProperty: ['ios', 'material'],
      transitionTimingFunction: ['ios', 'material'],
      translate: ['ios', 'material'],
      userSelect: ['ios', 'material'],
      verticalAlign: ['ios', 'material'],
      visibility: ['ios', 'material'],
      whitespace: ['ios', 'material'],
      width: ['ios', 'material'],
      wordBreak: ['ios', 'material'],
      zIndex: ['ios', 'material'],
    },
  },
  plugins: [
    plugin(function ({ addVariant, addUtilities, e }) {
      // ios: and material: variants
      addVariant('material', ({ modifySelectors, separator }) => {
        modifySelectors(({ className, selector }) => {
          if (selector.includes(':after')) {
            return `.material .${e(`material${separator}${className}`)}::after`;
          }
          if (selector.includes(':before')) {
            return `.material .${e(
              `material${separator}${className}`
            )}::before`;
          }
          return `.material .${e(`material${separator}${className}`)}`;
        });
      });
      addVariant('ios', ({ modifySelectors, separator }) => {
        modifySelectors(({ className, selector }) => {
          if (selector.includes(':after')) {
            return `.ios .${e(`ios${separator}${className}`)}::after`;
          }
          if (selector.includes(':before')) {
            return `.ios .${e(`ios${separator}${className}`)}::before`;
          }
          return `.ios .${e(`ios${separator}${className}`)}`;
        });
      });
      // ios-active: and material-active: variants
      addVariant('material-active', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.material .${e(
            `material-active${separator}${className}`
          )}:active`;
        });
      });
      addVariant('ios-active', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.ios .${e(`ios-active${separator}${className}`)}:active`;
        });
      });

      // Line Clamp
      const lineClamp = {};
      Array.from({ length: 10 }).forEach((_, index) => {
        lineClamp[`.line-clamp-${index + 1}`] = {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-line-clamp': `${index + 1}`,
          '-webkit-box-orient': 'vertical',
        };
      });

      // Hairlines
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

      // Safe Ares
      const safe = {};
      ['top', 'right', 'bottom', 'left'].forEach((side) => {
        const first = side[0];
        const upper = `${side[0].toUpperCase()}${side.slice(1)}`;
        safe[`p${first}-safe`] = {
          [`padding${upper}`]: `env(safe-area-inset-${side})`,
        };
        safe[`side-safe`] = {
          [side]: `env(safe-area-inset-${side})`,
        };
      });

      addUtilities(hairlines, ['last', 'first', 'ios', 'material']);
      addUtilities(safe);
      addUtilities(lineClamp);
    }),
  ],
};
