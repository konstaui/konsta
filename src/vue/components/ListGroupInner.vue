<template>
  <slot />
</template>
<script>
  import { inject, provide, computed } from 'vue';
  export default {
    name: 'k-list-group-inner',

    setup(props) {
      const ListContext = inject('ListContext', {
        value: { dividers: false, nested: false },
      });

      const newListContext = computed(() => ({
        dividers: ListContext.value.dividers,
        nested: false,
      }));

      provide('ListContext', newListContext);
      return {
        props,
      };
    },
  };
</script>
