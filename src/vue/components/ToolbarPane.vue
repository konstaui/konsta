<template>
  <template v-if="theme === 'material'">
    <slot />
  </template>
  <k-glass v-else :component="component" :class="c.base" ref="elRef">
    <slot />
    <span
      v-if="hasHighlight"
      ref="highlightElRef"
      :class="c.highlight"
      :style="highlightStyle"
    >
      <span ref="highlightInnerRef" :class="c.highlightInner" />
      <span ref="highlightThumbRef" :class="c.highlightThumb" />
    </span>
  </k-glass>
</template>
<script>
  import {
    computed,
    onMounted,
    onUpdated,
    ref,
    inject,
    onBeforeUnmount,
    watch,
  } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { useTheme } from '../shared/use-theme.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
  import { ToolbarPaneClasses } from '../../shared/classes/ToolbarPaneClasses.js';
  import { ToolbarPaneColors } from '../../shared/colors/ToolbarPaneColors.js';
  import kGlass from './Glass.vue';
  import { useIosTabbarHighlight } from '../../shared/use-ios-tabbar-highlight.js';

  export default {
    name: 'k-toolbar-pane',
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
    },
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const elRef = ref(null);
      const highlightElRef = ref(null);
      const highlightStyle = ref({
        transform: '',
        width: '',
      });
      const highlightData = ref({});
      const highlightInnerRef = ref(null);
      const highlightThumbRef = ref(null);
      const hasTabbarLinks = ref(false);

      const theme = useTheme({}, context);

      const ToolbarContext = inject('ToolbarContext', { value: {} });

      const hasHighlight = computed(
        () => theme.value === 'ios' && ToolbarContext.value.tabbar
      );
      const colors = computed(() =>
        ToolbarPaneColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        ToolbarPaneClasses(
          { ...props, tabbar: ToolbarContext.value.tabbar },
          colors.value,
          useDarkClasses,
          ctx.attrs.class
        )
      );

      const {
        attachEvents,
        detachEvents,
        onUpdated: onUpdatedHighlight,
      } = useIosTabbarHighlight({
        getEl: () => elRef.value?.elRef,
        getHighlightEl: () => highlightElRef.value,
        getHighlightInnerEl: () => highlightInnerRef.value,
        getHighlightThumbEl: () => highlightThumbRef.value,
        getHasHighlight: () => hasHighlight,
        data: highlightData.value,
        getHasTabbarLinks: () => hasTabbarLinks.value,
        setHasTabbarLinks: (value) => (hasTabbarLinks.value = value),
        classes: c.value,
        getHighlightStyle: () => highlightStyle.value,
        setHighlightStyle: (value) => (highlightStyle.value = value),
      });

      onUpdated(() => {
        onUpdatedHighlight();
      });
      onMounted(() => {
        attachEvents();
        onUpdatedHighlight();
      });
      onBeforeUnmount(() => {
        detachEvents();
      });

      return {
        c,
        elRef,
        hasHighlight,
        highlightElRef,
        highlightStyle,
        highlightData,
        highlightInnerRef,
        highlightThumbRef,
        hasTabbarLinks,
        theme,
      };
    },
  };
</script>
