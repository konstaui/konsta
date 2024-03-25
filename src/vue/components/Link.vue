<template>
  <component
    :is="component"
    ref="rippleElRef"
    :class="classes"
    v-bind="linkProps"
    role="link"
    tabindex="0"
  >
    <slot />
  </component>
</template>
<script>
  import { computed, ref } from 'vue';
  import { cls } from '../../shared/cls.js';
  import { useContext } from '../shared/use-context.js';

  import { useTheme } from '../shared/use-theme.js';

  import { themeClasses } from '../shared/use-theme-classes.js';

  import { useTouchRipple } from '../shared/use-touch-ripple.js';

  import { darkClasses } from '../shared/use-dark-classes.js';

  import { LinkClasses } from '../../shared/classes/LinkClasses.js';

  import { LinkColors } from '../../shared/colors/LinkColors.js';

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
      linkProps: { type: Object, default: () => ({}) },

      // Toolbar/navbar link
      navbar: Boolean,
      toolbar: Boolean,

      iconOnly: Boolean,

      tabbar: Boolean,
      tabbarActive: Boolean,

      touchRipple: { type: Boolean, default: undefined },
    },
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const rippleElRef = ref(null);
      const theme = useTheme(props, context);

      const needsTouchRipple = computed(
        () =>
          theme.value === 'material' &&
          (props.touchRipple ||
            (typeof props.touchRipple === 'undefined' &&
              (props.toolbar || props.tabbar || props.navbar)))
      );

      useTouchRipple(rippleElRef, props, {
        context,
        addCondition: () =>
          props.touchRipple ||
          (typeof props.touchRipple === 'undefined' &&
            (props.toolbar || props.tabbar || props.navbar)),
      });

      const colors = computed(() =>
        LinkColors(props.colors || {}, useDarkClasses)
      );

      // prettier-ignore
      const themeTextColor = computed(() => props.navbar ?
        (
          theme.value === 'material' ? colors.value.navbarTextMaterial : colors.value.navbarTextIos
        ) :
        (
          theme.value === 'material' ? colors.value.textMaterial : colors.value.textIos
        )
      );

      const textColor = computed(() =>
        props.tabbar && !props.tabbarActive
          ? colors.value.tabbarInactive
          : themeTextColor.value
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
