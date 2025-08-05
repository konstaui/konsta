<template>
  <component :is="component" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { useTheme } from '../shared/use-theme.js';
  import { BlockHeaderClasses } from '../../shared/classes/BlockHeaderClasses.js';
  import { BlockHeaderColors } from '../../shared/colors/BlockHeaderColors.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { darkClasses } from '../shared/use-dark-classes.js';

  export default {
    name: 'k-block-header',
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
      inset: { type: Boolean, default: undefined },
      insetIos: { type: Boolean, default: false },
      insetMaterial: { type: Boolean, default: false },
    },
    setup(props) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const theme = useTheme({}, context);
      const isInset = computed(() =>
        typeof props.inset === 'undefined'
          ? theme.value === 'ios'
            ? props.insetIos
            : props.insetMaterial
          : props.inset
      );

      const colors = computed(() =>
        BlockHeaderColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        BlockHeaderClasses({ ...props, inset: isInset.value }, colors.value)
      );
      return {
        c,
      };
    },
  };
</script>
