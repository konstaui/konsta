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
  import { computed, inject, ref } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { ListButtonClasses } from '../../shared/classes/ListButtonClasses.js';
  import { ListButtonColors } from '../../shared/colors/ListButtonColors.js';
  import { useTheme } from '../shared/use-theme.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
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

      // Link props
      href: { type: [String, Boolean], default: undefined },
      target: { type: String, default: undefined },

      // Button props
      type: { type: String, default: undefined },
      value: { type: [String, Number], default: undefined },

      linkComponent: { type: String, default: 'a' },
      linkProps: { type: Object, default: () => ({}) },
    },
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const rippleElRef = ref(null);
      useTouchRipple(rippleElRef, props, { context });

      const ListContext = inject('ListContext', {
        value: { dividers: false, nested: false },
      });

      const colors = computed(() =>
        ListButtonColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        ListButtonClasses(
          { ...props, dividers: ListContext.value.dividers },
          colors.value,
          ctx.attrs.class
        )
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
