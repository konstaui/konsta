<template>
  <component :is="component" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { PageClasses } from '../../shared/esm/classes/PageClasses.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-page',
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
    setup(props, ctx) {
      const c = useThemeClasses(props, () =>
        PageClasses(props, ctx.attrs.class, useDarkClasses)
      );

      return {
        c,
      };
    },
  };
</script>
