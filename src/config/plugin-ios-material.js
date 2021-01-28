const plugin = require('tailwindcss/plugin');

module.exports = () =>
  plugin(({ addVariant, e }) => {
    addVariant('material', ({ modifySelectors, separator }) => {
      modifySelectors(({ className, selector }) => {
        if (selector.includes(':after')) {
          return `.material .${e(`material${separator}${className}`)}::after`;
        }
        if (selector.includes(':before')) {
          return `.material .${e(`material${separator}${className}`)}::before`;
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
  });
