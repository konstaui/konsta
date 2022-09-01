<template>
  <k-app :theme="theme" :safe-areas="!inIFrame" data-foo="test">
    <router-view />
  </k-app>
</template>
<script>
  import { ref, onMounted, provide, computed } from 'vue';
  import { kApp } from 'konsta/vue';

  export default {
    components: {
      kApp,
    },
    setup() {
      const theme = ref('ios');
      const currentColorTheme = ref('');
      const setColorTheme = (color) => {
        const htmlEl = document.documentElement;
        htmlEl.classList.forEach((c) => {
          if (c.includes('k-color')) htmlEl.classList.remove(c);
        });
        if (color) htmlEl.classList.add(color);
        currentColorTheme.value = color;
      };
      const inIFrame = window.parent !== window;

      const setTheme = (t) => {
        theme.value = t;
      };

      const AppContext = computed(() => ({
        theme: theme.value,
        setTheme,
        colorTheme: currentColorTheme.value,
        setColorTheme,
      }));

      provide('AppContext', AppContext);

      onMounted(() => {
        window.setTheme = setTheme;
        window.setMode = (mode) => {
          if (mode === 'dark') document.documentElement.classList.add('dark');
          else document.documentElement.classList.remove('dark');
        };
        if (window.location.href.includes('safe-areas')) {
          const html = document.documentElement;
          if (html) {
            html.style.setProperty('--k-safe-area-top', '44px');
            html.style.setProperty('--k-safe-area-bottom', '34px');
          }
        }
      });

      return {
        inIFrame,
        theme,
      };
    },
  };
</script>
