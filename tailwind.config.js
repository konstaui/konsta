const konstaConfig = require('konsta/config');

module.exports = konstaConfig({
  mode: 'jit',
  purge: [
    './kitchen-sink/react/components/*.{js,jsx}',
    './kitchen-sink/react/pages/*.{js,jsx}',
    './kitchen-sink/vue/components/*.{js,jsx,vue}',
    './kitchen-sink/vue/pages/*.{js,jsx,vue}',
  ],
  darkMode: 'class',
});
