<template>
  <twm-app :theme="theme" :safe-areas="!inIFrame" data-foo="test">
    <twm-page>
      <twm-block-title>Block Title</twm-block-title>
      <twm-block-header>Block header</twm-block-header>
      <twm-block strong>Hello world <twm-badge>3</twm-badge></twm-block>
      <twm-block-footer>Block footer</twm-block-footer>
      <twm-block>
        <p>
          <button @click="() => (theme = theme === 'ios' ? 'material' : 'ios')">
            Toggle Theme
          </button>
        </p>
      </twm-block>
    </twm-page>
  </twm-app>
</template>
<script>
  import { ref, onMounted } from 'vue';
  import {
    twmApp,
    twmPage,
    twmBlock,
    twmBlockFooter,
    twmBlockHeader,
    twmBlockTitle,
    twmBadge,
    twmCard,
  } from 'tailwind-mobile/vue';
  export default {
    components: {
      twmApp,
      twmPage,
      twmBlock,
      twmBlockFooter,
      twmBlockHeader,
      twmBlockTitle,
      twmBadge,
      twmCard,
    },
    setup() {
      const theme = ref('material');
      const inIFrame = window.parent !== window;

      onMounted(() => {
        window.setTheme = (t) => (theme.value = t);
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
