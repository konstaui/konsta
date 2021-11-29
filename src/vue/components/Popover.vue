<template>
  <div v-if="backdrop" :class="c.backdrop[state]" @click="onBackdropClick" />
  <component :is="component" ref="elRef" :style="popoverStyle" :class="classes">
    <div
      v-if="theme === 'ios'"
      ref="angleElRef"
      :style="angleStyle"
      :class="c.angleWrap[positions.anglePosition]"
    >
      <div :class="c.angleArrow[positions.anglePosition]" />
    </div>
    <div :class="c.inner"><slot /></div>
  </component>
</template>
<script>
  /* eslint-disable no-restricted-globals */
  import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';
  import { cls } from '../shared/cls.js';
  import { positionClass } from '../shared/position-class.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';
  import { calcPopoverPosition } from '../shared/calc-popover-position.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  export default {
    name: 'k-popover',
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
      size: { type: String, default: 'w-64' },
      opened: Boolean,
      backdrop: { type: Boolean, default: true },
      angleClass: { type: String, default: '' },
      target: { type: [Object, String], default: undefined },
      targetX: { type: Number, default: undefined },
      targetY: { type: Number, default: undefined },
      targetWidth: { type: Number, default: undefined },
      targetHeight: { type: Number, default: undefined },
      translucent: { type: Boolean, default: true },
    },
    emits: ['backdropclick'],
    setup(props, ctx) {
      const elRef = ref(null);
      const angleElRef = ref(null);
      const positions = ref({
        set: false,
        angleTop: 0,
        angleLeft: 0,
        anglePosition: 'bottom',
        popoverTop: 0,
        popoverLeft: 0,
        popoverPosition: 'top-left',
      });
      const theme = useTheme(props);

      const state = computed(() => (props.opened ? 'opened' : 'closed'));

      const colors = computed(() => ({
        bg: cls('bg-popover-light', useDarkClasses('dark:bg-popover-dark')),
        ...(props.colors || {}),
      }));
      const c = useThemeClasses(props, () => ({
        base: {
          common: cls(
            'transition-transform-opacity duration-300 z-40 no-safe-areas',
            positionClass('fixed', ctx.attrs.class),
            props.size
          ),
          ios: '',
          material: '',
          opened: '',
          closed: {
            common: 'opacity-0 pointer-events-none',
            ios: '',
            material: 'scale-x-90 scale-y-75',
          },
        },
        inner: {
          common: cls('overflow-hidden relative', colors.value.bg),
          ios: cls('rounded-xl', props.translucent && 'translucent'),
          material: 'rounded shadow-lg',
        },
        angleWrap: {
          common: cls(props.angleClass || ''),
          ios: cls(
            'absolute w-6.5 h-6.5 z-50 overflow-hidden',
            props.translucent && 'opacity-80'
          ),
          bottom: 'top-full',
          top: 'bottom-full',
          left: 'right-full',
          right: 'left-full',
        },
        angleArrow: {
          common: cls(
            colors.value.bg,
            'absolute rounded w-full h-full transform rotate-45'
          ),
          bottom: '-top-4.75',
          top: 'top-4.75',
          left: 'left-4.75',
          right: '-left-4.75',
        },
        backdrop: {
          common:
            'fixed z-40 w-full h-full left-0 top-0 bg-black bg-opacity-50 duration-300',
          opened: '',
          closed: 'opacity-0 pointer-events-none',
        },
      }));

      const setPopover = () => {
        if (!props.target || !elRef.value || !props.opened) return;
        positions.value = calcPopoverPosition({
          popoverEl: elRef.value,
          targetEl: props.target,
          angleEl: angleElRef.value,
          theme: theme.value,
        });
      };

      const attachEvents = () => {
        if (typeof window === 'undefined') return;
        window.addEventListener('resize', setPopover);
      };

      const detachEvents = () => {
        if (typeof window === 'undefined') return;
        window.removeEventListener('resize', setPopover);
      };

      onMounted(() => {
        attachEvents();
        if (props.opened) setPopover();
      });
      onBeforeUnmount(() => {
        detachEvents();
      });

      watch(
        () => props.opened,
        () => setPopover()
      );

      const onBackdropClick = (e) => {
        ctx.emit('backdropclick', e);
      };

      const popoverStyle = computed(() =>
        positions.value.set
          ? {
              left: positions.value.popoverLeft,
              top: positions.value.popoverTop,
            }
          : {}
      );

      const angleStyle = computed(() =>
        positions.value.set
          ? {
              left: positions.value.angleLeft,
              top: positions.value.angleTop,
            }
          : undefined
      );

      const originClasses = {
        'top-right': 'origin-bottom-left',
        'top-left': 'origin-bottom-right',
        'middle-left': 'origin-right',
        'middle-right': 'origin-left',
        'bottom-right': 'origin-top-left',
        'bottom-left': 'origin-top-right',
      };
      const classes = computed(() =>
        cls(
          c.value.base[state.value],
          theme.value === 'material' &&
            originClasses[positions.value.popoverPosition],
          ctx.attrs.class
        )
      );

      return {
        onBackdropClick,
        c,
        state,
        elRef,
        angleElRef,
        classes,
        popoverStyle,
        angleStyle,
        positions,
        theme,
      };
    },
  };
</script>
