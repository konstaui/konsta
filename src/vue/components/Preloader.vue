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
  import { useContext } from '../shared/use-context.js';

  import { useTheme } from '../shared/use-theme.js';

  import { themeClasses } from '../shared/use-theme-classes.js';

  import { darkClasses } from '../shared/use-dark-classes.js';

  import PreloaderIOS from './icons/PreloaderIOS.vue';
  import PreloaderMaterial from './icons/PreloaderMaterial.vue';

  import { PreloaderClasses } from '../../shared/classes/PreloaderClasses.js';

  import { PreloaderColors } from '../../shared/colors/PreloaderColors.js';

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
    },
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const theme = useTheme(props, context);

      const colors = computed(() =>
        PreloaderColors(props.colors || {}, useDarkClasses)
      );

      const svgComponent = computed(() =>
        theme.value === 'ios' ? PreloaderIOS : PreloaderMaterial
      );

      const c = useThemeClasses(props, () =>
        PreloaderClasses(props, colors.value, theme.value, ctx.attrs.class)
      );

      return {
        svgComponent,
        c,
      };
    },
  };
</script>
