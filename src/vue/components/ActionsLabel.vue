<template>
  <component :is="component" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { ActionsLabelClasses } from '../../shared/classes/ActionsLabelClasses.js';
  import { ActionsLabelColors } from '../../shared/colors/ActionsLabelColors.js';

  export default {
    name: 'k-actions-label',
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
      hairlines: { type: Boolean, default: true },
      fontSizeIos: { type: String, default: 'text-sm' },
      fontSizeMaterial: { type: String, default: 'text-base' },
    },
    setup(props, ctx) {
      const colors = computed(() =>
        ActionsLabelColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(
        props,
        () => ActionsLabelClasses(props, colors.value),
        ctx.attrs.class
      );

      return {
        c,
      };
    },
  };
</script>
