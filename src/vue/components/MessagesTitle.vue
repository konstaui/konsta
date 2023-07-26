<template>
  <component :is="component" :id="id" ref="elRef" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { MessagesTitleClasses } from '../../shared/classes/MessagesTitleClasses.js';
  import { MessagesTitleColors } from '../../shared/colors/MessagesTitleColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';

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
      const elRef = ref(null);
      useTouchRipple(elRef, props);

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
      };
    },
  };
</script>
