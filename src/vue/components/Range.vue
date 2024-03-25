<template>
  <component :is="component" :class="c.base">
    <span :class="c.trackBg" />
    <span :class="c.trackValue" :style="{ width: `${valueWidth}%` }" />
    <input
      :id="inputId"
      :class="cls(c.input, c.inputThumb, c.inputTrack)"
      type="range"
      :name="name"
      :min="min"
      :max="max"
      :step="step"
      :value="value"
      :readonly="readonly"
      :disabled="disabled"
      @input="onInput"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
    />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useContext } from '../shared/use-context.js';

  import { cls } from '../../shared/cls.js';

  import { RangeClasses } from '../../shared/classes/RangeClasses.js';

  import { RangeColors } from '../../shared/colors/RangeColors.js';

  import { darkClasses } from '../shared/use-dark-classes.js';

  import { themeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-range',
    props: {
      component: {
        type: String,
        default: 'div',
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
      inputId: { type: String, default: undefined },
      name: { type: String, default: undefined },
      value: { type: Number, default: undefined },
      readonly: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
      step: { type: Number, default: 1 },
      min: { type: Number, default: 0 },
      max: { type: Number, default: 100 },
    },
    emits: ['input', 'change', 'focus', 'blur'],
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const colors = computed(() =>
        RangeColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        RangeClasses(props, colors.value, useDarkClasses)
      );

      const valueWidth = computed(
        () => (((props.value || 0) - props.min) / (props.max - props.min)) * 100
      );
      const onInput = (e) => {
        ctx.emit('input', e);
      };
      const onChange = (e) => {
        ctx.emit('change', e);
      };
      const onFocus = (e) => {
        ctx.emit('focus', e);
      };
      const onBlur = (e) => {
        ctx.emit('blur', e);
      };
      return {
        c,
        valueWidth,
        cls,
        onInput,
        onChange,
        onFocus,
        onBlur,
      };
    },
  };
</script>
