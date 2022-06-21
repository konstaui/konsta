<template>
  <li>
    <k-list nested>
      <slot />
    </k-list>
  </li>
</template>
<script>
  import kList from './List.vue';

  export default {
    name: 'k-list-group',
    components: {
      kList,
    },
  };
</script>
