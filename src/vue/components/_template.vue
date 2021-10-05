<template>
  <component :is="component" :class="classes">
    <slot />
  </component>
</template>
<script>
  export default {
    props: {
      component: {
        type: String,
        default: 'div',
      },
      colors: {
        type: Object,
      },
      ios: {
        type: Boolean,
        default: undefined,
      },
      material: {
        type: Boolean,
        default: undefined,
      },
    },
    setup(props, ctx) {
      return {
        classes: '',
      };
    },
  };
</script>
