<template>
  <li>
    <twm-list nested>
      <slot />
    </twm-list>
  </li>
</template>
<script>
  import twmList from './List.vue';

  export default {
    name: 'twm-list-group',
    components: {
      twmList,
    },
  };
</script>
