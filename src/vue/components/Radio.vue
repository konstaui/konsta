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
  import { cls } from '../../shared/cls.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import CheckboxIcon from './icons/CheckboxIcon.vue';
  import { RadioClasses } from '../../shared/classes/RadioClasses.js';

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

      const c = useThemeClasses(props, () =>
        RadioClasses(props, colors.value, ctx.attrs.class)
      );

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
