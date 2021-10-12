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
  import { cls } from '../shared/cls.js';
  import { positionClass } from '../shared/position-class.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';

  export default {
    name: 'twm-list-button',
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
      const theme = useTheme(props);
      useTouchRipple(rippleElRef, props);

      const colors = computed(() => ({
        text: 'text-primary',
        activeBg: 'active:bg-primary',
        touchRipple: 'touch-ripple-primary',
        ...(props.colors || {}),
      }));

      const c = useThemeClasses(props, () => ({
        base: ``,
        button: {
          common: cls(
            positionClass('relative', ctx.attrs.class),
            props.hairlines && 'hairline-b active:hairline-transparent',
            `flex items-center justify-center px-4 space-x-1 active:bg-opacity-15 w-full duration-300 active:duration-0 focus:outline-none ${colors.value.text} ${colors.value.activeBg} ${colors.value.touchRipple} overflow-hidden select-none`
          ),
          ios: 'h-11',
          material: 'h-12',
        },
      }));

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
