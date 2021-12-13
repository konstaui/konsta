const konstaConfig = require('konsta/config');

module.exports = konstaConfig({
  content: [
    './kitchen-sink/react/components/*.{js,jsx}',
    './kitchen-sink/react/pages/*.{js,jsx}',
    './kitchen-sink/vue/components/*.{js,jsx,vue}',
    './kitchen-sink/vue/pages/*.{js,jsx,vue}',
  ],
  darkMode: 'class',
});
