import hexToRgb from './color-utils/hex-to-rgb';
import iosColors from './color-utils/ios-colors';
import mdColors from './color-utils/md-colors';

export default (config) => {
  const colors = config.config().theme.colors;
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
  config.addBase(colorRules);
};
