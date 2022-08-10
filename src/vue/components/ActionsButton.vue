<template>
  <component :is="Component" ref="rippleElRef" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { ActionsButtonClasses } from '../../shared/classes/ActionsButtonClasses.js';
  import { ActionsButtonColors } from '../../shared/colors/ActionsButtonColors.js';

  export default {
    name: 'k-actions-button',
    props: {
      component: {
        type: String,
        default: 'button',
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
      // Anchor props
      href: {
        type: [Boolean, String],
        default: undefined,
      },
      touchRipple: {
        type: Boolean,
        default: true,
      },
      hairlines: { type: Boolean, default: true },
      bold: { type: Boolean, default: false },
      fontSizeIos: { type: String, default: 'text-xl' },
      fontSizeMaterial: { type: String, default: 'text-base' },
    },
    setup(props, ctx) {
      const rippleElRef = ref(null);
      const Component = computed(() => {
        let c = props.component;
        if (
          typeof props.component === 'undefined' &&
          (props.href || props.href === '')
        ) {
          c = 'a';
        }
        return c;
      });

      useTouchRipple(rippleElRef, props);

      const colors = computed(() =>
        ActionsButtonColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(
        props,
        () => ActionsButtonClasses(props, colors.value, useDarkClasses),
        ctx.attrs.class
      );

      return {
        c,
        Component,
        rippleElRef,
      };
    },
  };
</script>
