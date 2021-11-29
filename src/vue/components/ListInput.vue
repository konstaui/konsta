<template>
  <k-list-item
    :component="component"
    :class="c.base"
    :title="labelStyle === 'inline' ? label : null"
    :media-class="c.media[labelStyleIsInline]"
    :inner-class="c.inner[labelStyle]"
    :content-class="c.itemContent"
    :title-wrap-class="c.titleWrap[labelStyleIsInline]"
  >
    <template v-if="labelStyle === 'inline' ? label : null" #title>
      <slot name="label" />
    </template>
    <template v-if="slots.media" #media>
      <slot name="media" />
    </template>
    <template #inner>
      <div v-if="labelStyle !== 'inline' && label" :class="c.label[labelStyle]">
        {{ label }}<slot name="label" />
      </div>
      <div :class="c.inputWrap[labelStyle]">
        <component
          :is="InputComponent"
          v-if="!slots.input"
          :id="inputId"
          ref="inputElRef"
          :class="c.input[labelStyleIsFloating]"
          :style="inputStyle"
          :name="name"
          :placeholder="placeholder"
          :inputmode="inputmode"
          :size="size"
          :accept="accept"
          :autocomplete="autocomplete"
          :autocorrect="autocorrect"
          :autocapitalize="autocapitalize"
          :spellcheck="spellcheck"
          :autofocus="autofocus"
          :autosave="autosave"
          :disabled="disabled"
          :max="max"
          :maxlength="maxlength"
          :min="min"
          :minlength="minlength"
          :step="step"
          :multiple="multiple"
          :read-only="readonly"
          :required="required"
          :pattern="pattern"
          :tab-index="tabindex"
          v-bind="inputProps"
          @input="onInput"
          @change="onChange"
          @focus="onFocusInternal"
          @blur="onBlurInternal"
        >
          <slot v-if="type === 'select'" />
        </component>
        <slot v-if="slots.input" name="input" />
        <DeleteIcon
          v-if="clearButton"
          :class="c.clearButton"
          @click="onClear"
        />
        <DropdownIcon v-if="dropdown" :class="c.dropdown" />
        <template v-if="labelStyle === 'inline'">
          <!-- error info content -->
          <div
            v-if="(error && error !== true) || slots.error"
            :class="cls(c.errorInfo[labelStyleIsInline], c.error)"
          >
            {{ error }}<slot name="error" />
          </div>
          <div
            v-if="(info && !error) || slots.info"
            :class="cls(c.errorInfo[labelStyleIsInline], c.info)"
          >
            {{ info }}<slot name="info" />
          </div>
        </template>
      </div>
      <template v-if="labelStyle !== 'inline'">
        <!-- error info content -->
        <div
          v-if="(error && error !== true) || slots.error"
          :class="cls(c.errorInfo[labelStyleIsInline], c.error)"
        >
          {{ error }}<slot name="error" />
        </div>
        <div
          v-if="(info && !error) || slots.info"
          :class="cls(c.errorInfo[labelStyleIsInline], c.info)"
        >
          {{ info }}<slot name="info" />
        </div>
      </template>
    </template>
    <slot v-if="type !== 'select'" />
  </k-list-item>
</template>
<script>
  import { ref, computed } from 'vue';
  import { cls } from '../shared/cls.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  import DeleteIcon from './icons/DeleteIcon.vue';
  import DropdownIcon from './icons/DropdownIcon.vue';
  import kListItem from './ListItem.vue';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  export default {
    name: 'k-list-input',
    components: {
      DeleteIcon,
      DropdownIcon,
      kListItem,
    },
    props: {
      component: {
        type: String,
        default: 'li',
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
      label: String,
      inlineLabel: Boolean,
      floatingLabel: Boolean,
      info: String, // string
      error: String, // string or bool
      clearButton: Boolean,
      dropdown: Boolean,

      hairlines: { type: Boolean, default: true },

      // input props
      inputId: String,
      inputStyle: [String, Object],
      inputClass: { type: String, default: '' },

      name: String,
      value: [String, Number],
      type: { type: String, default: 'text' },
      inputmode: String,
      readonly: Boolean,
      required: Boolean,
      disabled: Boolean,
      placeholder: String,
      size: [String, Number],
      accept: [String, Number],
      autocomplete: [String],
      autocorrect: [String],
      autocapitalize: [String],
      spellcheck: [String],
      autofocus: Boolean,
      autosave: String,
      max: [String, Number],
      min: [String, Number],
      step: [String, Number],
      maxlength: [String, Number],
      minlength: [String, Number],
      multiple: Boolean,
      pattern: String,
      tabindex: [String, Number],
    },
    emits: ['change', 'input', 'focus', 'blur', 'clear'],
    setup(props, ctx) {
      const inputElRef = ref(null);
      const isFocused = ref(false);

      const theme = useTheme(props);

      const labelStyle = computed(() =>
        !props.label || props.inlineLabel
          ? 'inline'
          : props.label && props.floatingLabel
          ? 'floating'
          : 'stacked'
      );
      const labelStyleIsInline = computed(() =>
        labelStyle.value === 'inline' ? 'inline' : 'notInline'
      );

      const labelStyleIsFloating = computed(() =>
        labelStyle.value === 'floating' ? 'floating' : 'notFloating'
      );

      const colors = computed(() => ({
        labelFocus: 'text-primary',
        errorText: 'text-red-500',
        hairlineError: 'hairline-red-500',
        hairlineFocus: 'hairline-primary',
        ...(props.colors || {}),
      }));

      const getDomValue = () => {
        if (!inputElRef.value) return undefined;
        return inputElRef.value.value;
      };

      const isInputHasValue = () => {
        const domValue = getDomValue();
        return typeof props.value === 'undefined'
          ? domValue || domValue === 0
          : props.value || props.value === 0;
      };
      const isFloatingTransformed = computed(
        () =>
          props.label &&
          props.floatingLabel &&
          !isInputHasValue() &&
          !isFocused.value
      );

      const getLabelColor = (force) => {
        if (labelStyle.value === 'inline' && !force) return '';
        if (props.error) return colors.value.errorText;
        if (isFocused.value && theme.value === 'material')
          return colors.value.labelFocus;
        if (labelStyle.value === 'floating') return 'opacity-50';

        return '';
      };

      const getHairlineColor = () => {
        if (props.error) return colors.value.hairlineError;
        if (isFocused.value) return colors.value.hairlineFocus;
        return '';
      };

      const onChange = (e) => {
        ctx.emit('change', e);
      };

      const onInput = (e) => {
        ctx.emit('input', e);
      };

      const onClear = (e) => {
        ctx.emit('clear', e);
      };

      const onFocusInternal = (e) => {
        isFocused.value = true;
        ctx.emit('focus', e);
      };
      const onBlurInternal = (e) => {
        isFocused.value = false;
        ctx.emit('blur', e);
      };

      const c = useThemeClasses(props, () => ({
        base: ``,
        itemContent: '',
        inner: {
          common: '',
          material: 'hairline-b-none',
          inline: {
            common: 'flex items-center',
          },
          stacked: '',
          floating: 'overflow-hidden',
        },
        label: {
          common: `text-xs ${getLabelColor()}`,
          inline: {
            material: 'duration-200',
          },
          stacked: {
            common: 'duration-200',
            material: '-mt-1',
          },
          floating: {
            common: cls(
              `pointer-events-none duration-200 transform origin-left`,
              isFloatingTransformed.value && 'scale-133'
            ),
            ios: isFloatingTransformed.value ? 'translate-y-7.5' : '',
            material: `-mt-1 ${
              isFloatingTransformed.value ? 'translate-y-5' : ''
            }`,
          },
        },
        inputWrap: {
          common: 'relative',
          ios: '-mb-2.5',
          material: props.hairlines
            ? `hairline-b hairline-duration-200 ${getHairlineColor()} ${
                isFocused.value || props.error ? 'hairline-b-scale' : ''
              }`
            : '',
          inline: {
            common: `flex-shrink-10 w-full`,
            ios: '-mt-2.5',
            material: `-my-1`,
          },
          stacked: {
            material: '-mb-1',
          },
          floating: {
            material: '-mb-1',
          },
        },
        media: {
          inline: '',
          notInline: {
            material: 'self-end',
          },
        },
        titleWrap: {
          material: `duration-200 ${getLabelColor(true)}`,
          inline: `w-4/12 flex-shrink-0 mr-2`,
          notInline: '',
        },
        input: {
          common: `block text-base appearance-none w-full focus:outline-none bg-transparent ${props.inputClass}`,
          ios: 'h-11',
          material: 'h-9',
          notFloating: cls(
            'placeholder-black placeholder-opacity-30',
            useDarkClasses(
              'dark:placeholder-white dark:placeholder-opacity-30'
            ),
            props.type === 'textarea' && 'py-3'
          ),

          floating: isFloatingTransformed.value
            ? 'placeholder-transparent'
            : cls(
                `placeholder-black placeholder-opacity-30`,
                useDarkClasses(
                  'dark:placeholder-white dark:placeholder-opacity-30'
                )
              ),
        },
        errorInfo: {
          common: 'text-xs relative z-10',
          inline: 'mb-2',
          notInline: {
            ios: 'mt-1',
            material: 'mt-2',
          },
        },
        error: colors.value.errorText,
        info: 'opacity-50',
        clearButton: {
          common:
            'absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer opacity-45 active:opacity-30',
          ios: 'w-3.5 h-3.5',
          material: 'w-4.5 h-4.5',
        },
        dropdown:
          'absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none opacity-50',
      }));

      const InputComponent = computed(() =>
        props.type === 'select' || props.type === 'textarea'
          ? props.type
          : 'input'
      );
      const needsType = computed(() => InputComponent.value === 'input');

      const inputProps = computed(() => {
        return {
          ...(needsType.value ? { type: props.type } : {}),
          ...(typeof props.value === 'undefined' ? {} : { value: props.value }),
        };
      });

      return {
        inputElRef,
        onChange,
        onInput,
        onFocusInternal,
        onBlurInternal,
        onClear,
        c,
        InputComponent,
        needsType,
        cls,
        labelStyle,
        labelStyleIsInline,
        labelStyleIsFloating,
        slots: ctx.slots,
        inputProps,
      };
    },
  };
</script>
