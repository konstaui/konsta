<template>
  <k-link
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
  </k-link>
</template>
<script>
  import { TabbarLinkClasses } from '../../shared/classes/TabbarLinkClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import kLink from './Link.vue';

  export default {
    name: 'k-tabbar-link',
    components: {
      kLink,
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
      const c = useThemeClasses(props, () => TabbarLinkClasses());
      return {
        c,
        slots: ctx.slots,
      };
    },
  };
</script>
