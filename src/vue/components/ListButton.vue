<template>
  <component :is="component" :class="c.base">
    <component
      :is="ButtonComponent"
      ref="rippleElRef"
      :class="c.button"
      v-bind="buttonAttrs"
    >
      <slot />
    </component>
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { ListButtonClasses } from '../../shared/classes/ListButtonClasses.js';
  import { ListButtonColors } from '../../shared/colors/ListButtonColors.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';

  export default {
    name: 'k-list-button',
    props: {
      component: {
        type: String,
        default: 'li',
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
      hairlines: { type: Boolean, default: true },

      // Link props
      href: { type: [String, Boolean], default: undefined },
      target: { type: String, default: undefined },

      // Button props
      type: { type: String, default: undefined },
      value: { type: [String, Number], default: undefined },

      linkComponent: { type: String, default: 'a' },
      linkProps: { type: Object, default: () => ({}) },

      touchRipple: { type: Boolean, default: true },
    },
    setup(props, ctx) {
      const rippleElRef = ref(null);
      useTouchRipple(rippleElRef, props);

      const colors = computed(() =>
        ListButtonColors(props.colors || {}, useDarkClasses)
      );

      const theme = useTheme(props);

      const c = useThemeClasses(props, () =>
        ListButtonClasses(props, colors.value, ctx.attrs.class, theme.value)
      );

      const isLink = computed(() => !!props.href || props.href === '');
      const hrefComputed = computed(() =>
        !isLink.value || props.href === true || props.href === false
          ? undefined
          : props.href || ''
      );
      const buttonAttrs = computed(() => ({
        href: hrefComputed.value,
        target: props.target,
        type: props.type,
        value: props.value,
        ...(props.linkProps || {}),
      }));

      const ButtonComponent = computed(() =>
        isLink.value ? props.linkComponent : 'button'
      );
      return {
        rippleElRef,
        c,
        buttonAttrs,
        ButtonComponent,
      };
    },
  };
</script>
