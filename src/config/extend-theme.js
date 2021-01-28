const extendTheme = () => {
  // SIZES
  const sizesValues = [0.25, 4.5, 5.5, 13];
  const minSizesValues = Array.from({ length: 10 }).map(
    (el, index) => index + 1
  );

  const width = {};
  const height = {};
  sizesValues.forEach((size) => {
    width[size] = `${size / 4}rem`;
    height[size] = `${size / 4}rem`;
  });

  const minWidth = {};
  const minHeight = {};
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
    opacity[value] = `0.${value}`;
    backgroundOpacity[value] = `0.${value}`;
    textOpacity[value] = `0.${value}`;
  });

  // TRANSITION
  const durationValues = [0];
  const transitionDuration = {};
  durationValues.forEach((value) => {
    transitionDuration[value] = `${value}ms`;
  });

  return {
    width,
    height,
    minWidth,
    minHeight,
    backgroundOpacity,
    opacity,
    textOpacity,
    transitionDuration,
    colors: {
      'page-ios': '#efeff4',
      'page-material': '#fff',
      primary: {
        light: '#298fff',
        DEFAULT: '#007aff',
        dark: '#0066d6',
      },
    },
  };
};

module.exports = extendTheme;
