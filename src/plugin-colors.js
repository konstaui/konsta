import hexToRgb from './color-utils/hex-to-rgb';
import iosColors from './color-utils/ios-colors';
import mdColors from './color-utils/md-colors';

export default (config) => {
  const theme = config.config().theme;
  const colors = theme.colors;
  const brandColors = Object.keys(colors).filter((color) =>
    color.startsWith('brand-')
  );
  const colorRules = {};
  brandColors.forEach((color) => {
    let name = `.k-color-${color}`;
    if (color === 'brand-primary') {
      name = ':root, .k-color-brand-primary';
    }
    const hex = colors[color];
    const tokens = {
      primary: hex,
      ...iosColors(hex),
      ...mdColors(hex),
    };
    const data = {};
    Object.keys(tokens).forEach((token) => {
      data[`--k-color-${token}`] =
        'rgb(' + hexToRgb(tokens[token]).join(' ') + ')';
    });
    colorRules[name] = data;
  });
  // vibrant
  brandColors.forEach((color) => {
    let name = `.k-md-vibrant .k-color-${color}, .k-md-vibrant.k-color-${color}, .k-color-${color} .k-md-vibrant`;
    if (color === 'brand-primary') {
      name += ',.k-md-vibrant';
    }
    const hex = colors[color];
    const tokens = {
      ...mdColors(hex, 'vibrant'),
    };
    const data = {};
    Object.keys(tokens).forEach((token) => {
      data[`--k-color-${token}`] =
        'rgb(' + hexToRgb(tokens[token]).join(' ') + ')';
    });
    colorRules[name] = data;
  });
  // monochrome
  brandColors.slice(0, 1).forEach((color) => {
    let name = `.k-md-monochrome,:root.k-md-monochrome, :root .k-md-monochrome`;

    const hex = colors[color];
    const tokens = {
      ...mdColors(hex, 'monochrome'),
    };
    const data = {};
    Object.keys(tokens).forEach((token) => {
      data[`--k-color-${token}`] =
        'rgb(' + hexToRgb(tokens[token]).join(' ') + ')';
    });
    colorRules[name] = data;
  });
  config.addBase(colorRules);
};
