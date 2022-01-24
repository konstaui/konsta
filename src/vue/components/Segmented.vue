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
  import { computed } from 'vue';
  import { cls } from '../shared/cls.js';
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
      const colors = computed(() => ({
        border: 'border-primary',
        divide: 'divide-primary',
        ...(props.colors || {}),
      }));
      const c = useThemeClasses(props, () => ({
        base: {
          common: `flex justify-center items-center overflow-hidden w-full`,
          square: 'rounded',
          rounded: 'rounded-full',
        },
        raised: props.outline
          ? 'shadow'
          : `shadow divide-x divide-black divide-opacity-10`,
        outline: `border-2 ${colors.value.border}`,
        outlineInner: `-m-0.5 flex w-full justify-center items-center divide-x-2 ${colors.value.divide}`,
        strong: cls(
          'p-0.5 bg-black bg-opacity-5 space-x-1 relative',
          useDarkClasses('dark:bg-white dark:bg-opacity-10')
        ),
        strongHighlight: cls(
          'absolute left-0.5 top-0.5 bottom-0.5 !ml-0 pointer-events-none duration-200',
          props.rounded ? 'rounded-full' : 'rounded',
          `bg-white shadow`,
          useDarkClasses('dark:bg-opacity-15 dark:touch-ripple-white')
        ),
      }));

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
        let buttonsLength = props.childButtonsLength;
        let activeIndex = props.activeButtonIndex;
        const children = ctx.slots && ctx.slots.default && ctx.slots.default();
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
