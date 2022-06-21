<template>
  <component :is="component" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { BlockFooterClasses } from '../../shared/esm/classes/BlockFooterClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-block-footer',
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
      const c = useThemeClasses(props, () => BlockFooterClasses());
      return {
        c,
      };
    },
  };
</script>
