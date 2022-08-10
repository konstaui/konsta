<template>
  <component
    :is="Component"
    ref="rippleElRef"
    :class="classes"
    :disabled="disabled"
  >
    <slot />
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { cls } from '../../shared/cls.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
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
        default: false,
      },
      clear: {
        type: Boolean,
        default: false,
      },
      tonal: {
        type: Boolean,
        default: false,
      },
      rounded: {
        type: Boolean,
        default: false,
      },
      small: {
        type: Boolean,
        default: false,
      },
      large: {
        type: Boolean,
        default: false,
      },
      raised: {
        type: Boolean,
        default: false,
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

      touchRipple: {
        type: Boolean,
        default: true,
      },

      disabled: {
        type: Boolean,
        default: false,
      },
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

      const size = computed(() =>
        props.large ? 'large' : props.small ? 'small' : 'medium'
      );
      const style = computed(() => {
        let value = props.outline
          ? 'outline'
          : props.clear || (props.segmented && !props.segmentedActive)
          ? 'clear'
          : props.tonal
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
        ButtonClasses(props, colors.value, ctx.attrs.class, useDarkClasses)
      );

      const classes = computed(() =>
        cls(
          c.value.base[props.rounded ? 'rounded' : 'square'],

          // style
          c.value.style[style.value],

          // size
          c.value.size[size.value],

          props.raised && c.value.raised
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
