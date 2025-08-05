<template>
  <k-glass :component="component" :class="c.base">
    <slot />
  </k-glass>
</template>
<script>
  import { computed } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { ActionsGroupClasses } from '../../shared/classes/ActionsGroupClasses.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { ActionsGroupColors } from '../../shared/colors/ActionsGroupColors.js';
  import kGlass from './Glass.vue';
  import { darkClasses } from '../shared/use-dark-classes.js';

  export default {
    name: 'k-actions-group',
    components: {
      kGlass,
    },
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
      dividers: { type: Boolean, default: true },
    },
    setup(props, ctx) {
      const context = useContext();
      const useThemeClasses = themeClasses(context);
      const useDarkClasses = darkClasses(context);

      const colors = computed(() =>
        ActionsGroupColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        ActionsGroupClasses(props, colors.value)
      );

      return {
        c,
      };
    },
  };
</script>
