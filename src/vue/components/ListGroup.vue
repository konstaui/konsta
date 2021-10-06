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
    components: {
      twmList,
    },
  };
</script>
