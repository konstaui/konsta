<template>
  <twm-app :theme="theme" :safe-areas="!inIFrame" data-foo="test">
    <router-view />
  </twm-app>
</template>
<script>
  import { ref, onMounted, provide, inject, computed } from 'vue';
  import { twmApp } from 'tailwind-mobile/vue';
  export default {
    components: {
      twmApp,
    },
    setup() {
      const theme = ref('ios');
      const inIFrame = window.parent !== window;

      const setTheme = (t) => {
        theme.value = t;
      };

      const AppContext = computed(() => ({
        theme: theme.value,
        setTheme,
      }));

      provide('AppContext', AppContext);

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
      };
    },
  };
</script>
