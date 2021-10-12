<template>
  <div v-if="backdrop" :class="c.backdrop[state]" @click="onBackdropClick" />
  <component :is="component" :class="classes">
    <slot />
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { cls } from '../shared/cls.js';
  import { positionClass } from '../shared/position-class.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'twm-panel',
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
      size: { type: String, default: 'w-72 h-screen' },
      side: { type: String, default: 'left' },
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
            'top-0 transition-transform transform duration-400 z-40 max-w-full max-h-full overflow-hidden',
            colors.value.bg,
            positionClass('fixed', ctx.attrs.class),
            props.size
          ),
          ios: '',
          material: 'shadow-2xl',
        },
        left: {
          common: cls('no-safe-areas-right left-0'),
          opened: 'translate-x-0',
          closed: '-translate-x-full',
        },
        right: {
          common: cls('no-safe-areas-left left-full'),
          opened: '-translate-x-full',
          closed: 'translate-x-0',
        },
        backdrop: {
          common:
            'fixed z-40 w-full h-full left-0 top-0 bg-black bg-opacity-50 duration-400',
          opened: '',
          closed: 'opacity-0 pointer-events-none',
        },
      }));

      const classes = computed(() =>
        cls(c.value.base, c.value[props.side][state.value], ctx.attrs.class)
      );

      const onBackdropClick = (e) => {
        ctx.emit('backdropclick', e);
      };

      return {
        onBackdropClick,
        c,
        state,
        classes,
      };
    },
  };
</script>
