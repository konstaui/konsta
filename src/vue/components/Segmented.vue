<template>
  <component
    :is="theme === 'ios' && navbar ? 'k-glass' : component"
    :class="classes"
  >
    <span v-if="isOutline" :class="c.outlineInner"><slot /></span>
    <slot v-else />
    <span
      v-if="isStrong"
      ref="highlightElRef"
      :class="c.strongHighlight"
      :style="highlightStyle"
    />
  </component>
</template>
<script>
  import { computed, ref, onMounted, onUpdated, provide, inject } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { cls } from '../../shared/cls.js';
  import { SegmentedClasses } from '../../shared/classes/SegmentedClasses.js';
  import { SegmentedColors } from '../../shared/colors/SegmentedColors.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';
  import kGlass from './Glass.vue';

  export default {
    name: 'k-segmented',
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
      // Style props
      raised: { type: Boolean, default: undefined },
      raisedIos: { type: Boolean, default: undefined },
      raisedMaterial: { type: Boolean, default: undefined },
      outline: { type: Boolean, default: undefined },
      outlineIos: { type: Boolean, default: undefined },
      outlineMaterial: { type: Boolean, default: undefined },
      strong: { type: Boolean, default: undefined },
      strongIos: { type: Boolean, default: undefined },
      strongMaterial: { type: Boolean, default: undefined },
      rounded: { type: Boolean, default: undefined },
      roundedIos: { type: Boolean, default: undefined },
      roundedMaterial: { type: Boolean, default: undefined },
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
      const theme = useTheme(props, context);

      const NavbarContext = inject('NavbarContext', { value: {} });

      const isOutline = computed(() =>
        typeof props.outline === 'undefined'
          ? theme.value === 'ios'
            ? props.outlineIos
            : props.outlineMaterial
          : props.outline
      );
      const isStrong = computed(() =>
        typeof props.strong === 'undefined'
          ? theme.value === 'ios'
            ? props.strongIos
            : props.strongMaterial
          : props.strong
      );
      const isRounded = computed(() =>
        typeof props.rounded === 'undefined'
          ? theme.value === 'ios'
            ? props.roundedIos
            : props.roundedMaterial
          : props.rounded
      );
      const isRaised = computed(() =>
        typeof props.raised === 'undefined'
          ? theme.value === 'ios'
            ? props.raisedIos
            : props.raisedMaterial
          : props.raised
      );

      const SegmentedContext = computed(() => ({
        strong: isStrong.value,
        outline: isOutline.value,
        rounded: isRounded.value,
        raised: isRaised.value,
      }));

      provide('SegmentedContext', SegmentedContext);

      const colors = computed(() =>
        SegmentedColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        SegmentedClasses(
          {
            ...props,
            strong: isStrong.value,
            outline: isOutline.value,
            rounded: isRounded.value,
            raised: isRaised.value,
            navbar: NavbarContext.value.navbar,
          },
          colors.value,
          useDarkClasses,
          ctx.attrs.class
        )
      );

      const classes = computed(() =>
        cls(
          // base
          isRounded.value ? c.value.base.rounded : c.value.base.square,
          isRaised.value && c.value.raised,
          isOutline.value && c.value.outline,
          isStrong.value && c.value.strong
        )
      );

      const setHighlight = () => {
        if (isStrong.value && highlightElRef.value) {
          const buttonsEl = highlightElRef.value.parentElement;
          const buttonsLength = buttonsEl.children.length - 1;
          const activeIndex = [...buttonsEl.children].indexOf(
            buttonsEl.querySelector('.k-segmented-strong-button-active')
          );

          const between = '4px';
          const padding =
            theme.value === 'ios' && NavbarContext.value.navbar ? '4px' : '2px';

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
        isOutline,
        isStrong,
        isRounded,
        isRaised,
        theme,
        navbar: NavbarContext.value.navbar,
      };
    },
  };
</script>
