const extendTheme = () => {
  // SIZES
  const sizesValues = [0.25, 0.75, 4.5, 5.5, 5.75, 7.5, 12.5, 13, 15, 18, 160];
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

  // COLORS
  const colors = {
    'page-ios-light': '#efeff4',
    'page-ios-dark': '#000',
    'page-material-light': '#fff',
    'page-material-dark': '#121212',
    'block-strong-light': '#fff',
    'block-strong-dark': '#1c1c1d',
    'list-divider-light': '#f4f4f4',
    'list-divider-dark': '#232323',
    'bars-ios-light': '#f7f7f8',
    'bars-ios-dark': '#121212',
    'bars-material-light': '#fff',
    'bars-material-dark': '#202020',
    'toast-ios': '#000000',
    'toast-material': '#323232',
    primary: {
      light: '#298fff',
      DEFAULT: '#007aff',
      dark: '#0066d6',
    },
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
  };
};

module.exports = extendTheme;
