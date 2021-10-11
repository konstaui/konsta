<template>
  <component :is="component" :class="c.base">
    <span :class="c.inner">
      <component :is="svgComponent" class="w-full h-full" />
    </span>
    <slot />
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { cls } from '../shared/cls.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  import PreloaderIOS from './icons/PreloaderIOS.vue';
  import PreloaderMaterial from './icons/PreloaderMaterial.vue';

  export default {
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
    setup(props, ctx) {
      const theme = useTheme(props);

      const colors = computed(() => ({
        icon: 'text-primary',
        ...(props.colors || {}),
      }));

      const svgComponent = computed(() =>
        theme.value === 'ios' ? PreloaderIOS : PreloaderMaterial
      );

      const c = useThemeClasses(props, () => ({
        base: {
          common: cls(
            theme.value === 'ios'
              ? 'twm-ios-preloader'
              : 'twm-material-preloader',
            `inline-block ${props.size} ${colors.value.icon}`
          ),
          material: `stroke-4`,
        },
        inner: {
          common: `block w-full h-full`,
        },
      }));

      return {
        svgComponent,
        c,
      };
    },
  };
</script>
