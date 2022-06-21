<template>
  <component :is="component" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { cls } from '../../shared/esm/cls.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { ActionsLabelClasses } from '../../shared/esm/classes/ActionsLabelClasses.js';

  export default {
    name: 'k-actions-label',
    props: {
      component: {
        type: String,
        default: 'button',
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
      hairlines: { type: Boolean, default: true },
      fontSizeIos: { type: String, default: 'text-sm' },
      fontSizeMaterial: { type: String, default: 'text-base' },
    },
    setup(props, ctx) {
      const colors = computed(() => ({
        bg: cls('bg-white', useDarkClasses('dark:bg-neutral-800')),
        activeBg: cls(
          'active:bg-neutral-200',
          useDarkClasses('dark:active:bg-neutral-700')
        ),
        text: cls(
          'text-black text-opacity-55',
          useDarkClasses('dark:text-white dark:text-opacity-55')
        ),
        ...(props.colors || {}),
      }));

      const c = useThemeClasses(
        props,
        () => ActionsLabelClasses(props, colors.value),
        ctx.attrs.class
      );

      return {
        c,
      };
    },
  };
</script>
