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
  import { cls } from '../../shared/cls.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { LinkClasses } from '../../shared/classes/LinkClasses.js';

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
      const c = useThemeClasses(props, () =>
        LinkClasses(
          props,
          {
            textColor: textColor.value,
            needsTouchRipple: needsTouchRipple.value,
          },
          ctx.attrs.class
        )
      );

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
