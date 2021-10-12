<template>
  <twm-button v-bind="buttonProps">
    <slot />
  </twm-button>
</template>
<script>
  import { computed } from 'vue';
  import twmButton from './Button.vue';

  export default {
    name: 'twm-segmented-button',
    components: {
      twmButton,
    },
    props: {
      ...twmButton.props,
      active: { type: Boolean, default: false },
      outline: { type: Boolean, default: false },
      strong: { type: Boolean, default: false },
      clear: { type: Boolean, default: false },
      rounded: { type: Boolean, default: false },
    },
    setup(props, ctx) {
      const buttonProps = computed(() => {
        return {
          ...props,
          segmented: true,
          segmentedActive: props.active,
          segmentedStrong: props.strong,
          rounded: props.rounded && props.strong,
        };
      });
      return {
        buttonProps,
      };
    },
  };
</script>
