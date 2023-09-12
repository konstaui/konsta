<template>
  <component :is="component" ref="elRef" :class="c.base">
    <table :class="c.table">
      <slot />
    </table>
  </component>
</template>
<script>
  import { ref } from 'vue';
  import { TableClasses } from '../../shared/classes/TableClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-table',
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
      const elRef = ref(null);

      const c = useThemeClasses(props, () =>
        TableClasses(
          {
            ...props,
          },
          ctx.attrs.class
        )
      );

      return {
        c,
        elRef,
      };
    },
  };
</script>
