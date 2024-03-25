<template>
  <tbody ref="elRef" :class="c.base">
    <slot />
  </tbody>
</template>
<script>
  import { useContext } from '../shared/use-context.js';
  import { ref } from 'vue';

  import { TableBodyClasses } from '../../shared/classes/TableBodyClasses.js';

  import { useThemeClasses } from '../shared/use-theme-classes.js';

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
