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
  import { computed, ref, inject } from 'vue';
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
      iconOnly: Boolean,
      tabbarActive: Boolean,
    },
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const rippleElRef = ref(null);
      const theme = useTheme(props, context);
      const ToolbarContext = inject('ToolbarContext', { value: {} });
      const NavbarContext = inject('NavbarContext', { value: {} });

      const needsTouchRipple = computed(
        () =>
          theme.value === 'material' &&
          (ToolbarContext.value.toolbar ||
            ToolbarContext.value.tabbar ||
            NavbarContext.value.navbar)
      );

      useTouchRipple(rippleElRef, props, {
        context,
        addCondition: () =>
          ToolbarContext.value.toolbar ||
          ToolbarContext.value.tabbar ||
          NavbarContext.value.navbar,
      });

      const colors = computed(() =>
        LinkColors(props.colors || {}, useDarkClasses)
      );

      // prettier-ignore
      const themeTextColor = computed(() => NavbarContext.value.navbar ?
        (
          theme.value === 'material' ? colors.value.navbarTextMaterial : colors.value.navbarTextIos
        ) : ToolbarContext.value.toolbar ? (theme.value === 'material' ? colors.value.toolbarTextMaterial : colors.value.toolbarTextIos) :
        (
          theme.value === 'material' ? colors.value.textMaterial : colors.value.textIos
        )
      );

      const textColor = computed(() =>
        ToolbarContext.value.tabbar && !props.tabbarActive
          ? colors.value.tabbarInactive
          : themeTextColor.value
      );
      const tabbarState = computed(() =>
        props.tabbarActive ? 'active' : 'inactive'
      );
      const c = useThemeClasses(props, () =>
        LinkClasses(
          {
            ...props,
            tabbarLabels: ToolbarContext.value.tabbarLabels,
            tabbarIcons: ToolbarContext.value.tabbarIcons,
            tabbar: ToolbarContext.value.tabbar,
            toolbar: ToolbarContext.value.toolbar,
          },
          {
            textColor: textColor.value,
            needsTouchRipple: needsTouchRipple.value,
          }
        )
      );

      const classes = computed(() =>
        cls(
          // base
          c.value.base,

          ToolbarContext.value.toolbar && c.value.toolbar,

          NavbarContext.value.navbar && c.value.navbar,

          ToolbarContext.value.tabbar && c.value.tabbar[tabbarState.value]
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
