<template>
  <component :is="component" ref="rippleElRef" :class="classes">
    <span
      v-if="theme === 'material' && tabbar"
      :class="c.tabbarHighlight[tabbarState]"
    />
    <slot />
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { cls } from '../shared/cls.js';
  import { positionClass } from '../shared/position-class.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  export default {
    name: 'k-link',
    props: {
      component: {
        type: String,
        default: 'a',
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

      // Toolbar/navbar link
      navbar: Boolean,
      toolbar: Boolean,

      iconOnly: Boolean,

      tabbar: Boolean,
      tabbarActive: Boolean,

      touchRipple: { type: Boolean, default: true },
    },
    setup(props, ctx) {
      const rippleElRef = ref(null);
      const theme = useTheme(props);

      const needsTouchRipple = computed(
        () =>
          theme.value === 'material' &&
          props.touchRipple &&
          (props.toolbar || props.tabbar || props.navbar)
      );

      useTouchRipple(
        rippleElRef,
        props,
        () => props.toolbar || props.tabbar || props.navbar
      );

      const colors = computed(() => ({
        text: 'text-primary',
        tabbarInactive: cls(
          `text-black`,
          useDarkClasses('dark:text-white dark:text-opacity-55')
        ),
        ...(props.colors || {}),
      }));

      const textColor = computed(() =>
        props.tabbar && !props.tabbarActive
          ? colors.value.tabbarInactive
          : colors.value.text
      );
      const tabbarState = computed(() =>
        props.tabbarActive ? 'active' : 'inactive'
      );

      const c = useThemeClasses(props, () => ({
        base: {
          common: cls(
            textColor.value,
            `inline-flex space-x-1 justify-center items-center cursor-pointer select-none`,
            needsTouchRipple.value &&
              `touch-ripple-primary ${positionClass(
                'relative',
                ctx.attrs.class
              )} z-10`
          ),
          notTabbar: {
            ios: `active:opacity-30 duration-300 active:duration-0`,
            material: needsTouchRipple.value ? '' : `active:opacity-55`,
          },
        },
        tabbar: {
          common: cls(
            positionClass('relative', ctx.attrs.class),
            `w-full h-full duration-300`
          ),
          material: 'uppercase font-medium text-sm overflow-hidden z-10',
          active: {},
          inactive: {
            ios: 'text-opacity-40',
            material: 'text-opacity-55',
          },
        },
        tabbarHighlight: {
          material:
            'absolute left-0 top-0 w-full h-0.5 bg-primary duration-300',
          active: 'opacity-100',
          inactive: 'opacity-0',
        },
        toolbar: {
          common: cls(
            `h-full max-h-12`,
            props.iconOnly && 'touch-ripple-inset'
          ),
          material: 'px-3',
        },
        navbar: {
          common: cls(
            `h-full max-h-12`,
            props.iconOnly && 'touch-ripple-inset'
          ),
          material: 'px-3',
        },
      }));

      const classes = computed(() =>
        cls(
          // base
          c.value.base[props.tabbar ? 'default' : 'notTabbar'],

          props.toolbar && c.value.toolbar,

          props.navbar && c.value.navbar,

          props.tabbar && c.value.tabbar[tabbarState.value]
        )
      );
      return {
        c,
        classes,
        rippleElRef,
        theme,
        tabbarState,
      };
    },
  };
</script>
