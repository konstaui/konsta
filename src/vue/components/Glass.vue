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
  import { useHoverable } from '../../shared/use-hoverable.js';
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
      hoverable: {
        type: Boolean,
        default: true,
      },
    },
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const elRef = ref(null);

      const hoverableData = ref({});
      const theme = useTheme(props, context);

      const { attachEvents, detachEvents } = useHoverable({
        getEl: () => elRef.value,
        enabled: props.hoverable && theme.value === 'ios',
        data: hoverableData.value,
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
