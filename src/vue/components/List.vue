<template>
  <component :is="component" :class="classes">
    <ul :class="c.ul">
      <slot />
    </ul>
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { cls } from '../../shared/cls.js';
  import { ListClasses } from '../../shared/classes/ListClasses.js';
  import { ListColors } from '../../shared/colors/ListColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

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
      inset: { type: Boolean, default: false },
      nested: { type: Boolean, default: false },
      menuList: { type: Boolean, default: false },

      hairlines: { type: Boolean, default: true },
    },
    setup(props, ctx) {
      const colors = computed(() =>
        ListColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        ListClasses(props, colors.value, ctx.attrs.class)
      );

      const classes = computed(() =>
        cls(
          c.value.base,

          props.inset && c.value.inset,

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
