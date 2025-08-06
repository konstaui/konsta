<template>
  <component :is="component" :class="classes">
    <span
      ref="buttonLeftElRef"
      :class="buttonLeftClasses"
      role="button"
      tabindex="0"
      @click="onMinus"
    >
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

    <span
      ref="buttonRightElRef"
      :class="buttonRightClasses"
      role="button"
      tabindex="0"
      @click="onPlus"
    >
      <span :class="c.hBar" />
      <span :class="c.vBar" />
    </span>
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { useContext } from '../shared/use-context.js';

  import { cls } from '../../shared/cls.js';

  import { StepperClasses } from '../../shared/classes/StepperClasses.js';

  import { StepperColors } from '../../shared/colors/StepperColors.js';

  import { useTheme } from '../shared/use-theme.js';

  import { themeClasses } from '../shared/use-theme-classes.js';

  import { darkClasses } from '../shared/use-dark-classes.js';

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

      rounded: { type: Boolean, default: undefined },
      roundedIos: { type: Boolean, default: undefined },
      roundedMaterial: { type: Boolean, default: undefined },
      small: { type: Boolean, default: undefined },
      smallIos: { type: Boolean, default: undefined },
      smallMaterial: { type: Boolean, default: undefined },
      large: { type: Boolean, default: undefined },
      largeIos: { type: Boolean, default: undefined },
      largeMaterial: { type: Boolean, default: undefined },
      raised: { type: Boolean, default: undefined },
      raisedIos: { type: Boolean, default: undefined },
      raisedMaterial: { type: Boolean, default: undefined },
      outline: { type: Boolean, default: undefined },
      outlineIos: { type: Boolean, default: undefined },
      outlineMaterial: { type: Boolean, default: undefined },
    },
    emits: ['input', 'change', 'focus', 'blur', 'minus', 'plus'],
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const theme = useTheme({}, context);
      const buttonLeftElRef = ref(null);
      const buttonRightElRef = ref(null);
      useTouchRipple(buttonLeftElRef, props, { context });
      useTouchRipple(buttonRightElRef, props, { context });

      const colors = computed(() =>
        StepperColors(props.colors || {}, useDarkClasses)
      );

      const isRounded = computed(() =>
        typeof props.rounded === 'undefined'
          ? theme.value === 'ios'
            ? props.roundedIos
            : props.roundedMaterial
          : props.rounded
      );
      const isSmall = computed(() =>
        typeof props.small === 'undefined'
          ? theme.value === 'ios'
            ? props.smallIos
            : props.smallMaterial
          : props.small
      );
      const isLarge = computed(() =>
        typeof props.large === 'undefined'
          ? theme.value === 'ios'
            ? props.largeIos
            : props.largeMaterial
          : props.large
      );
      const isRaised = computed(() =>
        typeof props.raised === 'undefined'
          ? theme.value === 'ios'
            ? props.raisedIos
            : props.raisedMaterial
          : props.raised
      );
      const isOutline = computed(() =>
        typeof props.outline === 'undefined'
          ? theme.value === 'ios'
            ? props.outlineIos
            : props.outlineMaterial
          : props.outline
      );

      const size = computed(() =>
        isLarge.value ? 'large' : isSmall.value ? 'small' : 'medium'
      );
      const style = computed(() =>
        isOutline.value && isRaised.value
          ? 'clear'
          : isOutline.value
            ? 'outline'
            : 'fill'
      );
      const shape = computed(() => (isRounded.value ? 'rounded' : 'square'));

      const c = useThemeClasses(props, () =>
        StepperClasses(
          {
            ...props,
            rounded: isRounded.value,
            small: isSmall.value,
            large: isLarge.value,
            raised: isRaised.value,
            outline: isOutline.value,
          },
          colors.value
        )
      );

      const classes = computed(() =>
        cls(
          c.value.base,
          isRaised.value && c.value.raised,
          c.value.size[size.value],
          c.value.shape[shape.value],
          ctx.attrs.class
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
