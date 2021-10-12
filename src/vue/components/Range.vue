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
  import { cls } from '../shared/cls.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'twm-range',
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
      const colors = computed(() => ({
        valueBg: 'bg-primary',
        thumbBgIos: 'range-thumb:bg-white',
        thumbBgMaterial: 'range-thumb:bg-primary',
        ...(props.colors || {}),
      }));

      const c = useThemeClasses(props, () => ({
        base: {
          common: 'block relative select-none w-full self-center touch-pan-y',
          ios: 'h-7',
          material: 'h-5',
        },
        trackBg: {
          common: cls(
            'absolute top-1/2 left-0 w-full transform -translate-y-1/2 bg-black bg-opacity-20',
            useDarkClasses('dark:bg-white dark:bg-opacity-20')
          ),
          ios: 'h-1 rounded-full',
          material: 'h-0.5',
        },
        trackValue: {
          common: `absolute top-1/2 left-0 w-full transform -translate-y-1/2 ${colors.value.valueBg}`,
          ios: 'h-1 rounded-full',
          material: 'h-0.5',
        },
        input: {
          common:
            'appearance-none w-full bg-transparent cursor-pointer block focus:outline-none relative',
          ios: 'h-7',
          material: 'h-5',
        },

        inputThumb: {
          common:
            'range-thumb:relative range-thumb:appearance-none range-thumb:rounded-full range-thumb:border-none',
          ios: `range-thumb:w-7 range-thumb:h-7 range-thumb:-mt-3.5 ${colors.value.thumbBgIos} range-thumb:shadow-ios-toggle`,
          material: `range-thumb:w-3 range-thumb:h-3 ${colors.value.thumbBgMaterial} range-thumb:-mt-1.5 range-thumb:transform range-thumb:duration-200 active:range-thumb:scale-150`,
        },
        inputTrack: {
          common: 'range-track:appearance-none range-track:h-px',
        },
      }));

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
