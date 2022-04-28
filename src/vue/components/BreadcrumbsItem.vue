<template>
  <component :is="component" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { BreadcrumbsItemClasses } from '../../shared/classes/BreadcrumbsItemClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { cls } from '../../shared/cls.js';

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
    setup(props) {
      const colors = computed(() => ({
        text: cls(
          'text-black text-opacity-55',
          useDarkClasses('dark:text-white dark:text-opacity-55')
        ),
        textActive: cls('text-black', useDarkClasses('dark:text-white')),
        ...props.colors,
      }));
      const c = useThemeClasses(props, () =>
        BreadcrumbsItemClasses(props, colors.value)
      );
      return {
        c,
      };
    },
  };
</script>
