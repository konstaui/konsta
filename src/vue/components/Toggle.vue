<template>
  <component :is="component" ref="elRef" :class="c.base[state]">
    <input
      type="checkbox"
      :name="name"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :checked="checked"
      :class="c.input"
    />
    <template v-if="theme === 'ios'">
      <span :class="c.thumbSide[state]" />
      <span :class="c.thumbBg[state]" />
      <span :class="c.thumbShadow[state]" />
      <span ref="rippleTargetElRef" :class="c.thumbWrap[state]">
        <span :class="c.thumb[state]" />
      </span>
    </template>
    <span v-else ref="rippleTargetElRef" :class="c.thumbWrap[state]">
      <span :class="c.thumb[state]" />
    </span>
    <slot />
  </component>
</template>
<script>
  import { computed, ref } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { ToggleClasses } from '../../shared/classes/ToggleClasses.js';
  import { ToggleColors } from '../../shared/colors/ToggleColors.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import { useTheme } from '../shared/use-theme.js';
  export default {
    name: 'k-toggle',
    props: {
      component: {
        type: String,
        default: 'label',
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
      checked: { type: Boolean, default: false },
      name: { type: String, default: undefined },
      value: { type: [Number, String], default: undefined },
      disabled: { type: Boolean, default: false },
      readonly: { type: Boolean, default: false },
    },
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const elRef = ref(null);
      const rippleTargetElRef = ref(null);
      const theme = useTheme(props, context);

      useTouchRipple(rippleTargetElRef, props, { eventsElRef: elRef, context });

      const colors = computed(() =>
        ToggleColors(props.colors || {}, useDarkClasses)
      );

      const state = computed(() => (props.checked ? 'checked' : 'notChecked'));

      const c = useThemeClasses(props, () =>
        ToggleClasses(props, colors.value, useDarkClasses, ctx.attrs.class)
      );

      return {
        elRef,
        rippleTargetElRef,
        c,
        state,
        theme,
      };
    },
  };
</script>
