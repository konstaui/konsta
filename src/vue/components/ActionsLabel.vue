<template>
  <component :is="component" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useContext } from '../shared/use-context.js';

  import { ActionsLabelClasses } from '../../shared/classes/ActionsLabelClasses.js';
  import { ActionsLabelColors } from '../../shared/colors/ActionsLabelColors.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';

  export default {
    name: 'k-actions-label',
    props: {
      component: {
        type: String,
        default: 'div',
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
      dividers: { type: Boolean, default: undefined },
      fontSizeIos: { type: String, default: 'text-sm' },
      fontSizeMaterial: { type: String, default: 'text-sm' },
    },
    setup(props) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const colors = computed(() =>
        ActionsLabelColors(props.colors || {}, useDarkClasses)
      );

      const theme = useTheme({}, context);

      const isDividers = computed(() =>
        typeof props.dividers === 'undefined'
          ? theme.value === 'ios'
          : props.dividers
      );

      const c = useThemeClasses(props, () =>
        ActionsLabelClasses(
          { ...props, dividers: isDividers.value },
          colors.value
        )
      );

      return {
        c,
      };
    },
  };
</script>
