<template>
  <k-link
    tabbar
    :tabbar-active="active"
    :component="component"
    :colors="colors"
    v-bind="linkProps"
  >
    <span :class="c.content">
      <template v-if="slots.icon">
        <span :class="c.iconContainer">
          <span :class="c.iconBg" />
          <slot name="icon" />
        </span>
      </template>
      <template v-if="label || slots.label || slots.default">
        <span :class="c.label">
          {{ label }}
          <slot name="label" />
          <slot />
        </span>
      </template>
    </span>
  </k-link>
</template>
<script>
  import { computed, ref, onBeforeUpdate } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { TabbarLinkClasses } from '../../shared/classes/TabbarLinkClasses.js';
  import { TabbarLinkColors } from '../../shared/colors/TabbarLinkColors.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
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
      linkProps: { type: Object, default: () => ({}) },
      active: {
        type: Boolean,
        default: false,
      },
      label: { type: String, default: undefined },
    },
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const colors = computed(() =>
        TabbarLinkColors(props.colors, useDarkClasses)
      );
      const hasIcon = ref(ctx.slots.icon);
      const hasLabel = ref(props.label || ctx.slots.label || ctx.slots.default);
      const c = useThemeClasses(props, () =>
        TabbarLinkClasses(
          {
            active: props.active,
            hasIcon: hasIcon.value,
            hasLabel: hasLabel.value,
          },
          colors.value
        )
      );
      onBeforeUpdate(() => {
        hasIcon.value = ctx.slots.icon;
        hasLabel.value = props.label || ctx.slots.label || ctx.slots.default;
      });
      return {
        c,
        slots: ctx.slots,
      };
    },
  };
</script>
