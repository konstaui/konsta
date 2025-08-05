<template>
  <k-button v-bind="buttonProps">
    <slot />
  </k-button>
</template>
<script>
  import { computed, inject } from 'vue';
  import kButton from './Button.vue';

  export default {
    name: 'k-segmented-button',
    components: {
      kButton,
    },
    props: {
      ...kButton.props,
      active: { type: Boolean, default: false },
      clear: { type: Boolean, default: false },
    },
    setup(props) {
      const SegmentedContext = inject('SegmentedContext', { value: {} });
      const buttonProps = computed(() => {
        return {
          ...props,
          segmented: true,
          segmentedActive: props.active,
          segmentedStrong: SegmentedContext.value.strong,
          rounded:
            SegmentedContext.value.rounded && SegmentedContext.value.strong,
        };
      });
      return {
        buttonProps,
      };
    },
  };
</script>
