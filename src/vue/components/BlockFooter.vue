<template>
  <component :is="component" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { BlockFooterClasses } from '../../shared/classes/BlockFooterClasses.js';
  import { BlockFooterColors } from '../../shared/colors/BlockFooterColors.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  export default {
    name: 'k-block-footer',
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
      const theme = useTheme();
      const isInset = computed(() =>
        typeof props.inset === 'undefined'
          ? theme.value === 'ios'
            ? props.insetIos
            : props.insetMaterial
          : props.inset
      );
      const colors = computed(() =>
        BlockFooterColors(props.colors || {}, useDarkClasses)
      );
      const c = useThemeClasses(props, () =>
        BlockFooterClasses({ ...props, inset: isInset.value }, colors.value)
      );
      return {
        c,
      };
    },
  };
</script>
