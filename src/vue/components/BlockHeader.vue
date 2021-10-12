<template>
  <component :is="component" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'twm-block-header',
    props: {
      component: {
        type: String,
        default: 'div',
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
    setup(props) {
      const c = useThemeClasses(props, () => ({
        base: `pl-4-safe pr-4-safe mt-8 flex items-center -mb-6 text-opacity-55 text-black text-sm`,
      }));
      return {
        c,
      };
    },
  };
</script>
