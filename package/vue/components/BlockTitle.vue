<template>
  <component :is="component" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { BlockTitleClasses } from '../../shared/esm/classes/BlockTitleClasses.js';
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
      const c = useThemeClasses(props, () => BlockTitleClasses(props));
      return {
        c,
      };
    },
  };
</script>
