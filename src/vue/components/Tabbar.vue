<template>
  <twm-toolbar v-bind="toolbarProps">
    <slot />
  </twm-toolbar>
</template>
<script>
  import { computed } from 'vue';
  import twmToolbar from './Toolbar.vue';

  export default {
    components: {
      twmToolbar,
    },
    props: {
      ...twmToolbar.props,
      labels: {
        type: Boolean,
      },
    },
    setup(props, ctx) {
      const toolbarProps = computed(() => {
        return {
          ...props,
          tabbar: true,
          tabbarLabels: props.labels,
        };
      });
      return {
        toolbarProps,
      };
    },
  };
</script>
