<template>
  <component :is="component" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { BlockTitleClasses } from '../../shared/classes/BlockTitleClasses.js';
  import { BlockTitleColors } from '../../shared/colors/BlockTitleColors.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { darkClasses } from '../shared/use-dark-classes.js';

  export default {
    name: 'k-block-title',
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
      medium: {
        type: Boolean,
        default: false,
      },
      large: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const colors = computed(() =>
        BlockTitleColors(props.colors || {}, useDarkClasses)
      );
      const c = useThemeClasses(props, () =>
        BlockTitleClasses(props, colors.value)
      );
      return {
        c,
      };
    },
  };
</script>
