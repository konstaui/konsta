<template>
  <slot />
</template>
<script>
  import { computed, provide } from 'vue';

  import { useAutoTheme } from './use-auto-theme.js';

  export default {
    name: 'k-provider',
    props: {
      theme: {
        type: String,
        default: 'material',
      },
      dark: {
        type: Boolean,
        default: true,
      },
      materialTouchRipple: {
        type: Boolean,
        default: true,
      },
      iosHoverHighlight: {
        type: Boolean,
        default: true,
      },
      iosTouchHighlight: {
        type: Boolean,
        default: true,
      },
      autoThemeDetection: {
        type: Boolean,
        default: true,
      },
    },
    setup(props) {
      const currentTheme = useAutoTheme(props, props.autoThemeDetection);

      const KonstaContext = computed(() => ({
        theme: currentTheme.value,
        dark: props.dark,
        materialTouchRipple: props.materialTouchRipple,
        iosHoverHighlight: props.iosHoverHighlight,
      }));
      provide('KonstaContext', KonstaContext);

      return {
        currentTheme,
      };
    },
  };
</script>
