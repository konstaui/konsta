<template>
  <component :is="component" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { BlockHeaderClasses } from '../../shared/classes/BlockHeaderClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-block-header',
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
      const c = useThemeClasses(props, () => BlockHeaderClasses());
      return {
        c,
      };
    },
  };
</script>
