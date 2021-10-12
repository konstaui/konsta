const path = require('path');
const configExtend = require('./config/config-extend.js');
const extendTheme = require('./config/extend-theme.js');

const pluginBase = require('./config/plugin-base.js');
const pluginPreloader = require('./config/plugin-preloader.js');
const pluginHairlines = require('./config/plugin-hairlines.js');
const pluginTouchRipple = require('./config/plugin-touch-ripple.js');
const pluginIosMaterial = require('./config/plugin-ios-material.js');
const pluginLineClamp = require('./config/plugin-line-clamp.js');
const pluginSafeAreas = require('./config/plugin-safe-areas.js');
const pluginTranslucent = require('./config/plugin-translucent.js');
const pluginRange = require('./config/plugin-range.js');
const pluginTouch = require('./config/plugin-touch.js');

const purge = `${path.resolve(__dirname)}/**/*.{js,jsx,vue,svelte}`;

const config = (userConfig = {}) => {
  const newConfig = configExtend(
    {},
    {
      theme: {
        extend: extendTheme(),
      },
      plugins: [
        pluginBase(),
        pluginPreloader(),
        pluginIosMaterial(),
        pluginHairlines(),
        pluginTouchRipple(),
        pluginLineClamp(),
        pluginSafeAreas(),
        pluginTranslucent(),
        pluginRange(),
        pluginTouch(),
      ],
    },
    userConfig
  );
  if (!newConfig.purge) {
    newConfig.purge = [purge];
  } else if (Array.isArray(newConfig.purge)) {
    newConfig.purge = [...newConfig.purge, purge];
  } else if (newConfig.purge.content) {
    newConfig.purge.content = [...newConfig.purge.content, purge];
  } else if (!newConfig.purge.content) {
    newConfig.purge.content = [purge];
  }

  return newConfig;
};
module.exports = config;
