<template>
  <twm-app :theme="theme" :safe-areas="!inIFrame" data-foo="test">
    <HomePage :theme="theme" :setTheme="setTheme" />
  </twm-app>
</template>
<script>
  import { ref, onMounted, provide } from 'vue';
  import HomePage from '../pages/Home.vue';
  import { twmApp } from 'tailwind-mobile/vue';
  export default {
    components: {
      twmApp,
      HomePage,
    },
    setup() {
      const theme = ref('ios');
      const inIFrame = window.parent !== window;
      const setTheme = (t) => {
        theme.value = t;
      };

      onMounted(() => {
        window.setTheme = setTheme;
        window.setMode = (mode) => {
          if (mode === 'dark') document.documentElement.classList.add('dark');
          else document.documentElement.classList.remove('dark');
        };
      });

      return {
        inIFrame,
        theme,
        setTheme,
      };
    },
  };
</script>
