<template>
  <k-list v-bind="listProps">
    <slot />
  </k-list>
</template>
<script>
  import { computed } from 'vue';
  import kList from './List.vue';

  export default {
    name: 'k-menu-list',
    components: {
      kList,
    },
    props: {
      ...kList.props,
    },
    setup(props) {
      const listProps = computed(() => ({
        ...props,
        menuList: true,
      }));
      return { listProps };
    },
  };
</script>
