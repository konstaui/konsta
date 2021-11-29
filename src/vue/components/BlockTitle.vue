<template>
  <component :is="component" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-block-title',
    props: {
      component: {
        type: String,
        default: 'span',
      },
      ios: {
        type: Boolean,
        default: undefined,
      },
      material: {
        type: Boolean,
        default: undefined,
      },
      withBlock: {
        type: Boolean,
        default: true,
      },
    },
    setup(props) {
      const c = useThemeClasses(props, () => ({
        base: {
          common: `pl-4-safe pr-4-safe mt-8 flex justify-between items-center ${
            props.withBlock ? '-mb-6' : 'mb-2'
          }`,
          ios: `font-semibold`,
          material: `font-medium`,
        },
      }));
      return {
        c,
      };
    },
  };
</script>
