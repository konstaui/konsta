<template>
  <thead ref="elRef" :class="c.base">
    <slot />
  </thead>
</template>
<script>
  import { ref } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { TableHeadClasses } from '../../shared/classes/TableHeadClasses.js';
  import { themeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-table-head',
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
        TableHeadClasses(
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
