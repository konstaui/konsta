<template>
  <component :is="component" :class="c.base[state]">
    <input
      type="checkbox"
      :name="name"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :checked="checked"
      :class="c.input"
    />
    <span :class="c.inner[state]" />
    <span :class="c.knob[state]" />
    <slot />
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { cls } from '../shared/cls.js';
  import { positionClass } from '../shared/position-class.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export default {
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
    setup(props, ctx) {
      const colors = computed(() => ({
        bg: 'bg-primary',
        ...(props.colors || {}),
      }));

      const state = computed(() => (props.checked ? 'checked' : 'notChecked'));

      const c = useThemeClasses(props, () => ({
        base: {
          common: cls(
            positionClass('relative', ctx.attrs.class),
            `cursor-pointer select-none inline-block align-middle relative duration-300 rounded-full`
          ),
          ios: 'h-8 w-13 p-0.5',
          material: 'w-9 h-3.5',
          notChecked: {
            ios: cls(
              'bg-black bg-opacity-10',
              useDarkClasses('dark:bg-white dark:bg-opacity-20')
            ),
            material: cls(
              'bg-black bg-opacity-30',
              useDarkClasses('dark:bg-white dark:bg-opacity-30')
            ),
          },
          checked: {
            ios: `${colors.value.bg}`,
            material: `${colors.value.bg} bg-opacity-50`,
          },
        },
        inner: {
          ios: cls(
            'w-full h-full bg-white rounded-full block duration-300 transform',
            useDarkClasses('dark:bg-opacity-0')
          ),
          notChecked: {},
          checked: {
            ios: 'scale-0',
          },
        },
        knob: {
          common: 'rounded-full absolute duration-300 transform',
          ios: 'w-7 h-7 shadow-ios-toggle left-0.5 top-0.5 bg-white',
          material: 'w-5 h-5 shadow-md left-0 -top-0.75',
          checked: {
            ios: 'translate-x-5',
            material: `${colors.value.bg} translate-x-4`,
          },
          notChecked: {
            material: 'bg-white',
          },
        },
        input: {
          common: 'hidden',
        },
      }));
      return {
        c,
        state,
      };
    },
  };
</script>
