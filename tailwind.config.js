const konstaConfig = require('konsta/config');

module.exports = konstaConfig({
  konsta: {
    colors: {
      primary: '#007aff',
      'brand-primary': '#007aff',
      'brand-red': '#ff3b30',
      'brand-green': '#4cd964',
      'brand-yellow': '#ffcc00',
      'brand-purple': '#9c27b0',
      'brand-blue': '#2196f3',
      borderbg: '#e4e4e4',
      links: '#3366BB',
      textColorM: '#1b1b1f',
      searchbgM: '#dbe2f9',
    },
  },
  content: [
    './kitchen-sink/react/components/*.{js,jsx}',
    './kitchen-sink/react/pages/*.{js,jsx}',
    './kitchen-sink/svelte/components/*.{js,jsx}',
    './kitchen-sink/svelte/pages/*.{js,jsx}',
    './kitchen-sink/vue/components/*.{js,jsx,vue}',
    './kitchen-sink/vue/pages/*.{js,jsx,vue}',
  ],
  darkMode: 'class',
});
