<template>
  <component :is="component" :class="c.base">
    <chevron-icon :class="c.icon" />
    <slot />
  </component>
</template>
<script>
  import { BreadcrumbsSeparatorClasses } from '../../shared/classes/BreadcrumbsSeparatorClasses.js';
  import { useContext } from '../shared/use-context.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import ChevronIcon from './icons/ChevronIcon.vue';

  export default {
    name: 'k-breadcrumbs-separator',
    components: { ChevronIcon },
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
    },
    setup(props) {
      const context = useContext();
      const useThemeClasses = themeClasses(context);
      const c = useThemeClasses(props, () =>
        BreadcrumbsSeparatorClasses(props)
      );
      return {
        c,
      };
    },
  };
</script>
