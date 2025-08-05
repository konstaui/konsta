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
      const observer = ref(null);
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
        getEl: () => elRef.value?.$el,
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

      const attachMutationObserver = () => {
        if (!elRef?.value?.$el || theme.value !== 'ios') return;
        observer.value = new MutationObserver((mutations) => {
          let needUpdate = false;
          mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
              if (
                [...mutation.addedNodes, ...mutation.removedNodes].filter(
                  (el) => el.nodeType === 1 && el.classList.contains('k-link')
                ).length > 0
              ) {
                needUpdate = true;
              }
            }
            if (mutation.type === 'attributes') {
              if (
                mutation.target &&
                mutation.target.classList.contains('k-link')
              ) {
                needUpdate = true;
              }
            }
          });
          if (needUpdate) {
            onUpdatedHighlight();
          }
        });
        observer.value.observe(elRef.value.$el, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ['class'],
        });
      };
      const detachMutationObserver = () => {
        if (observer.value) {
          observer.value.disconnect();
        }
      };

      onMounted(() => {
        attachMutationObserver();
        attachEvents();
        onUpdatedHighlight();
      });
      onBeforeUnmount(() => {
        detachMutationObserver();
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
