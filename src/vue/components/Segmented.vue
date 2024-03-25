<template>
  <component :is="component" :class="classes">
    <span v-if="outline" :class="c.outlineInner"><slot /></span>
    <slot v-else />
    <span
      v-if="strong"
      ref="highlightElRef"
      :class="c.strongHighlight"
      :style="highlightStyle"
    />
  </component>
</template>
<script>
  import { computed, ref, onMounted, onUpdated } from 'vue';
  import { useContext } from '../shared/use-context.js';

  import { cls } from '../../shared/cls.js';

  import { SegmentedClasses } from '../../shared/classes/SegmentedClasses.js';

  import { SegmentedColors } from '../../shared/colors/SegmentedColors.js';

  import { darkClasses } from '../shared/use-dark-classes.js';

  import { themeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-segmented',
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
      // Style props
      raised: { type: Boolean, default: false },
      outline: { type: Boolean, default: false },
      strong: { type: Boolean, default: false },
      rounded: { type: Boolean, default: false },
    },
    setup(props) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const highlightElRef = ref(null);
      const highlightStyle = ref({
        transform: '',
        width: '',
      });

      const colors = computed(() =>
        SegmentedColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        SegmentedClasses(props, colors.value, useDarkClasses)
      );

      const classes = computed(() =>
        cls(
          // base
          props.rounded ? c.value.base.rounded : c.value.base.square,
          props.raised && c.value.raised,
          props.outline && c.value.outline,
          props.strong && c.value.strong
        )
      );

      const setHighlight = () => {
        if (props.strong && highlightElRef.value) {
          const buttonsEl = highlightElRef.value.parentElement;
          const buttonsLength = buttonsEl.children.length - 1;
          const activeIndex = [...buttonsEl.children].indexOf(
            buttonsEl.querySelector('.k-segmented-strong-button-active')
          );

          const between = '4px';
          const padding = '2px';

          const width = `calc((100% - ${padding} * 2 - ${between} * (${buttonsLength} - 1)) / ${buttonsLength})`;
          const transform = `translateX(calc((${activeIndex} * 100% + ${activeIndex} * ${between}) * var(--k-rtl-reverse)))`;

          if (
            width !== highlightStyle.value.width ||
            transform !== highlightStyle.value.transform
          ) {
            highlightStyle.value = {
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
        classes,
        highlightElRef,
        highlightStyle,
      };
    },
  };
</script>
