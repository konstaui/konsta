<template>
  <img :src="IconSrc" alt="icon" className="ios:w-7 material:w-6" />
</template>
<script>
  import IconSrc from '../images/demo-icon.png';

  export default {
    setup() {
      return {
        IconSrc,
      };
    },
  };
</script>
