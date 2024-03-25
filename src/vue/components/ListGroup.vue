<template>
  <li>
    <k-list nested v-bind="props">
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
    props: {
      margin: { type: String, default: 'my-8' },
      dividers: { type: Boolean, default: undefined },
      dividersIos: { type: Boolean, default: true },
      dividersMaterial: { type: Boolean, default: false },
      inset: { type: Boolean, default: undefined },
      insetIos: { type: Boolean, default: false },
      insetMaterial: { type: Boolean, default: false },
      strong: { type: Boolean, default: undefined },
      strongIos: { type: Boolean, default: false },
      strongMaterial: { type: Boolean, default: false },
      outline: { type: Boolean, default: undefined },
      outlineIos: { type: Boolean, default: false },
      outlineMaterial: { type: Boolean, default: false },
      menuList: { type: Boolean, default: false },
    },
    setup(props) {
      return {
        props,
      };
    },
  };
</script>
