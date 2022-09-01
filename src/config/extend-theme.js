const iosColors = require('./ios-colors.js');
const mdColors = require('./md-colors.js');

const extendTheme = (konstaConfig) => {
  // SIZES
  const sizesValues = [
    0.25, 0.75, 4.5, 4.75, 5.5, 5.75, 6.5, 7.5, 12.5, 13, 15, 18, 160,
  ];
  const minSizesValues = Array.from({ length: 12 }).map(
    (el, index) => index + 1
  );

  const spacing = {
    '1em': '1em',
  };
  const minWidth = {};
  const minHeight = {};

  sizesValues.forEach((size) => {
    spacing[size] = `${size / 4}rem`;
  });

  minSizesValues.forEach((size) => {
    minWidth[size] = `${size / 4}rem`;
    minHeight[size] = `${size / 4}rem`;
  });

  // OPACITY
  const opacityValues = Array.from({ length: 19 }).map(
    (el, index) => (index + 1) * 5
  );

  const opacity = {};
  const backgroundOpacity = {};
  const textOpacity = {};

  opacityValues.forEach((value) => {
    // eslint-disable-next-line
    if (value < 10) value = `0${value}`;
    opacity[value] = `0.${value}`;
    backgroundOpacity[value] = `0.${value}`;
    textOpacity[value] = `0.${value}`;
  });

  // TRANSITION
  const durationValues = [0, 400];
  const transitionDuration = {};
  durationValues.forEach((value) => {
    transitionDuration[value] = `${value}ms`;
  });

  const transitionProperty = {
    'transform-opacity': 'transform, opacity',
  };

  // FONT SIZE
  const fontSize = {
    '2xs': '0.625rem',
    'icon-ios': '28px',
    'icon-material': '24px',
  };

  // SCALE
  const scale = {
    133: `${16 / 12}`,
  };

  // BOX SHADOW
  const boxShadow = {
    'ios-toggle': '0 2px 4px rgba(0,0,0,.3)',
  };

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

  const transitionTimingFunction = {
    'material-in': 'cubic-bezier(0,0.8,0.34,1)',
    'material-in-popup': 'cubic-bezier(0,1,0.2,1)',
  };

  return {
    fontSize,
    spacing,
    minWidth,
    minHeight,
    backgroundOpacity,
    opacity,
    textOpacity,
    transitionDuration,
    transitionProperty,
    scale,
    boxShadow,
    colors,
    transitionTimingFunction,
  };
};

module.exports = extendTheme;
