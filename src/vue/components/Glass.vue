<template>
  <component :is="component" ref="elRef" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { useContext } from '../shared/use-context.js';
  import { useTheme } from '../shared/use-theme.js';
  import { darkClasses } from '../shared/use-dark-classes.js';

  import { GlassClasses } from '../../shared/classes/GlassClasses.js';
  import { useIosHighlight } from '../../shared/use-ios-highlight.js';
  export default {
    name: 'k-glass',
    props: {
      component: {
        type: String,
        default: 'div',
      },
      ios: {
        type: Boolean,
        default: undefined,
      },
      material: {
        type: Boolean,
        default: undefined,
      },
      highlight: {
        type: Boolean,
        default: true,
      },
    },
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const elRef = ref(null);

      const highlightData = ref({});
      const theme = useTheme(props, context);

      const { attachEvents, detachEvents } = useIosHighlight({
        getEl: () => elRef.value,
        enabled:
          props.highlight &&
          theme.value === 'ios' &&
          context.value.iosHoverHighlight,
        data: highlightData.value,
      });

      const c = useThemeClasses(
        props,
        () => GlassClasses(props, useDarkClasses),
        ctx.attrs.class
      );

      onMounted(() => {
        attachEvents();
      });
      onBeforeUnmount(() => {
        detachEvents();
      });

      return {
        c,
        elRef,
      };
    },
  };
</script>
