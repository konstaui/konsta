<template>
  <component :is="component" :class="classes">
    <konsta-provider
      :theme="currentTheme"
      :dark="dark"
      :touch-ripple="touchRipple"
      :auto-theme-detection="false"
    >
      <slot />
    </konsta-provider>
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useAutoTheme } from '../shared/use-auto-theme.js';
  import KonstaProvider from '../shared/KonstaProvider.vue';
  import { AppClasses } from '../../shared/esm/classes/AppClasses.js';

  export default {
    name: 'k-app',
    components: {
      KonstaProvider,
    },
    props: {
      component: {
        type: String,
        default: 'div',
      },
      theme: {
        type: String,
        default: 'material',
      },
      dark: {
        type: Boolean,
        default: true,
      },
      touchRipple: {
        type: Boolean,
        default: true,
      },
      safeAreas: {
        type: Boolean,
        default: true,
      },
    },
    setup(props, ctx) {
      const currentTheme = useAutoTheme(props);
      const classes = computed(() =>
        AppClasses(props, currentTheme.value, ctx.attrs.class)
      );

      return {
        currentTheme,
        classes,
      };
    },
  };
</script>
