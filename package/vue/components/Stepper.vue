<template>
  <component :is="component" :class="classes">
    <span ref="buttonLeftElRef" :class="buttonLeftClasses" @click="onMinus">
      <span :class="c.hBar" />
    </span>
    <input
      v-if="input && !buttonsOnly"
      :class="valueClasses"
      :placeholder="inputPlaceholder"
      :type="inputType"
      :value="value"
      :disabled="inputDisabled"
      :readonly="inputReadonly"
      @input="onInput"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
    />
    <span v-if="!input && !buttonsOnly" :class="valueClasses">{{ value }}</span>

    <span ref="buttonRightElRef" :class="buttonRightClasses" @click="onPlus">
      <span :class="c.hBar" />
      <span :class="c.vBar" />
    </span>
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { cls } from '../../shared/esm/cls.js';
  import { StepperClasses } from '../../shared/esm/classes/StepperClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';

  export default {
    name: 'k-stepper',
    props: {
      component: {
        type: String,
        default: 'span',
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

      value: { type: Number, default: 0 },
      input: { type: Boolean, default: false },
      inputType: { type: String, default: 'text' },
      inputPlaceholder: String,
      inputDisabled: Boolean,
      inputReadonly: Boolean,

      buttonsOnly: Boolean,

      rounded: Boolean,
      small: Boolean,
      large: Boolean,
      raised: Boolean,
      outline: Boolean,

      touchRipple: { type: Boolean, default: true },
    },
    emits: ['input', 'change', 'focus', 'blur', 'minus', 'plus'],
    setup(props, ctx) {
      const buttonLeftElRef = ref(null);
      const buttonRightElRef = ref(null);
      useTouchRipple(buttonLeftElRef, props);
      useTouchRipple(buttonRightElRef, props);

      const colors = computed(() => ({
        text: 'text-primary',
        border: 'border-primary',
        bg: 'bg-primary',
        activeBg: 'active:bg-primary',
        activeBgDark: 'active:bg-primary-dark',
        touchRipple: 'touch-ripple-primary',
        ...(props.colors || {}),
      }));

      const size = computed(() =>
        props.large ? 'large' : props.small ? 'small' : 'medium'
      );
      const style = computed(() =>
        props.outline && props.raised
          ? 'clear'
          : props.outline
          ? 'outline'
          : 'fill'
      );
      const shape = computed(() => (props.rounded ? 'rounded' : 'square'));

      const c = useThemeClasses(props, () =>
        StepperClasses(props, colors.value)
      );

      const classes = computed(() =>
        cls(
          c.value.base,
          props.raised && c.value.raised,
          c.value.size[size.value],
          c.value.shape[shape.value]
        )
      );
      const buttonLeftClasses = computed(() =>
        cls(
          c.value.button,
          c.value.buttonStyle[style.value],
          c.value.buttonLeftShape[shape.value]
        )
      );
      const buttonRightClasses = computed(() =>
        cls(
          c.value.button,
          c.value.buttonStyle[style.value],
          c.value.buttonRightShape[shape.value]
        )
      );

      const valueClasses = computed(() =>
        cls(props.input && c.value.input, c.value.value[style.value])
      );

      const onMinus = (e) => {
        ctx.emit('minus', e);
      };
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
      const onPlus = (e) => {
        ctx.emit('plus', e);
      };

      return {
        c,
        buttonLeftElRef,
        buttonRightElRef,
        classes,
        buttonLeftClasses,
        buttonRightClasses,
        valueClasses,
        onMinus,
        onInput,
        onChange,
        onFocus,
        onBlur,
        onPlus,
      };
    },
  };
</script>
