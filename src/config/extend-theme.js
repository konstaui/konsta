const iosColors = require('./ios-colors.js');
const mdColors = require('./md-colors.js');

const extendTheme = (konstaConfig) => {
  const themeColors = {};
  Object.keys(konstaConfig.colors).forEach((key) => {
    themeColors[key] = `rgb(var(--k-color-${key}) / <alpha-value>)`;
  });
  const mdColorsResult = mdColors(konstaConfig.colors.primary);
  Object.keys(mdColorsResult).forEach((key) => {
    mdColorsResult[key] = `rgb(var(--k-color-${key}) / <alpha-value>)`;
  });
  const iosColorsResult = iosColors(konstaConfig.colors.primary);
  Object.keys(iosColorsResult).forEach((key) => {
    iosColorsResult[key] = `rgb(var(--k-color-${key}) / <alpha-value>)`;
  });
  // COLORS
  const colors = {
    ...themeColors,
    ...mdColorsResult,
    'ios-light-surface': '#efeff4',
    'ios-dark-surface': '#000',
    'ios-light-surface-1': '#fff',
    'ios-dark-surface-1': '#1c1c1d',
    'ios-light-surface-2': '#f7f7f8',
    'ios-dark-surface-2': '#121212',
    'ios-light-surface-3': '#fff',
    'ios-dark-surface-3': '#1c1c1d',
    'ios-light-surface-variant': '#f4f4f4',
    'ios-dark-surface-variant': '#232323',
    ...iosColorsResult,
  };

  return {
    colors,
  };
};

module.exports = extendTheme;
