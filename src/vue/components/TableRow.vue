<template>
  <component :is="component" ref="elRef" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { TableRowClasses } from '../../shared/classes/TableRowClasses.js';
  import { TableRowColors } from '../../shared/colors/TableRowColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-table-row',
    props: {
      component: {
        type: String,
        default: 'tr',
      },
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
