<template>
  <component :is="component" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { BlockHeaderClasses } from '../../shared/classes/BlockHeaderClasses.js';
  import { BlockHeaderColors } from '../../shared/colors/BlockHeaderColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  export default {
    name: 'k-block-header',
    props: {
      component: {
        type: String,
        default: 'div',
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
    setup(props) {
      const colors = computed(() =>
        BlockHeaderColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        BlockHeaderClasses(props, colors.value)
      );
      return {
        c,
      };
    },
  };
</script>
