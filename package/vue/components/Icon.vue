<template>
  <component :is="component" :class="c.base">
    <slot v-if="theme === 'ios'" name="ios" />
    <slot v-else name="material" />
    <slot />
    <k-badge
      v-if="(typeof badge !== 'undefined' && badge !== null) || slots.badge"
      small
      :class="c.badge"
      :colors="badgeColors || {}"
      >{{ badge }}<slot name="badge" />
    </k-badge>
  </component>
</template>
<script>
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import kBadge from './Badge.vue';
  import { IconClasses } from '../../shared/esm/classes/IconClasses.js';

  export default {
    name: 'k-icon',
    components: {
      kBadge,
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

      const c = useThemeClasses(props, () =>
        IconClasses(props, ctx.attrs.class)
      );
      return {
        theme,
        c,
        slots: ctx.slots,
      };
    },
  };
</script>
