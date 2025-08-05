<template>
  <component :is="component" :id="id" ref="elRef" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { MessagesTitleClasses } from '../../shared/classes/MessagesTitleClasses.js';
  import { MessagesTitleColors } from '../../shared/colors/MessagesTitleColors.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { darkClasses } from '../shared/use-dark-classes.js';

  export default {
    name: 'k-messages-title',
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
      id: String,
    },
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const elRef = ref(null);

      const colors = computed(() =>
        MessagesTitleColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        MessagesTitleClasses(
          {
            ...props,
          },
          colors.value,
          ctx.attrs.class
        )
      );

      return {
        c,
        elRef,
      };
    },
  };
</script>
