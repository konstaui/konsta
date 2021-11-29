<template>
  <component :is="component" :class="classes">
    <konsta-provider
      :theme="currentTheme"
      :dark="dark"
      :touch-ripple="touchRipple"
      :auto-theme-detection="false"
    >
      <slot />
    </konsta-provider>
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { cls } from '../shared/cls.js';
  import { positionClass } from '../shared/position-class.js';
  import { useAutoTheme } from '../shared/use-auto-theme.js';
  import KonstaProvider from '../shared/KonstaProvider.vue';

  export default {
    name: 'k-app',
    components: {
      KonstaProvider,
    },
    props: {
      component: {
        type: String,
        default: 'div',
      },
      theme: {
        type: String,
        default: 'material',
      },
      dark: {
        type: Boolean,
        default: true,
      },
      touchRipple: {
        type: Boolean,
        default: true,
      },
      safeAreas: {
        type: Boolean,
        default: true,
      },
    },
    setup(props, ctx) {
      const currentTheme = useAutoTheme(props);
      const classes = computed(() =>
        cls(
          currentTheme.value === 'ios' && `k-ios`,
          currentTheme.value === 'material' && 'k-material',
          'k-app w-full h-full min-h-screen',
          props.safeAreas && 'safe-areas',
          positionClass('relative', ctx.attrs.class)
        )
      );

      return {
        currentTheme,
        classes,
      };
    },
  };
</script>
