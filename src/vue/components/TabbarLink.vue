<template>
  <twm-link
    tabbar
    :tabbar-active="active"
    :component="component"
    :colors="colors"
    :touch-ripple="touchRipple"
  >
    <span v-if="slots.icon && (label || slots.label)" :class="c.content">
      <span v-if="slots.icon" :class="c.icon"><slot name="icon" /></span>
      <span v-if="label || slots.label" :class="c.label"
        >{{ label }}<slot name="label"
      /></span>
    </span>
    <template v-else>
      {{ label }}<slot name="label" />
      <slot />
    </template>
  </twm-link>
</template>
<script>
  import { ref, computed } from 'vue';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import twmLink from './Link.vue';

  export default {
    components: {
      twmLink,
    },
    props: {
      component: {
        type: String,
        default: 'a',
      },
      colors: {
        type: Object,
      },
      touchRipple: { type: Boolean, default: true },
      active: {
        type: Boolean,
        default: false,
      },
      label: { type: String, default: undefined },
    },
    setup(props, ctx) {
      const c = useThemeClasses(props, () => ({
        content: {
          common: 'flex flex-col items-center h-full',
          ios: 'py-1',
          material: 'py-2',
        },
        icon: {
          common: 'flex items-center justify-center',
          ios: 'w-7 h-7',
          material: 'w-6 h-6',
        },
        label: {
          ios: 'text-xs font-medium',
          material: 'text-sm font-normal normal-case',
        },
      }));
      return {
        c,
        slots: ctx.slots,
      };
    },
  };
</script>
