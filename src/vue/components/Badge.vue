<template>
  <component :is="component" :class="c.base[size]">
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  export default {
    props: {
      component: {
        type: String,
        default: 'span',
      },
      small: {
        type: Boolean,
        default: false,
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
    },
    setup(props, ctx) {
      const colors = computed(() => ({
        bg: 'bg-primary',
        text: 'text-white',
        ...(props.colors || {}),
      }));

      const size = computed(() => (props.small ? 'sm' : 'md'));

      const c = useThemeClasses(props, () => ({
        base: {
          common: `${colors.value.bg} ${colors.value.text} inline-flex items-center justify-center rounded-full leading-none`,
          ios: `font-semibold`,
          material: `font-medium`,
          sm: 'text-2xs min-w-4 min-h-4 px-0.5',
          md: 'text-xs min-w-5 min-h-5 px-1.5 py-0.5',
        },
      }));
      return {
        c,
        size,
      };
    },
  };
</script>
