const hexToRgb = require('./color-utils/hex-to-rgb');
const iosColors = require('./color-utils/ios-colors');
const mdColors = require('./color-utils/md-colors');

module.exports = (config) => {
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
