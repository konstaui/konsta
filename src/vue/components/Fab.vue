<template>
  <k-glass
    :component="component"
    ref="rippleElRef"
    :class="text || slots.text ? c.base.withText : c.base.iconOnly"
    role="button"
    tabindex="0"
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
  </k-glass>
</template>
<script>
  import { computed, ref } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { FabClasses } from '../../shared/classes/FabClasses.js';
  import { FabColors } from '../../shared/colors/FabColors.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
  import kGlass from './Glass.vue';

  export default {
    name: 'k-fab',
    components: {
      kGlass,
    },
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
    },
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const rippleElRef = ref(null);
      useTouchRipple(rippleElRef, props, { context });

      const colors = computed(() =>
        FabColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        FabClasses(props, colors.value, useDarkClasses, ctx.attrs.class)
      );
      return {
        rippleElRef,
        slots: ctx.slots,
        c,
      };
    },
  };
</script>
