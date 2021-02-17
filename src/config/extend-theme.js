const extendTheme = () => {
  // SIZES
  const sizesValues = [0.25, 4.5, 5.5, 12.5, 13];
  const minSizesValues = Array.from({ length: 12 }).map(
    (el, index) => index + 1
  );

  const width = {
    '1em': '1em',
  };
  const height = {
    '1em': '1em',
  };
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

  const fontSize = {
    'icon-ios': '28px',
    'icon-material': '24px',
  };

  const inset = {
    15: `${15 / 4}rem`,
    18: `${18 / 4}rem`,
  };

  return {
    fontSize,
    inset,
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
