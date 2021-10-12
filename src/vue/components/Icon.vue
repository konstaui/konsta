<template>
  <component :is="component" :class="c.base">
    <slot v-if="theme === 'ios'" name="ios" />
    <slot v-else name="material" />
    <slot />
    <twm-badge
      v-if="(typeof badge !== 'undefined' && badge !== null) || slots.badge"
      small
      :class="c.badge"
      :colors="badgeColors || {}"
      >{{ badge }}<slot name="badge" />
    </twm-badge>
  </component>
</template>
<script>
  import { positionClass } from '../shared/position-class.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import twmBadge from './Badge.vue';
  export default {
    name: 'twm-icon',
    components: {
      twmBadge,
    },
    props: {
      component: {
        type: String,
        default: 'i',
      },
      badge: [String, Number],
      badgeColors: Object,
    },
    setup(props, ctx) {
      const theme = useTheme();

      const c = useThemeClasses(props, () => ({
        base: `${positionClass(
          'relative',
          ctx.attrs.class
        )} inline-block not-italic`,
        badge: 'absolute -right-1.5 -top-0.5',
      }));
      return {
        theme,
        c,
        slots: ctx.slots,
      };
    },
  };
</script>
