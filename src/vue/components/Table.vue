<template>
  <table ref="elRef" :class="c.base">
    <slot />
  </table>
</template>
<script>
  import { ref } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { TableClasses } from '../../shared/classes/TableClasses.js';
  import { themeClasses } from '../shared/use-theme-classes.js';

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
      const context = useContext();
      const useThemeClasses = themeClasses(context);
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
