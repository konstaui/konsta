<template>
  <component :is="component" :class="classes">
    <ul :class="c.ul">
      <slot />
    </ul>
  </component>
</template>
<script>
  import { computed, provide } from 'vue';
  import { useContext } from '../shared/use-context.js';

  import { cls } from '../../shared/cls.js';

  import { ListClasses } from '../../shared/classes/ListClasses.js';

  import { ListColors } from '../../shared/colors/ListColors.js';

  import { darkClasses } from '../shared/use-dark-classes.js';

  import { themeClasses } from '../shared/use-theme-classes.js';

  import { useTheme } from '../shared/use-theme.js';

  export default {
    name: 'k-list',
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
      margin: { type: String, default: 'my-8' },
      dividers: { type: Boolean, default: undefined },
      dividersIos: { type: Boolean, default: true },
      dividersMaterial: { type: Boolean, default: false },
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
      menuList: { type: Boolean, default: false },
    },
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const theme = useTheme({}, context);

      const hasDividers = computed(() =>
        typeof props.dividers === 'undefined'
          ? theme.value === 'ios'
            ? props.dividersIos
            : props.dividersMaterial
          : props.dividers
      );
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
      const ListDividersContext = computed(() => hasDividers.value);

      provide('ListDividersContext', ListDividersContext);

      const colors = computed(() =>
        ListColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        ListClasses(
          {
            ...props,
            inset: isInset.value,
            strong: isStrong.value,
            outline: isOutline.value,
          },
          colors.value,
          ctx.attrs.class
        )
      );

      const classes = computed(() =>
        cls(
          c.value.base,

          isInset.value && c.value.inset,

          props.menuList && c.value.menuList
        )
      );

      return {
        c,
        classes,
      };
    },
  };
</script>
