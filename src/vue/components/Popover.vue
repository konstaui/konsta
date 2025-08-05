<template>
  <div v-if="backdrop" :class="c.backdrop[state]" @click="onBackdropClick" />
  <component :is="component" ref="elRef" :style="popoverStyle" :class="classes">
    <div
      v-if="angle"
      ref="angleElRef"
      :style="angleStyle"
      :class="c.angleWrap[positions.anglePosition]"
    >
      <div :class="c.angleArrow[positions.anglePosition]" />
    </div>
    <k-glass :class="c.inner[state]"><slot /></k-glass>
  </component>
</template>
<script>
  /* eslint-disable no-restricted-globals */

  import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';

  import { cls } from '../../shared/cls.js';

  import { themeClasses } from '../shared/use-theme-classes.js';

  import { useContext } from '../shared/use-context.js';
  import { useTheme } from '../shared/use-theme.js';
  import { calcPopoverPosition } from '../../shared/calc-popover-position.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
  import { PopoverClasses } from '../../shared/classes/PopoverClasses.js';
  import { PopoverColors } from '../../shared/colors/PopoverColors.js';
  import kGlass from './Glass.vue';

  export default {
    name: 'k-popover',
    components: {
      kGlass,
    },
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
      angle: { type: Boolean, default: false },
      angleClass: { type: String, default: '' },
      target: { type: [Object, String], default: undefined },
      targetX: { type: Number, default: undefined },
      targetY: { type: Number, default: undefined },
      targetWidth: { type: Number, default: undefined },
      targetHeight: { type: Number, default: undefined },
    },
    emits: ['backdropclick'],
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
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
      const theme = useTheme(props, context);

      const state = computed(() => (props.opened ? 'opened' : 'closed'));

      const colors = computed(() =>
        PopoverColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(
        props,
        () => PopoverClasses(props, colors.value, useDarkClasses),
        ctx.attrs.class
      );

      const setPopover = () => {
        if (!props.target || !elRef.value || !props.opened) return;
        positions.value = calcPopoverPosition({
          popoverEl: elRef.value,
          targetEl: props.target,
          angleEl: angleElRef.value,
          needsAngle: props.angle,
          targetX: props.targetX,
          targetY: props.targetY,
          targetWidth: props.targetWidth,
          targetHeight: props.targetHeight,
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
        needsAngle: props.angle,
        angleStyle,
        positions,
        theme,
      };
    },
  };
</script>
