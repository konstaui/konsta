<template>
  <component :is="component" :class="c.base">
    <span ref="trackBgRef" :class="c.trackBg" />
    <span
      :class="c.trackValue"
      :style="{
        width:
          theme === 'ios' ? `${valueWidth}%` : `calc(${thumbOffset * 100}%)`,
      }"
    />
    <template v-if="theme === 'material'">
      <span
        :class="c.trackEmpty"
        :style="{ width: `calc(${100 - thumbOffset * 100}% - 16px)` }"
      />
      <span :class="c.stop" />
    </template>
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
    <span
      :style="{ insetInlineStart: `${thumbOffset * 100}%` }"
      :class="c.thumbWrap"
      ref="thumbWrapRef"
    >
      <span v-if="theme === 'ios'" :class="c.thumbShadow" />
      <span :class="c.thumb" />
    </span>
  </component>
</template>
<script>
  import { computed, ref, onMounted, onBeforeUnmount, watch } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { cls } from '../../shared/cls.js';
  import { RangeClasses } from '../../shared/classes/RangeClasses.js';
  import { RangeColors } from '../../shared/colors/RangeColors.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';

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
      const theme = useTheme(props, context);
      const colors = computed(() =>
        RangeColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        RangeClasses(props, colors.value, useDarkClasses, ctx.attrs.class)
      );

      const thumbWrapRef = ref(null);
      const trackBgRef = ref(null);
      const thumbOffset = ref(0);
      const thumbPercentOffset = ref(0);

      const valueWidth = computed(
        () => (((props.value || 0) - props.min) / (props.max - props.min)) * 100
      );

      const calcThumbOffset = () => {
        if (!thumbWrapRef.value) return;
        const thumbWidth = thumbWrapRef.value.offsetWidth;
        const trackWidth = trackBgRef.value.offsetWidth;
        const percentOffset = thumbWidth / trackWidth;
        thumbPercentOffset.value = percentOffset;
      };
      const updateThumbOffset = () => {
        const percent = (props.value - props.min) / (props.max - props.min);
        thumbOffset.value = percent * (1 - thumbPercentOffset.value);
      };
      const onResize = () => {
        calcThumbOffset();
        updateThumbOffset();
      };
      onMounted(() => {
        window.addEventListener('resize', onResize);
        calcThumbOffset();
        updateThumbOffset();
      });
      onBeforeUnmount(() => {
        window.removeEventListener('resize', onResize);
      });

      watch(
        () => props.value,
        () => {
          updateThumbOffset();
        }
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
        thumbWrapRef,
        trackBgRef,
        thumbOffset,
        thumbPercentOffset,
        theme,
      };
    },
  };
</script>
