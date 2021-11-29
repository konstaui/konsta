<template>
  <component
    :is="component"
    ref="rippleElRef"
    :class="text || slots.text ? c.base.withText : c.base.iconOnly"
    :href="href"
  >
    <span
      v-if="(text || slots.text) && textPosition === 'before'"
      :class="c.text"
      >{{ text }}<slot name="text"
    /></span>
    <span v-if="slots.icon" :class="c.icon"><slot name="icon" /></span>
    <span
      v-if="(text || slots.text) && textPosition === 'after'"
      :class="c.text"
      >{{ text }}<slot name="text"
    /></span>
    <slot />
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';

  export default {
    name: 'k-fab',
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
      href: { type: [String, Boolean], default: undefined },
      text: { type: String, default: undefined },
      textPosition: { type: String, default: 'after' },
      touchRipple: { type: Boolean, default: true },
    },
    setup(props, ctx) {
      const rippleElRef = ref(null);
      useTouchRipple(rippleElRef, props);

      const colors = computed(() => ({
        bg: 'bg-primary',
        activeBg: 'active:bg-primary-dark',
        text: 'text-white',
        ...(props.colors || {}),
      }));

      const c = useThemeClasses(props, () => ({
        base: {
          common: `${colors.value.bg} ${colors.value.activeBg} ${colors.value.text} flex items-center justify-center space-x-2 rounded-full shadow-lg cursor-pointer overflow-hidden select-none`,
          ios: `h-12 duration-100`,
          material: `duration-300 touch-ripple-white`,
          iconOnly: {
            ios: 'w-12',
            material: 'w-14 h-14',
          },
          withText: {
            common: 'px-4',
            material: 'h-12',
          },
        },
        text: {
          common: 'uppercase text-sm',
          ios: 'font-semibold',
          material: 'font-medium tracking-wider',
        },
        icon: {
          common: 'h-1em w-1em',
          ios: 'text-icon-ios',
          material: 'text-icon-material',
        },
      }));
      return {
        rippleElRef,
        slots: ctx.slots,
        c,
      };
    },
  };
</script>
