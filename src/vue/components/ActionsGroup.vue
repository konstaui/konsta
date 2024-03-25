<template>
  <component :is="component" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { useContext } from '../shared/use-context.js';
  import { ActionsGroupClasses } from '../../shared/classes/ActionsGroupClasses.js';

  import { themeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-actions-group',
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
      dividers: { type: Boolean, default: true },
    },
    setup(props, ctx) {
      const context = useContext();
      const useThemeClasses = themeClasses(context);
      const c = useThemeClasses(props, () =>
        ActionsGroupClasses(props, ctx.attrs.class)
      );

      return {
        c,
      };
    },
  };
</script>
