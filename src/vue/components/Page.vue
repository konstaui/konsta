<template>
  <component :is="component" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { PageClasses } from '../../shared/classes/PageClasses.js';
  import { PageColors } from '../../shared/colors/PageColors.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
  import { themeClasses } from '../shared/use-theme-classes.js';

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
      colors: {
        type: Object,
      },
    },
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const colors = computed(() =>
        PageColors(props.colors || {}, useDarkClasses)
      );
      const c = useThemeClasses(props, () =>
        PageClasses(props, colors.value, ctx.attrs.class)
      );

      return {
        c,
      };
    },
  };
</script>
