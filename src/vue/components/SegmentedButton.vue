<template>
  <k-button v-bind="buttonProps">
    <slot />
  </k-button>
</template>
<script>
  import { computed } from 'vue';
  import kButton from './Button.vue';

  export default {
    name: 'k-segmented-button',
    components: {
      kButton,
    },
    props: {
      ...kButton.props,
      active: { type: Boolean, default: false },
      outline: { type: Boolean, default: false },
      strong: { type: Boolean, default: false },
      clear: { type: Boolean, default: false },
      rounded: { type: Boolean, default: false },
    },
    setup(props) {
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
