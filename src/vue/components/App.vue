<template>
  <component :is="component" :class="classes">
    <tailwind-mobile-provider
      :theme="currentTheme"
      :dark="dark"
      :touch-ripple="touchRipple"
      :auto-theme-detection="false"
    >
      <slot />
    </tailwind-mobile-provider>
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { cls } from '../shared/cls.js';
  import { positionClass } from '../shared/position-class.js';
  import { useAutoTheme } from '../shared/use-auto-theme.js';
  import TailwindMobileProvider from '../shared/TailwindMobileProvider.vue';

  export default {
    name: 'twm-app',
    components: {
      TailwindMobileProvider,
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
          currentTheme.value === 'ios' && `twm-ios`,
          currentTheme.value === 'material' && 'twm-material',
          'twm-app w-full h-full min-h-screen',
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
