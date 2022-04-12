<template>
  <component :is="component" :class="c.base">
    <span :class="c.inner">
      <component :is="svgComponent" class="w-full h-full" />
    </span>
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  import PreloaderIOS from './icons/PreloaderIOS.vue';
  import PreloaderMaterial from './icons/PreloaderMaterial.vue';
  import { PreloaderClasses } from '../../shared/classes/PreloaderClasses.js';

  export default {
    name: 'k-preloader',
    props: {
      component: {
        type: String,
        default: 'span',
      },
      colors: {
        type: Object,
      },
      ios: {
        type: Boolean,
        default: undefined,
      },
      material: {
        type: Boolean,
        default: undefined,
      },
      size: {
        type: String,
        default: 'w-8 h-8',
      },
    },
    setup(props) {
      const theme = useTheme(props);

      const colors = computed(() => ({
        icon: 'text-primary',
        ...(props.colors || {}),
      }));

      const svgComponent = computed(() =>
        theme.value === 'ios' ? PreloaderIOS : PreloaderMaterial
      );

      const c = useThemeClasses(props, () =>
        PreloaderClasses(props, colors.value, theme.value)
      );

      return {
        svgComponent,
        c,
      };
    },
  };
</script>
