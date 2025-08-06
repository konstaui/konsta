<template>
  <component :is="component" ref="elRef" :class="c.base">
    <input
      ref="inputElRef"
      type="checkbox"
      :name="name"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :checked="checked"
      :class="c.input"
      @change="onChange"
    />
    <i :class="c.iconWrap[state]">
      <span v-if="indeterminate" :class="c.indeterminateIcon" />
      <CheckboxIcon
        v-else
        :ios="ios"
        :material="material"
        :class="c.icon[state]"
      />
    </i>
    <slot />
  </component>
</template>
<script>
  import { computed, onMounted, ref, watch } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { CheckboxClasses } from '../../shared/classes/CheckboxClasses.js';
  import { CheckboxColors } from '../../shared/colors/CheckboxColors.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import CheckboxIcon from './icons/CheckboxIcon.vue';

  export default {
    name: 'k-checkbox',
    components: { CheckboxIcon },
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
      indeterminate: { type: Boolean, default: false },
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
      const inputElRef = ref(null);

      useTouchRipple(elRef, props, { context });

      const colors = computed(() =>
        CheckboxColors(props.colors || {}, useDarkClasses)
      );

      const state = computed(() =>
        props.checked || props.indeterminate ? 'checked' : 'notChecked'
      );

      const c = useThemeClasses(props, () =>
        CheckboxClasses(props, colors.value, useDarkClasses)
      );

      watch(
        () => props.indeterminate,
        (newValue) => {
          inputElRef.value.indeterminate = !!newValue;
        }
      );

      onMounted(() => {
        if (props.indeterminate)
          inputElRef.value.indeterminate = !!props.indeterminate;
      });

      const onChange = (e) => {
        ctx.emit('change', e);
      };

      return {
        elRef,
        inputElRef,
        c,
        state,
        onChange,
      };
    },
  };
</script>
