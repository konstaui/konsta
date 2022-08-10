<template>
  <component :is="component" :class="c.base">
    <span :class="c.dot" />
    <span :class="c.dot" />
    <span :class="c.dot" />
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { BreadcrumbsCollapsedClasses } from '../../shared/classes/BreadcrumbsCollapsedClasses.js';
  import { BreadcrumbsCollapsedColors } from '../../shared/colors/BreadcrumbsCollapsedColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

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
