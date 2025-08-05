<template>
  <k-button
    :is="Component"
    v-if="theme === 'ios'"
    :disabled="disabled"
    large
    rounded
    :tonal="!isStrong"
  >
    <slot />
  </k-button>
  <k-button
    v-else
    :component="component"
    inline
    rounded
    :disabled="disabled"
    :clear="!isStrong"
  >
    <slot />
  </k-button>
</template>
<script>
  import { computed } from 'vue';
  import { useContext } from '../shared/use-context.js';

  import { useTheme } from '../shared/use-theme.js';

  import Button from './Button.vue';

  export default {
    name: 'k-dialog-button',
    components: { kButton: Button },
    props: {
      component: {
        type: String,
        default: 'button',
      },

      ios: {
        type: Boolean,
        default: undefined,
      },
      material: {
        type: Boolean,
        default: undefined,
      },

      strong: { type: Boolean, default: undefined },
      strongIos: { type: Boolean, default: false },
      strongMaterial: { type: Boolean, default: false },

      disabled: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const context = useContext();
      const Component = computed(() => props.component);
      const theme = useTheme({}, context);

      const isStrong = computed(() =>
        typeof props.strong === 'undefined'
          ? theme.value === 'ios'
            ? props.strongIos
            : props.strongMaterial
          : props.strong
      );

      return {
        theme,
        isStrong,
        Component,
      };
    },
  };
</script>
