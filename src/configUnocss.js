const pluginBase = require('./config/plugin-base.js');
const pluginColors = require('./config/plugin-colors.js');
const pluginPreloader = require('./config/plugin-preloader.js');
const pluginHairlines = require('./config/plugin-hairlines.js');
const pluginTouchRipple = require('./config/plugin-touch-ripple.js');
const pluginIosMaterial = require('./config/plugin-ios-material.js');
const pluginLineClamp = require('./config/plugin-line-clamp.js');
const pluginSafeAreas = require('./config/plugin-safe-areas.js');
const pluginTranslucent = require('./config/plugin-translucent.js');
const pluginRange = require('./config/plugin-range.js');
const pluginTouch = require('./config/plugin-touch.js');
const pluginNoScrollbar = require('./config/plugin-no-scrollbar.js');

const config = (options = {}) => {
  const konstaConfig = {
    dark: options.dark || 'class',
    colors: {
      primary: '#007aff',
    },
  };
  const plugin = (plg) => {
    const rls = [];
    plg({
      addBase: (res) => {
        Object.keys(res).forEach((key) => {
          rls.push([key, res[key]]);
        });
      },
      config: (key) => konstaConfig[key],
    });
    return rls;
  };
  const rules = [
    pluginBase({}, konstaConfig, plugin),
    pluginPreloader(plugin),
    pluginIosMaterial(plugin),
    pluginHairlines(plugin),
    pluginTouchRipple(plugin),
    pluginLineClamp(plugin),
    pluginSafeAreas(plugin),
    pluginTranslucent(plugin),
    pluginRange(plugin),
    pluginTouch(plugin),
    pluginNoScrollbar(plugin),
    pluginColors(konstaConfig, plugin),
  ];

  return {
    name: 'unocss-preset-konstaui',
    theme: {
      colors: konstaConfig.colors,
    },
    rules,
  };
};

module.exports = config;
