<template>
  <component :is="component" :class="c.base">
    <div :class="c.bg" />
    <div :class="c.inner" ref="innerRef">
      <slot />
    </div>
    <span
      v-if="hasHighlight"
      ref="highlightElRef"
      :class="c.highlight"
      :style="highlightStyle"
    />
  </component>
</template>
<script>
  import { computed, onMounted, ref, provide, onBeforeUnmount } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { useTheme } from '../shared/use-theme.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
  import { ToolbarClasses } from '../../shared/classes/ToolbarClasses.js';
  import { ToolbarColors } from '../../shared/colors/ToolbarColors.js';

  export default {
    name: 'k-toolbar',
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

      bgClass: { type: String, default: '' },
      innerClass: { type: String, default: '' },

      outline: { type: Boolean, default: undefined },

      tabbar: { type: Boolean, default: false },
      tabbarLabels: { type: Boolean, default: false },
      tabbarIcons: { type: Boolean, default: false },

      top: { type: Boolean, default: false },
    },
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const innerRef = ref(null);
      const observer = ref(null);
      const highlightElRef = ref(null);
      const highlightStyle = ref({
        transform: '',
        width: '',
      });
      const theme = useTheme({}, context);
      const hasHighlight = computed(
        () => theme.value === 'material' && props.tabbar && !props.tabbarIcons
      );
      const colors = computed(() =>
        ToolbarColors(props.colors || {}, useDarkClasses)
      );

      const isOutline = computed(() =>
        typeof props.outline === 'undefined'
          ? theme.value === 'ios'
          : props.outline
      );

      const ToolbarContext = computed(() => ({
        toolbar: true,
        tabbarLabels: props.tabbarLabels,
        tabbarIcons: props.tabbarIcons,
        tabbar: props.tabbar,
      }));

      provide('ToolbarContext', ToolbarContext);

      const c = useThemeClasses(props, () =>
        ToolbarClasses(
          { ...props, outline: isOutline.value },
          colors.value,
          ctx.attrs.class
        )
      );
      const setHighlight = () => {
        if (
          hasHighlight.value &&
          highlightElRef.value &&
          theme.value === 'material'
        ) {
          const linksEl = highlightElRef.value.previousElementSibling;
          const activeIndex = [...linksEl.children].indexOf(
            linksEl.querySelector('.k-tabbar-link-active')
          );
          const width = `${(1 / linksEl.children.length) * 100}%`;
          const transform = `translateX(${activeIndex * 100}%)`;

          if (
            width !== highlightStyle.value.width ||
            transform !== highlightStyle.value.transform
          ) {
            highlightStyle.value = {
              ...highlightStyle.value,
              width,
              transform,
            };
          }
        }
      };
      const attachMutationObserver = () => {
        if (!innerRef?.value || theme.value !== 'material') return;
        observer.value = new MutationObserver((mutations) => {
          let needUpdate = false;
          mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
              if (
                [...mutation.addedNodes, ...mutation.removedNodes].filter(
                  (el) => el.nodeType === 1 && el.classList.contains('k-link')
                ).length > 0 ||
                (mutation.target &&
                  mutation.target.nodeType === 1 &&
                  mutation.target.closest('.k-link'))
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
            setHighlight();
          }
        });
        observer.value.observe(innerRef.value, {
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
        setHighlight();
        attachMutationObserver();
      });
      onBeforeUnmount(() => {
        detachMutationObserver();
      });

      return {
        c,
        innerRef,
        hasHighlight,
        highlightElRef,
        highlightStyle,
      };
    },
  };
</script>
