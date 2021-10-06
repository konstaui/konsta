<template>
  <component ref="rippleElRef" :is="Component" :class="classes">
    <slot />
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { cls } from '../shared/cls.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { positionClass } from '../shared/position-class.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  export default {
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
    },
    setup(props, ctx) {
      const rippleElRef = ref(null);
      let Component = props.component;
      if (
        typeof props.component === 'undefined' &&
        (props.href || props.href === '')
      )
        Component = 'a';

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
        ...(props.colors || {}),
      }));

      const c = useThemeClasses(props, () => ({
        base: {
          common: cls(
            'uppercase flex text-center justify-center items-center appearance-none px-2 py-1 transition-colors focus:outline-none cursor-pointer select-none overflow-hidden z-10',
            props.inline ? 'inline-flex' : 'w-full flex',
            positionClass('relative', ctx.attrs.class)
          ),
          ios: `duration-100 font-semibold`,
          material: `duration-300 font-medium tracking-wider`,

          square:
            props.segmented && !props.segmentedStrong
              ? 'first:rounded-l last:rounded-r'
              : 'rounded',
          rounded:
            props.segmented && !props.segmentedStrong ? '' : 'rounded-full',
        },
        style: {
          fill: `text-white ${colors.value.bg} ${colors.value.activeBgDark} touch-ripple-white`,
          outline: cls(
            !props.segmented && `border-2 ${colors.value.border}`,
            colors.value.text,
            colors.value.activeBg,
            'active:bg-opacity-15',
            colors.value.touchRipple
          ),
          clear: `${colors.value.text} ${colors.value.activeBg} active:bg-opacity-15 ${colors.value.touchRipple}`,
          segmentedStrong: cls(
            `active:bg-black active:bg-opacity-10`,
            useDarkClasses(
              'dark:active:bg-white dark:active:bg-opacity-5 dark:touch-ripple-white'
            )
          ),
          segmentedStrongActive: 'duration-0',
        },
        size: {
          small: {
            ios: `text-xs h-7`,
            material: `text-sm h-7`,
          },
          medium: {
            common: 'text-sm',
            ios: `h-7`,
            material: `h-9`,
          },
          large: {
            ios: `h-11`,
            material: `h-12`,
          },
        },
        raised: `shadow active:shadow-lg`,
      }));

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
