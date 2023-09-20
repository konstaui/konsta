<template>
  <table ref="elRef" :class="c.base">
    <slot />
  </table>
</template>
<script>
  import { ref } from 'vue';
  import { TableClasses } from '../../shared/classes/TableClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-table',
    props: {
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
