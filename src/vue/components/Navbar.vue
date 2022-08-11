<template>
  <component :is="component" :class="c.base">
    <div :class="c.bg" />
    <div :class="c.inner">
      <div v-if="slots.left" :class="c.left"><slot name="left" /></div>

      <div
        v-if="title || subtitle || slots.title || slots.subtitle"
        :class="c.title"
      >
        {{ title }}<slot name="title" />
        <div v-if="subtitle || slots.subtitle" :class="c.subtitle">
          {{ subtitle }}<slot name="subtitle" />
        </div>
      </div>

      <div v-if="slots.right" :class="c.right"><slot name="right" /></div>
      <slot />
    </div>
    <div v-if="slots.subnavbar" :class="c.subnavbar">
      <slot name="subnavbar" />
    </div>
  </component>
</template>
<script>
  import { computed } from 'vue';

  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { NavbarClasses } from '../../shared/classes/NavbarClasses.js';
  import { NavbarColors } from '../../shared/colors/NavbarColors.js';

  export default {
    name: 'k-navbar',
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
      leftClass: { type: String, default: '' },
      titleClass: { type: String, default: '' },
      subtitleClass: { type: String, default: '' },
      rightClass: { type: String, default: '' },
      subnavbarClass: { type: String, default: '' },

      centerTitle: { type: Boolean, default: undefined },

      translucent: { type: Boolean, default: true },
      hairlines: { type: Boolean, default: true },

      fontSizeIos: { type: String, default: 'text-[17px]' },
      fontSizeMaterial: { type: String, default: 'text-[16px]' },

      titleFontSizeIos: { type: String, default: 'text-[17px]' },
      titleFontSizeMaterial: { type: String, default: 'text-[22px]' },

      title: String,
      subtitle: String,
    },
    setup(props, ctx) {
      const theme = useTheme(props);
      const colors = computed(() =>
        NavbarColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        NavbarClasses(
          {
            ...props,
            left: ctx.slots.left,
            right: ctx.slots.right,
            centerTitle:
              typeof props.centerTitle === 'undefined'
                ? theme.value === 'ios'
                : props.centerTitle,
          },
          colors.value,
          ctx.attrs.class
        )
      );

      return {
        c,
        slots: ctx.slots,
      };
    },
  };
</script>
