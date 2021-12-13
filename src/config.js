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

const content = `${path.resolve(__dirname)}/**/*.{js,jsx,vue,svelte}`;

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

  // support tailwind2 purge config
  if (newConfig.purge) {
    if (Array.isArray(newConfig.purge)) {
      newConfig.content = [...newConfig.purge, content];
    } else if (newConfig.purge.content) {
      newConfig.content = [...newConfig.purge.content, content];
    } else if (!newConfig.purge.content) {
      newConfig.content = [content];
    }
  }

  if (!newConfig.content) {
    newConfig.content = [content];
  } else if (Array.isArray(newConfig.content)) {
    newConfig.content = [...newConfig.content, content];
  }
  console.log(newConfig.content);
  return newConfig;
};
module.exports = config;
