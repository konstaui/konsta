const plugin = require('tailwindcss/plugin');

module.exports = () =>
  plugin(({ addVariant, e }) => {
    addVariant('last-child', ({ modifySelectors, separator }) => {
      modifySelectors(({ className, selector }) => {
        if (selector.includes(':after') || selector.includes(':before')) {
          return `.${e(
            `last-child${separator}${className}`
          )} > ${selector.replace(`.${className}`, '*:last-child')}`;
        }
        return `.${e(`last-child${separator}${className}`)} > *:last-child`;
      });
    });
    addVariant('first-child', ({ modifySelectors, separator }) => {
      modifySelectors(({ className, selector }) => {
        if (selector.includes(':after') || selector.includes(':before')) {
          return `.${e(
            `first-child${separator}${className}`
          )} > ${selector.replace(`.${className}`, '*:first-child')}`;
        }
        return `.${e(`first-child${separator}${className}`)} > *:first-child`;
      });
    });
  });
