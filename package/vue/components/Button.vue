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
  import { cls } from '../../shared/esm/cls.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { ButtonClasses } from '../../shared/esm/classes/ButtonClasses.js';

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
          : 'fill';
        if (props.segmentedStrong) value = 'segmentedStrong';
        if (props.segmentedStrong && props.segmentedActive)
          value = 'segmentedStrongActive';
        return value;
      });
      const colors = computed(() => ({
        text: 'text-primary',
        border: 'border-primary',
        bg: 'bg-primary',
        activeBg: 'active:bg-primary',
        activeBgDark: 'active:bg-primary-dark',
        touchRipple: 'touch-ripple-primary',
        disabledText: cls(
          'text-black text-opacity-30',
          useDarkClasses('dark:text-white dark:text-opacity-30')
        ),
        disabledBg: cls(
          'bg-black bg-opacity-10',
          useDarkClasses('dark:bg-white dark:bg-opacity-10')
        ),
        disabledBorder: cls(
          'border-black border-opacity-10',
          useDarkClasses('dark:border-white dark:border-opacity-10')
        ),
        ...(props.colors || {}),
      }));

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
