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
  import { cls } from '../shared/cls.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';

  export default {
    name: 'twm-stepper',
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

      const c = useThemeClasses(props, () => ({
        base: `${colors.value.text} inline-flex items-stretch`,
        raised: 'shadow',
        size: {
          small: 'h-7',
          medium: {
            ios: `h-7`,
            material: `h-9`,
          },
          large: {
            ios: `h-11`,
            material: `h-12`,
          },
        },
        shape: {
          square: 'rounded',
          rounded: 'rounded-full',
        },
        button: {
          common:
            'relative flex items-center justify-center w-10 cursor-pointer overflow-hidden z-10 select-none',
        },
        buttonLeftShape: {
          square: 'rounded-l',
          rounded: 'rounded-l-full',
        },
        buttonRightShape: {
          square: 'rounded-r',
          rounded: 'rounded-r-full',
        },
        buttonStyle: {
          fill: cls(
            'text-white',
            colors.value.bg,
            colors.value.activeBgDark,
            'touch-ripple-white',
            props.buttonsOnly && 'first:border-r border-black border-opacity-10'
          ),
          outline: cls(
            'border-2',
            colors.value.border,
            colors.value.text,
            colors.value.touchRipple,
            colors.value.activeBg,
            'active:bg-opacity-15',
            props.buttonsOnly && 'first:border-r-0'
          ),

          clear: `${colors.value.text} ${colors.value.activeBg} ${colors.value.touchRipple} active:bg-opacity-15 last:border-l border-black border-opacity-10`,
        },
        input: {
          common:
            'focus:outline-none text-center appearance-none bg-transparent',
        },
        value: {
          common: `w-11 flex items-center justify-center ${colors.value.text} font-medium`,
          ios: 'text-base',
          material: 'text-sm',
          fill: `border-t-2 border-b-2 ${colors.value.border} ${colors.value.text}`,
          outline: `border-t-2 border-b-2 ${colors.value.border} ${colors.value.text}`,
          clear: 'border-l border-black border-opacity-10',
        },
        hBar: 'w-4 h-0.5 bg-current block',
        vBar: 'w-0.5 h-4 bg-current block absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2',
      }));

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
