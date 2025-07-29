const path = require('path');
const configExtend = require('./config/config-extend.js');
const extendTheme = require('./config/extend-theme.js');

const pluginBase = require('./config/plugin-base.js');
const pluginColors = require('./config/plugin-colors.js');

const content = `${path.resolve(__dirname)}/**/*.{js,jsx,vue,svelte}`;

const config = (userConfig = {}) => {
  const userConfigKonsta = { ...(userConfig.konsta || {}) };
  const userConfigModified = { ...userConfig };
  delete userConfigModified.konsta;

  const konstaConfig = {
    colors: { primary: '#007aff', ...(userConfigKonsta.colors || {}) },
  };

  const newConfig = configExtend(
    {},
    {
      theme: { extend: extendTheme(konstaConfig) },
      plugins: [
        pluginBase(userConfig, konstaConfig),

        pluginColors(konstaConfig),
      ],
    },
    userConfigModified
  );

  if (!newConfig.content) {
    newConfig.content = [content];
  } else if (Array.isArray(newConfig.content)) {
    newConfig.content = [...newConfig.content, content];
  } else if (newConfig.content.files) {
    newConfig.content.files = [...newConfig.content.files, content];
  } else if (!newConfig.content.files) {
    newConfig.content.files = [content];
  }

  return newConfig;
};
module.exports = config;
