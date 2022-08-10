<template>
  <component :is="component" :class="c.base">
    <div :class="c.bg" />
    <div :class="c.inner[tabbar && tabbarLabels ? 'tabbarLabels' : 'toolbar']">
      <slot />
    </div>
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
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

      hairlines: { type: Boolean, default: true },

      tabbar: { type: Boolean, default: false },
      tabbarLabels: { type: Boolean, default: false },

      top: { type: Boolean, default: false },
    },
    setup(props, ctx) {
      const colors = computed(() =>
        ToolbarColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        ToolbarClasses(props, colors.value, ctx.attrs.class)
      );
      return {
        c,
      };
    },
  };
</script>
