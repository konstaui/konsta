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
  import { FabClasses } from '../../shared/classes/FabClasses.js';
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

      const c = useThemeClasses(props, () => FabClasses(props, colors.value));
      return {
        rippleElRef,
        slots: ctx.slots,
        c,
      };
    },
  };
</script>
