<template>
  <component :is="component" :class="classes">
    <span v-if="outline" :class="c.outlineInner"><slot /></span>
    <slot v-else />
    <span
      v-if="strong"
      :class="c.strongHighlight"
      :style="getHighlightStyle()"
    />
  </component>
</template>
<script>
  import { computed, Fragment } from 'vue';
  import { cls } from '../../shared/cls.js';
  import { SegmentedClasses } from '../../shared/classes/SegmentedClasses.js';
  import { SegmentedColors } from '../../shared/colors/SegmentedColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

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

      activeButtonIndex: { type: Number, default: undefined },
      childButtonsLength: { type: Number, default: undefined },
    },
    setup(props, ctx) {
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

      const getHighlightStyle = () => {
        const getRenderedChildren = (children) => {
          if (!children || !Array.isArray(children)) return [];
          return children
            .map((d) =>
              d.type === Fragment ? getRenderedChildren(d.children) : d
            )
            .flat()
            .filter((d) => d.type && d.type.name === 'k-segmented-button');
        };

        let buttonsLength = props.childButtonsLength;
        let activeIndex = props.activeButtonIndex;

        const children = getRenderedChildren(
          ctx.slots && ctx.slots.default && ctx.slots.default()
        );
        if (typeof activeIndex === 'undefined' && children && children.length) {
          if (typeof buttonsLength === 'undefined') {
            buttonsLength = children.length || 0;
          }
          const activeButton = children.filter(
            (child) =>
              child.props &&
              (child.props.active ||
                child.props.active === '' ||
                child.props.segmentedActive ||
                child.props.segmentedActive === '')
          )[0];
          activeIndex = children.indexOf(activeButton);
        }

        const between = '4px';
        const padding = '2px';
        const highlightWidth = `calc((100% - ${padding} * 2 - ${between} * (${buttonsLength} - 1)) / ${buttonsLength})`;
        const highlightTranslate = `calc(${activeIndex} * 100% + ${activeIndex} * ${between})`;
        return {
          width: highlightWidth,
          transform: `translateX(${highlightTranslate})`,
        };
      };

      return {
        c,
        classes,
        getHighlightStyle,
      };
    },
  };
</script>
