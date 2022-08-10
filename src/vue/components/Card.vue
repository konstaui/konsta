<template>
  <component :is="component" :class="c.base[style]">
    <div v-if="header || slots.header" :class="c.header">
      {{ header }}<slot name="header" />
    </div>

    <div :class="c.content">
      <slot />
    </div>

    <div v-if="footer || slots.footer" :class="c.footer">
      {{ footer }}<slot name="footer" />
    </div>
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
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
      margin: { type: String, default: 'm-4' },
      header: { type: [String, Number] },
      footer: { type: [String, Number] },
      // Style
      outline: { type: Boolean, default: false },
    },
    setup(props, ctx) {
      const colors = computed(() =>
        CardColors(props.colors || {}, useDarkClasses)
      );

      const style = computed(() => (props.outline ? 'outline' : 'shadow'));
      const c = useThemeClasses(props, () =>
        CardClasses(props, colors.value, useDarkClasses)
      );

      return {
        c,
        style,
        slots: ctx.slots,
      };
    },
  };
</script>
