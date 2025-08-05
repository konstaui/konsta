<template>
  <component :is="component" :class="c.base[style]">
    <div v-if="header || slots.header" :class="c.header">
      {{ header }}<slot name="header" />
    </div>

    <div v-if="contentWrap" :class="c.content">
      <slot />
    </div>
    <slot v-else />

    <div v-if="footer || slots.footer" :class="c.footer">
      {{ footer }}<slot name="footer" />
    </div>
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
  import { useTheme } from '../shared/use-theme.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { CardClasses } from '../../shared/classes/CardClasses.js';
  import { CardColors } from '../../shared/colors/CardColors.js';

  export default {
    name: 'k-card',
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
      header: { type: [String, Number] },
      footer: { type: [String, Number] },
      contentWrap: { type: Boolean, default: true },
      contentWrapPadding: { type: String, default: 'p-4' },
      // Style
      raised: { type: Boolean, default: undefined },
      raisedIos: { type: Boolean, default: undefined },
      raisedMaterial: { type: Boolean, default: undefined },
      outline: { type: Boolean, default: undefined },
      outlineIos: { type: Boolean, default: undefined },
      outlineMaterial: { type: Boolean, default: undefined },
      headerDivider: { type: Boolean, default: false },
      footerDivider: { type: Boolean, default: false },
    },
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const colors = computed(() =>
        CardColors(props.colors || {}, useDarkClasses)
      );

      const theme = useTheme({}, context);

      const isOutline = computed(() =>
        typeof props.outline === 'undefined'
          ? theme.value === 'ios'
            ? props.outlineIos
            : props.outlineMaterial
          : props.outline
      );
      const isRaised = computed(() =>
        typeof props.raised === 'undefined'
          ? theme.value === 'ios'
            ? props.raisedIos
            : props.raisedMaterial
          : props.raised
      );

      const style = computed(() =>
        isOutline.value ? 'outline' : isRaised.value ? 'raised' : 'plain'
      );
      const c = useThemeClasses(props, () =>
        CardClasses(
          { ...props, raised: isRaised.value, outline: isOutline.value },
          colors.value,
          ctx.attrs.class
        )
      );

      return {
        c,
        style,
        slots: ctx.slots,
      };
    },
  };
</script>
