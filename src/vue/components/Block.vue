<template>
  <component :is="component" :class="classes">
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useContext } from '../shared/use-context.js';

  import { useTheme } from '../shared/use-theme.js';

  import { themeClasses } from '../shared/use-theme-classes.js';

  import { darkClasses } from '../shared/use-dark-classes.js';

  import { cls } from '../../shared/cls.js';

  import { BlockClasses } from '../../shared/classes/BlockClasses.js';

  import { BlockColors } from '../../shared/colors/BlockColors.js';

  export default {
    name: 'k-block',
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
      inset: { type: Boolean, default: undefined },
      insetIos: { type: Boolean, default: false },
      insetMaterial: { type: Boolean, default: false },
      strong: { type: Boolean, default: undefined },
      strongIos: { type: Boolean, default: false },
      strongMaterial: { type: Boolean, default: false },
      outline: { type: Boolean, default: undefined },
      outlineIos: { type: Boolean, default: false },
      outlineMaterial: { type: Boolean, default: false },
      nested: { type: Boolean, default: false },
    },
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const colors = computed(() =>
        BlockColors(props.colors || {}, useDarkClasses)
      );

      const theme = useTheme({}, context);

      const isStrong = computed(() =>
        typeof props.strong === 'undefined'
          ? theme.value === 'ios'
            ? props.strongIos
            : props.strongMaterial
          : props.strong
      );

      const isOutline = computed(() =>
        typeof props.outline === 'undefined'
          ? theme.value === 'ios'
            ? props.outlineIos
            : props.outlineMaterial
          : props.outline
      );
      const isInset = computed(() =>
        typeof props.inset === 'undefined'
          ? theme.value === 'ios'
            ? props.insetIos
            : props.insetMaterial
          : props.inset
      );

      const c = useThemeClasses(props, () =>
        BlockClasses(
          {
            ...props,
            inset: isInset.value,
            strong: isStrong.value,
            outline: isOutline.value,
          },
          colors.value
        )
      );

      const classes = computed(() =>
        cls(
          // base
          c.value.base,

          // inset
          isInset.value && c.value.inset,

          // className
          ctx.attrs.class
        )
      );
      return {
        classes,
      };
    },
  };
</script>
