<template>
  <twm-list v-bind="listProps">
    <slot />
  </twm-list>
</template>
<script>
  import { computed } from 'vue';
  import twmList from './List.vue';

  export default {
    name: 'twm-menu-list',
    props: {
      ...twmList.props,
    },
    components: {
      twmList,
    },
    setup(props, ctx) {
      const listProps = computed(() => ({
        ...props,
        menuList: true,
      }));
      return { listProps };
    },
  };
</script>
