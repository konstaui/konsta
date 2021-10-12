<template>
  <component :is="component" :class="classes">
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { cls } from '../shared/cls.js';
  import { positionClass } from '../shared/position-class.js';
  export default {
    name: 'twm-block',
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
      const colors = computed(() => ({
        strongBg: cls(
          `bg-block-strong-light`,
          useDarkClasses('dark:bg-block-strong-dark')
        ),
        ...(props.colors || {}),
      }));

      const c = useThemeClasses(props, () => ({
        base: {
          common: cls(
            `text-sm z-10`,
            positionClass('relative', ctx.attrs.class),
            props.inset && 'px-4',
            !props.inset && 'pl-4-safe pr-4-safe',
            !props.nested && props.margin
          ),
        },
        strong: {
          common: cls(
            `py-4 ${colors.value.strongBg}`,
            !props.inset &&
              !props.nested &&
              props.hairlines &&
              'hairline-t hairline-b'
          ),
        },
        inset: {
          common: `ml-4-safe mr-4-safe overflow-hidden`,
          ios: `rounded-lg`,
          material: `rounded`,
        },
      }));

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
