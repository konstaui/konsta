const plugin = require('tailwindcss/plugin.js');

module.exports = () =>
  plugin(({ addVariant, e }) => {
    addVariant('dark-active', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.dark .${e(`dark-active${separator}${className}`)}:active`;
      });
    });
  });
