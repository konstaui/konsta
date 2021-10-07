<template>
  <component :is="component" :class="c.base">
    <span
      :class="c.inner"
      :style="{ transform: `translateX(-${100 - (progress / 1) * 100}%)` }"
    />
    <slot />
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export default {
    props: {
      component: {
        type: String,
        default: 'span',
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
      progress: {
        type: Number,
        default: 0,
      },
    },
    setup(props, ctx) {
      const colors = computed(() => ({
        bg: 'bg-primary',
        ...(props.colors || {}),
      }));

      const c = useThemeClasses(props, () => ({
        base: {
          common: `block h-1 bg-opacity-30 overflow-hidden`,
          ios: `bg-black rounded-full`,
          material: colors.value.bg,
        },
        inner: `block ${colors.value.bg} duration-200 w-full h-full`,
      }));
      return {
        c,
      };
    },
  };
</script>
