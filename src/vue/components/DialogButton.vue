<template>
  <component
    :is="Component"
    v-if="theme === 'ios'"
    ref="rippleElRef"
    :class="c.base"
    :disabled="disabled"
    role="button"
    tabindex="0"
  >
    <slot />
  </component>
  <k-button
    v-else
    :component="component"
    inline
    rounded
    :disabled="disabled"
    :clear="!isStrong"
  >
    <slot />
  </k-button>
</template>
<script>
  import { computed } from 'vue';
  import { useContext } from '../shared/use-context.js';

  import { themeClasses } from '../shared/use-theme-classes.js';

  import { useTheme } from '../shared/use-theme.js';

  import { darkClasses } from '../shared/use-dark-classes.js';

  import { DialogButtonClasses } from '../../shared/classes/DialogButtonClasses.js';

  import { DialogButtonColors } from '../../shared/colors/DialogButtonColors.js';
  import Button from './Button.vue';

  export default {
    name: 'k-dialog-button',
    components: { kButton: Button },
    props: {
      component: {
        type: String,
        default: 'button',
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

      strong: { type: Boolean, default: undefined },
      strongIos: { type: Boolean, default: false },
      strongMaterial: { type: Boolean, default: false },

      disabled: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const Component = computed(() => props.component);
      const theme = useTheme({}, context);

      const isStrong = computed(() =>
        typeof props.strong === 'undefined'
          ? theme.value === 'ios'
            ? props.strongIos
            : props.strongMaterial
          : props.strong
      );

      const colors = computed(() =>
        DialogButtonColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        DialogButtonClasses({ props, strong: isStrong.value }, colors.value)
      );

      return {
        theme,
        c,
        isStrong,
        Component,
      };
    },
  };
</script>
