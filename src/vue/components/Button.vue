<template>
  <component
    :is="Component"
    ref="rippleElRef"
    :class="classes"
    :disabled="disabled"
    role="button"
    tabindex="0"
  >
    <slot />
  </component>
</template>
<script>
  import { computed, ref } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { cls } from '../../shared/cls.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
  import { ButtonClasses } from '../../shared/classes/ButtonClasses.js';
  import { ButtonColors } from '../../shared/colors/ButtonColors.js';

  export default {
    name: 'k-button',
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

      // Style props
      outline: {
        type: Boolean,
        default: undefined,
      },
      outlineIos: {
        type: Boolean,
        default: undefined,
      },
      outlineMaterial: {
        type: Boolean,
        default: undefined,
      },
      clear: {
        type: Boolean,
        default: undefined,
      },
      clearIos: {
        type: Boolean,
        default: undefined,
      },
      clearMaterial: {
        type: Boolean,
        default: undefined,
      },
      tonal: {
        type: Boolean,
        default: undefined,
      },
      tonalIos: {
        type: Boolean,
        default: undefined,
      },
      tonalMaterial: {
        type: Boolean,
        default: undefined,
      },
      rounded: {
        type: Boolean,
        default: undefined,
      },
      roundedIos: {
        type: Boolean,
        default: undefined,
      },
      roundedMaterial: {
        type: Boolean,
        default: undefined,
      },
      small: {
        type: Boolean,
        default: undefined,
      },
      smallIos: {
        type: Boolean,
        default: undefined,
      },
      smallMaterial: {
        type: Boolean,
        default: undefined,
      },
      large: {
        type: Boolean,
        default: undefined,
      },
      largeIos: {
        type: Boolean,
        default: undefined,
      },
      largeMaterial: {
        type: Boolean,
        default: undefined,
      },
      raised: {
        type: Boolean,
        default: undefined,
      },
      raisedIos: {
        type: Boolean,
        default: undefined,
      },
      raisedMaterial: {
        type: Boolean,
        default: undefined,
      },

      inline: {
        type: Boolean,
        default: false,
      },

      // Segmented
      segmented: {
        type: Boolean,
        default: false,
      },
      segmentedStrong: {
        type: Boolean,
        default: false,
      },
      segmentedActive: {
        type: Boolean,
        default: false,
      },

      disabled: {
        type: Boolean,
        default: false,
      },
    },
    setup(props, ctx) {
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

      const theme = useTheme({}, context);

      const isOutline = computed(() =>
        typeof props.outline === 'undefined'
          ? theme.value === 'ios'
            ? props.outlineIos
            : props.outlineMaterial
          : props.outline
      );
      const isClear = computed(() =>
        typeof props.clear === 'undefined'
          ? theme.value === 'ios'
            ? props.clearIos
            : props.clearMaterial
          : props.clear
      );
      const isTonal = computed(() =>
        typeof props.tonal === 'undefined'
          ? theme.value === 'ios'
            ? props.tonalIos
            : props.tonalMaterial
          : props.tonal
      );
      const isRounded = computed(() =>
        typeof props.rounded === 'undefined'
          ? theme.value === 'ios'
            ? props.roundedIos
            : props.roundedMaterial
          : props.rounded
      );
      const isSmall = computed(() =>
        typeof props.small === 'undefined'
          ? theme.value === 'ios'
            ? props.smallIos
            : props.smallMaterial
          : props.small
      );
      const isLarge = computed(() =>
        typeof props.large === 'undefined'
          ? theme.value === 'ios'
            ? props.largeIos
            : props.largeMaterial
          : props.large
      );
      const isRaised = computed(() =>
        typeof props.raised === 'undefined'
          ? theme.value === 'ios'
            ? props.raisedIos
            : props.raisedMaterial
          : props.raised
      );

      const size = computed(() =>
        isLarge.value ? 'large' : isSmall.value ? 'small' : 'medium'
      );
      const style = computed(() => {
        let value = isOutline.value
          ? 'outline'
          : isClear.value || (props.segmented && !props.segmentedActive)
            ? 'clear'
            : isTonal.value
              ? 'tonal'
              : 'fill';
        if (props.segmentedStrong) value = 'segmentedStrong';
        if (props.segmentedStrong && props.segmentedActive)
          value = 'segmentedStrongActive';
        return value;
      });
      const colors = computed(() =>
        ButtonColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        ButtonClasses(
          {
            ...props,
            outline: isOutline.value,
            clear: isClear.value,
            tonal: isTonal.value,
            rounded: isRounded.value,
            small: isSmall.value,
            large: isLarge.value,
            raised: isRaised.value,
          },
          colors.value,
          useDarkClasses
        )
      );

      const classes = computed(() =>
        cls(
          c.value.base[isRounded.value ? 'rounded' : 'square'],

          // style
          c.value.style[style.value],

          // size
          c.value.size[size.value],

          isRaised.value && c.value.raised,

          ctx.attrs.class
        )
      );

      return {
        rippleElRef,
        classes,
        Component,
      };
    },
  };
</script>
