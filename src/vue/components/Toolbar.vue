<template>
  <component :is="component" :class="c.base">
    <div :class="c.bg" />
    <div :class="c.inner">
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
  import { computed, onMounted, onUpdated, ref } from 'vue';
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
      translucent: { type: Boolean, default: true },

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

      const c = useThemeClasses(props, () =>
        ToolbarClasses(
          { ...props, outline: isOutline.value },
          colors.value,
          ctx.attrs.class
        )
      );
      const setHighlight = () => {
        if (hasHighlight.value && highlightElRef.value) {
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
      onMounted(() => {
        setHighlight();
      });
      onUpdated(() => {
        setHighlight();
      });
      return {
        c,
        hasHighlight,
        highlightElRef,
        highlightStyle,
      };
    },
  };
</script>
