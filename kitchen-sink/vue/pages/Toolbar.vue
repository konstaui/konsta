<template>
  <k-page>
    <k-navbar title="Toolbar">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-toolbar
      :top="isTop"
      :class="`left-0 ${
        isTop ? 'ios:top-11-safe material:top-14-safe sticky' : 'bottom-0 fixed'
      } w-full`"
    >
      <k-link toolbar>Link 1</k-link>
      <k-link toolbar>Link 2</k-link>
      <k-link toolbar>Link 3</k-link>
    </k-toolbar>

    <k-block strong class="space-y-4">
      <p>
        Toolbar supports both top and bottom positions. Click the following
        button to change its position.
      </p>
      <p>
        <k-button @click="() => (isTop = !isTop)">
          Toggle Toolbar Position
        </k-button>
      </p>
    </k-block>
  </k-page>
</template>
<script>
  import { ref } from 'vue';
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kToolbar,
    kLink,
    kBlock,
    kButton,
  } from 'konsta/vue';

  export default {
    name: 'ToolbarPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kToolbar,
      kLink,
      kBlock,
      kButton,
    },
    setup() {
      const isTop = ref(false);

      return {
        isTop,
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
