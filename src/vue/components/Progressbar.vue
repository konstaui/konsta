<template>
  <component :is="component" :class="c.base">
    <span
      :class="c.inner"
      :style="{ transform: `translateX(-${100 - (progress / 1) * 100}%)` }"
    />
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useContext } from '../shared/use-context.js';

  import { ProgressbarClasses } from '../../shared/classes/ProgressbarClasses.js';

  import { ProgressbarColors } from '../../shared/colors/ProgressbarColors.js';

  import { themeClasses } from '../shared/use-theme-classes.js';

  import { darkClasses } from '../shared/use-dark-classes.js';

  export default {
    name: 'k-progressbar',
    props: {
      component: {
        type: String,
        default: 'span',
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
      progress: {
        type: Number,
        default: 0,
      },
    },
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const colors = computed(() =>
        ProgressbarColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        ProgressbarClasses(colors.value, ctx.attrs.class)
      );

      return {
        c,
      };
    },
  };
</script>
