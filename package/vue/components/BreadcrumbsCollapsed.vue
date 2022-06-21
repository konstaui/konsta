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
  import { BreadcrumbsCollapsedClasses } from '../../shared/esm/classes/BreadcrumbsCollapsedClasses.js';
  import { cls } from '../../shared/esm/cls.js';
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
      const colors = computed(() => ({
        bg: cls(
          'bg-black bg-opacity-15',
          useDarkClasses('dark:bg-white dark:bg-opacity-15')
        ),
        dotBg: cls('bg-black', useDarkClasses('dark:bg-white')),
        ...props.colors,
      }));
      const c = useThemeClasses(props, () =>
        BreadcrumbsCollapsedClasses(props, colors.value)
      );
      return {
        c,
      };
    },
  };
</script>
