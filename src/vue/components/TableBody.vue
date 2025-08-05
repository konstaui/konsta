<template>
  <tbody ref="elRef" :class="c.base">
    <slot />
  </tbody>
</template>
<script>
  import { ref } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { TableBodyClasses } from '../../shared/classes/TableBodyClasses.js';
  import { themeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-table-body',
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
        TableBodyClasses(
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
