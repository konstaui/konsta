<template>
  <component :is="component" :class="c.base">
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
  import { ref, computed, watch, onMounted } from 'vue';
  import { cls } from '../shared/cls.js';
  import { positionClass } from '../shared/position-class.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import CheckboxIcon from './icons/CheckboxIcon.vue';

  export default {
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
      const inputElRef = ref(null);

      const colors = computed(() => ({
        borderIos: cls(
          `border-black border-opacity-30`,
          useDarkClasses('dark:border-white dark:border-opacity-30')
        ),
        borderMaterial: cls(
          `border-black border-opacity-40`,
          useDarkClasses('dark:border-white dark:border-opacity-40')
        ),
        bgChecked: 'bg-primary',
        borderChecked: 'border-primary',
        ...(props.colors || {}),
      }));

      const state = computed(() =>
        props.checked || props.indeterminate ? 'checked' : 'notChecked'
      );

      const c = useThemeClasses(props, () => ({
        base: `cursor-pointer inline-block align-middle ${positionClass(
          'relative',
          ctx.attrs.class
        )}`,
        iconWrap: {
          common: cls(
            `flex items-center justify-center text-white`,
            useDarkClasses('dark:text-black')
          ),
          ios: 'w-5.5 h-5.5 rounded-full border',
          material: 'w-4.5 h-4.5 rounded-sm border-2',
          notChecked: {
            ios: colors.value.borderIos,
            material: colors.value.borderMaterial,
          },
          checked: `${colors.value.bgChecked} ${colors.value.borderChecked}`,
        },
        icon: {
          notChecked: 'opacity-0',
          checked: 'opacity-100',
        },
        indeterminateIcon: {
          common: cls(`bg-white w-3/4`, useDarkClasses('dark:bg-black')),
          ios: 'h-0.5 rounded-full',
          material: 'h-0.5',
        },
        input: 'hidden',
      }));

      watch(
        () => props.indeterminate,
        (newValue) => {
          inputElRef.value.indeterminate = !!newValue;
        }
      );

      onMounted(() => {
        if (props.indeterminate) inputElRef.value.indeterminate = !!newValue;
      });

      const onChange = (e) => {
        ctx.emit('change', e);
      };

      return {
        inputElRef,
        c,
        state,
        onChange,
      };
    },
  };
</script>
