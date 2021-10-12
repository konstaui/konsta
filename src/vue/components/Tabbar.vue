<template>
  <twm-toolbar v-bind="toolbarProps">
    <slot />
  </twm-toolbar>
</template>
<script>
  import { computed } from 'vue';
  import twmToolbar from './Toolbar.vue';

  export default {
    name: 'twm-tabbar',
    components: {
      twmToolbar,
    },
    props: {
      ...twmToolbar.props,
      labels: {
        type: Boolean,
      },
    },
    setup(props) {
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
