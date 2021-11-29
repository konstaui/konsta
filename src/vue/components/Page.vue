<template>
  <component :is="component" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { cls } from '../shared/cls.js';
  import { positionClass } from '../shared/position-class.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

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
    },
    setup(props, ctx) {
      const c = useThemeClasses(props, () => ({
        base: {
          common: cls(
            'h-full w-full left-0 top-0 overflow-auto',
            positionClass('absolute', ctx.attrs.class)
          ),
          ios: cls(
            'bg-page-ios-light',
            useDarkClasses('dark:bg-page-ios-dark')
          ),
          material: cls(
            'bg-page-material-light',
            useDarkClasses('dark:bg-page-material-dark')
          ),
        },
      }));

      return {
        c,
      };
    },
  };
</script>
