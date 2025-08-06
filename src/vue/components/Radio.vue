<template>
  <component :is="component" ref="elRef" :class="c.base">
    <input
      type="radio"
      :name="name"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :checked="checked"
      :class="c.input"
      @change="onChange"
    />

    <i :class="c.iconWrap[state]">
      <CheckboxIcon v-if="theme === 'ios'" :class="c.icon[state]" />
      <span v-else :class="c.icon[state]" />
    </i>
    <slot />
  </component>
</template>
<script>
  import { computed, ref } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
  import CheckboxIcon from './icons/CheckboxIcon.vue';
  import { RadioClasses } from '../../shared/classes/RadioClasses.js';
  import { RadioColors } from '../../shared/colors/RadioColors.js';

  export default {
    name: 'k-radio',
    components: {
      CheckboxIcon,
    },
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
    emits: ['change'],
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const elRef = ref(null);
      const theme = useTheme(props, context);

      useTouchRipple(elRef, props, { context });

      const colors = computed(() =>
        RadioColors(props.colors || {}, useDarkClasses)
      );

      const state = computed(() => (props.checked ? 'checked' : 'notChecked'));

      const c = useThemeClasses(props, () =>
        RadioClasses(props, colors.value, useDarkClasses, ctx.attrs.class)
      );

      const onChange = (e) => {
        ctx.emit('change', e);
      };

      return {
        elRef,
        onChange,
        c,
        state,
        theme,
      };
    },
  };
</script>
