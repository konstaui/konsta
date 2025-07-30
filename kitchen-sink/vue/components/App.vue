<template>
  <k-app :theme="theme" :safe-areas="!inIFrame">
    <router-view />
  </k-app>
</template>
<script>
  import { ref, onMounted, provide, computed, watch } from 'vue';
  import { kApp } from 'konsta/vue';

  export default {
    components: {
      kApp,
    },
    setup() {
      const theme = ref(
        window.location.search.includes('theme=material') ? 'material' : 'ios'
      );
      const vibrant = ref(false);
      const monochrome = ref(false);
      const setVibrant = (value) => {
        const htmlEl = document.documentElement;
        if (value) {
          htmlEl.classList.add('k-md-vibrant');
        } else {
          htmlEl.classList.remove('k-md-vibrant');
        }
        vibrant.value = value;
      };
      const setMonochrome = (value) => {
        const htmlEl = document.documentElement;
        if (value) {
          htmlEl.classList.add('k-md-monochrome');
        } else {
          htmlEl.classList.remove('k-md-monochrome');
        }
        monochrome.value = value;
      };
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
        vibrant: vibrant.value,
        setVibrant,
        monochrome: monochrome.value,
        setMonochrome,
      }));

      provide('AppContext', AppContext);

      const calcSafeAreas = () => {
        if (window.location.href.includes('safe-areas')) {
          const html = document.documentElement;
          if (html) {
            html.style.setProperty(
              '--k-safe-area-top',
              theme.value === 'ios' ? '44px' : '24px'
            );
            html.style.setProperty('--k-safe-area-bottom', '34px');
          }
        }
      };
      onMounted(() => {
        window.setTheme = setTheme;
        window.setMode = (mode) => {
          if (mode === 'dark') document.documentElement.classList.add('dark');
          else document.documentElement.classList.remove('dark');
        };
        calcSafeAreas();
      });
      watch(theme, () => {
        calcSafeAreas();
      });

      return {
        inIFrame,
        theme,
      };
    },
  };
</script>
