const configExtend = require('./config/config-extend');
const extendTheme = require('./config/extend-theme');
const extendVariants = require('./config/extend-variants');

const pluginHairlines = require('./config/plugin-hairlines');
const pluginIosMaterial = require('./config/plugin-ios-material');
const pluginLineClamp = require('./config/plugin-line-clamp');
const pluginSafeAreas = require('./config/plugin-safe-areas');

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
        pluginHairlines(),
        pluginIosMaterial(),
        pluginLineClamp(),
        pluginSafeAreas(),
      ],
    },
    userConfig
  );
};
module.exports = config;
