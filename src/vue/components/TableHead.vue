<template>
  <thead ref="elRef" :class="c.base">
    <slot />
  </thead>
</template>
<script>
  import { ref } from 'vue';
  import { TableHeadClasses } from '../../shared/classes/TableHeadClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

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
