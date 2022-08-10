<template>
  <component :is="component" :class="classes">
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { cls } from '../../shared/cls.js';
  import { BlockClasses } from '../../shared/classes/BlockClasses.js';
  import { BlockColors } from '../../shared/colors/BlockColors.js';

  export default {
    name: 'k-block',
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
      strong: { type: Boolean, default: false },
      inset: { type: Boolean, default: false },
      nested: { type: Boolean, default: false },
      hairlines: { type: Boolean, default: true },
    },
    setup(props, ctx) {
      const colors = computed(() =>
        BlockColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        BlockClasses(props, colors.value, ctx.attrs.class)
      );

      const classes = computed(() =>
        cls(
          // base
          c.value.base,

          // strong
          props.strong && c.value.strong,

          // inset
          props.inset && c.value.inset
        )
      );
      return {
        classes,
      };
    },
  };
</script>
