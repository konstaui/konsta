<template>
  <div v-if="backdrop" :class="c.backdrop[state]" @click="onBackdropClick" />
  <component :is="component" :class="classes">
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { cls } from '../shared/cls.js';
  import { positionClass } from '../shared/position-class.js';
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
      const c = useThemeClasses(props, () => ({
        base: {
          common: cls(
            'left-0 top-full transition-transform duration-400 z-40 overflow-hidden',
            colors.value.bg,
            positionClass('fixed', ctx.attrs.class)
          ),
          ios: '',
          material: 'shadow-2xl',
          opened: '-translate-y-full',
          closed: '',
        },
        backdrop: {
          common:
            'fixed z-40 w-full h-full left-0 top-0 bg-black bg-opacity-50 duration-400',
          opened: '',
          closed: 'opacity-0 pointer-events-none',
        },
      }));

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
