<template>
  <component :is="component" :class="classes">
    <ul :class="c.ul">
      <slot />
    </ul>
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { cls } from '../shared/cls.js';
  import { positionClass } from '../shared/position-class.js';
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
      const colors = computed(() => ({
        bg: cls(
          `bg-block-strong-light`,
          useDarkClasses('dark:bg-block-strong-dark')
        ),
        ...(props.colors || {}),
      }));

      const c = useThemeClasses(props, () => ({
        base: {
          common: cls(
            !props.nested && props.margin,
            colors.value.bg,
            !props.inset &&
              !props.nested &&
              props.hairlines &&
              'hairline-t hairline-b',
            positionClass('relative', ctx.attrs.class),
            'z-10'
          ),
        },
        ul: {
          common: cls(
            props.inset && 'no-safe-areas',
            'last-child-hairline-b-none'
          ),
        },
        inset: {
          common: `ml-4-safe mr-4-safe overflow-hidden`,
          ios: `rounded-lg`,
          material: `rounded`,
        },
        menuList: {
          common: 'py-1',
        },
      }));

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
