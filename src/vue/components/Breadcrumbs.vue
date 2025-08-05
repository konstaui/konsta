<template>
  <component :is="component" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { useContext } from '../shared/use-context.js';
  import { BreadcrumbsClasses } from '../../shared/classes/BreadcrumbsClasses.js';
  import { themeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-breadcrumbs',
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
      fontSizeIos: {
        type: String,
        default: 'text-[17px]',
      },
      fontSizeMaterial: {
        type: String,
        default: 'text-[16px]',
      },
    },
    setup(props) {
      const context = useContext();
      const useThemeClasses = themeClasses(context);
      const c = useThemeClasses(props, () => BreadcrumbsClasses(props));
      return {
        c,
      };
    },
  };
</script>
