<template>
  <div v-if="backdrop" :class="c.backdrop[state]" @click="onBackdropClick" />
  <component :is="component" :class="classes">
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { cls } from '../../shared/cls.js';
  import { SheetClasses } from '../../shared/classes/SheetClasses.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-sheet',
    props: {
      component: {
        type: String,
        default: 'div',
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
      opened: Boolean,
      backdrop: { type: Boolean, default: true },
    },
    emits: ['backdropclick'],
    setup(props, ctx) {
      const state = computed(() => (props.opened ? 'opened' : 'closed'));

      const colors = computed(() => ({
        bg: cls('bg-white', useDarkClasses('dark:bg-black')),
        ...(props.colors || {}),
      }));

      const c = useThemeClasses(props, () =>
        SheetClasses(props, colors.value, ctx.attrs.class)
      );

      const onBackdropClick = (e) => {
        ctx.emit('backdropclick', e);
      };

      const classes = computed(() =>
        cls(c.value.base[state.value], ctx.attrs.class)
      );

      return {
        onBackdropClick,
        c,
        state,
        classes,
      };
    },
  };
</script>
