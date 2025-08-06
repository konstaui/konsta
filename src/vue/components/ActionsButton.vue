<template>
  <component
    :is="Component"
    ref="rippleElRef"
    role="button"
    tabindex="0"
    :class="c.base"
  >
    <slot />
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
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
      dividers: { type: Boolean, default: undefined },
      bold: { type: Boolean, default: undefined },
      boldIos: { type: Boolean, default: false },
      boldMaterial: { type: Boolean, default: false },
      fontSizeIos: { type: String, default: 'text-xl' },
      fontSizeMaterial: { type: String, default: 'text-base' },
    },
    setup(props) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
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

      useTouchRipple(rippleElRef, props, { context });

      const colors = computed(() =>
        ActionsButtonColors(props.colors || {}, useDarkClasses)
      );

      const theme = useTheme({}, context);

      const isDividers = computed(() =>
        typeof props.dividers === 'undefined'
          ? theme.value === 'ios'
          : props.dividers
      );

      const isBold = computed(() =>
        typeof props.bold === 'undefined'
          ? theme.value === 'ios'
            ? props.boldIos
            : props.boldMaterial
          : props.bold
      );

      const c = useThemeClasses(props, () =>
        ActionsButtonClasses(
          { ...props, bold: isBold.value, dividers: isDividers.value },
          colors.value,
          useDarkClasses
        )
      );

      return {
        c,
        Component,
        rippleElRef,
      };
    },
  };
</script>
