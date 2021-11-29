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
    name: 'k-popup',
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
      size: { type: String, default: 'w-screen h-screen md:w-160 md:h-160' },
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
            'left-1/2 top-1/2 transition-transform transform -translate-x-1/2 duration-400 z-40 md:rounded max-w-full max-h-full overflow-hidden md:no-safe-areas',
            colors.value.bg,
            positionClass('fixed', ctx.attrs.class),
            props.size
          ),
          ios: '',
          material: 'shadow-2xl',
          opened: '-translate-y-1/2',
          closed: 'translate-y-full',
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
        classes,
        onBackdropClick,
        c,
        state,
      };
    },
  };
</script>
