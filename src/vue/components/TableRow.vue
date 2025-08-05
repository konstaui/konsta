<template>
  <tr ref="elRef" :class="c.base">
    <slot />
  </tr>
</template>
<script>
  import { computed, ref } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { TableRowClasses } from '../../shared/classes/TableRowClasses.js';
  import { TableRowColors } from '../../shared/colors/TableRowColors.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
  import { themeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-table-row',
    props: {
      colors: {
        type: Object,
      },
      ios: {
        type: Boolean,
        default: undefined,
      },
      material: {
        type: Boolean,
        default: undefined,
      },
      header: {
        type: Boolean,
        default: false,
      },
    },
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const elRef = ref(null);

      const colors = computed(() =>
        TableRowColors(props.colors || {}, useDarkClasses)
      );
      const c = useThemeClasses(props, () =>
        TableRowClasses(props, colors.value, ctx.attrs.class)
      );

      return {
        c,
        elRef,
      };
    },
  };
</script>
