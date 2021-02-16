const plugin = require('tailwindcss/plugin');

module.exports = () =>
  plugin(({ addVariant, e }) => {
    addVariant('last-child', ({ modifySelectors, separator }) => {
      modifySelectors(({ className, selector }) => {
        if (selector.includes(':after')) {
          return `.${e(
            `last-child${separator}${className}`
          )} > *:first-child::after`;
        }
        if (selector.includes(':before')) {
          return `.${e(
            `last-child${separator}${className}`
          )} > *:last-child::before`;
        }
        return `.${e(`last-child${separator}${className}`)} > *:last-child`;
      });
    });
    addVariant('first-child', ({ modifySelectors, separator }) => {
      modifySelectors(({ className, selector }) => {
        if (selector.includes(':after')) {
          return `.${e(
            `first-child${separator}${className}`
          )} > *:first-child::after`;
        }
        if (selector.includes(':before')) {
          return `.${e(
            `first-child${separator}${className}`
          )} > *:first-child::before`;
        }
        return `.${e(`first-child${separator}${className}`)} > *:first-child`;
      });
    });
  });
