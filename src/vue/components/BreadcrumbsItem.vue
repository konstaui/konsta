<template>
  <component :is="component" :class="c.base" role="menuitem" tabindex="0">
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useContext } from '../shared/use-context.js';

  import { BreadcrumbsItemClasses } from '../../shared/classes/BreadcrumbsItemClasses.js';

  import { BreadcrumbsItemColors } from '../../shared/colors/BreadcrumbsItemColors.js';

  import { useThemeClasses } from '../shared/use-theme-classes.js';

  import { useDarkClasses } from '../shared/use-dark-classes.js';

  export default {
    name: 'k-breadcrumbs-item',
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
      active: {
        type: Boolean,
        default: false,
      },
    },
    setup(props, ctx) {
      const context = useContext();
      const colors = computed(() =>
        BreadcrumbsItemColors(props.colors, useDarkClasses)
      );
      const c = useThemeClasses(props, () =>
        BreadcrumbsItemClasses(props, colors.value)
      );
      return {
        c,
      };
    },
  };
</script>
