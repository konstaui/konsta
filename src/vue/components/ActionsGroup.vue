<template>
  <component :is="component" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { ActionsGroupClasses } from '../../shared/classes/ActionsGroupClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

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
      hairlines: { type: Boolean, default: true },
    },
    setup(props, ctx) {
      const c = useThemeClasses(
        props,
        () => ActionsGroupClasses(props),
        ctx.attrs.class
      );

      return {
        c,
      };
    },
  };
</script>
