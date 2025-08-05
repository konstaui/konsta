<template>
  <component :is="component" :class="c.base" role="button" tabindex="0">
    <span :class="c.dot" />
    <span :class="c.dot" />
    <span :class="c.dot" />
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { BreadcrumbsCollapsedClasses } from '../../shared/classes/BreadcrumbsCollapsedClasses.js';
  import { BreadcrumbsCollapsedColors } from '../../shared/colors/BreadcrumbsCollapsedColors.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { darkClasses } from '../shared/use-dark-classes.js';

  export default {
    name: 'k-breadcrumbs-collapsed',
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
      colors: {
        type: Object,
      },
    },
    setup(props) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const colors = computed(() =>
        BreadcrumbsCollapsedColors(props.colors, useDarkClasses)
      );
      const c = useThemeClasses(props, () =>
        BreadcrumbsCollapsedClasses(props, colors.value)
      );
      return {
        c,
      };
    },
  };
</script>
