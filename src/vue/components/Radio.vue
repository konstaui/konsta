<template>
  <component :is="component" :class="c.base">
    <input
      type="radio"
      :name="name"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :checked="checked"
      :class="c.input"
      @change="onChange"
    />

    <i :class="c.iconWrap[state]">
      <CheckboxIcon v-if="theme === 'ios'" :class="c.icon[state]" />
      <span v-else :class="c.icon[state]" />
    </i>
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { cls } from '../shared/cls.js';
  import { positionClass } from '../shared/position-class.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import CheckboxIcon from './icons/CheckboxIcon.vue';

  export default {
    name: 'k-radio',
    components: {
      CheckboxIcon,
    },
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
    emits: ['change'],
    setup(props, ctx) {
      const theme = useTheme(props);

      const colors = computed(() => ({
        borderIos: cls(
          'border-black border-opacity-30',
          useDarkClasses('dark:border-white dark:border-opacity-30')
        ),
        borderMaterial: cls(
          'border-black border-opacity-40',
          useDarkClasses('dark:border-white dark:border-opacity-40')
        ),
        bgChecked: 'bg-primary',
        borderChecked: 'border-primary',
        ...(props.colors || {}),
      }));

      const state = computed(() => (props.checked ? 'checked' : 'notChecked'));

      const c = useThemeClasses(props, () => ({
        base: cls(
          `cursor-pointer inline-block align-middle`,
          positionClass('relative', ctx.attrs.class)
        ),
        iconWrap: {
          common: 'flex items-center justify-center rounded-full',
          ios: 'w-5.5 h-5.5 border',
          material: 'w-5 h-5 border-2',
          notChecked: {
            ios: colors.value.borderIos,
            material: colors.value.borderMaterial,
          },
          checked: {
            common: colors.value.borderChecked,
          },
        },
        icon: {
          ios: 'text-primary',
          material: `w-3/5 h-3/5 rounded-full ${colors.value.bgChecked}`,
          notChecked: 'opacity-0',
          checked: 'opacity-100',
        },
        indeterminateIcon: {
          common: 'bg-white w-3/4',
          ios: 'h-0.25',
          material: 'h-0.5',
        },
        input: {
          common: 'hidden',
        },
      }));

      const onChange = (e) => {
        ctx.emit('change', e);
      };

      return {
        onChange,
        c,
        state,
        theme,
      };
    },
  };
</script>
