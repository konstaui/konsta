<template>
  <component :is="component" ref="elRef" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { ref } from 'vue';
  import { TableBodyClasses } from '../../shared/classes/TableBodyClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-table-body',
    props: {
      component: {
        type: String,
        default: 'tbody',
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
