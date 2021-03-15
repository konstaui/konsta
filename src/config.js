const configExtend = require('./config/config-extend');
const extendTheme = require('./config/extend-theme');
const extendVariants = require('./config/extend-variants');

const pluginBase = require('./config/plugin-base');
const pluginHairlines = require('./config/plugin-hairlines');
const pluginTouchRipple = require('./config/plugin-touch-ripple');
const pluginIosMaterial = require('./config/plugin-ios-material');
const pluginLineClamp = require('./config/plugin-line-clamp');
const pluginSafeAreas = require('./config/plugin-safe-areas');
const pluginDarkMode = require('./config/plugin-dark-mode');

const config = (userConfig = {}) => {
  return configExtend(
    {},
    {
      theme: {
        extend: extendTheme(),
      },
      variants: {
        extend: extendVariants(),
      },
      plugins: [
        pluginBase(),
        pluginIosMaterial(),
        pluginHairlines(),
        pluginTouchRipple(),
        pluginLineClamp(),
        pluginSafeAreas(),
        pluginDarkMode(),
      ],
    },
    userConfig
  );
};
module.exports = config;
