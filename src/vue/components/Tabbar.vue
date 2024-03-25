<template>
  <k-toolbar v-bind="toolbarProps">
    <slot />
  </k-toolbar>
</template>
<script>
  import { useContext } from '../shared/use-context.js';
  import { computed } from 'vue';
  import kToolbar from './Toolbar.vue';

  export default {
    name: 'k-tabbar',
    components: {
      kToolbar,
    },
    props: {
      ...kToolbar.props,
      labels: {
        type: Boolean,
      },
      icons: {
        type: Boolean,
      },
    },
    setup(props, ctx) {
      const context = useContext();
      const toolbarProps = computed(() => {
        return {
          ...props,
          tabbar: true,
          tabbarLabels: props.labels,
          tabbarIcons: props.icons,
        };
      });
      return {
        toolbarProps,
      };
    },
  };
</script>
