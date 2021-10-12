<template>
  <twm-page>
    <twm-navbar title="Toolbar">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
    </twm-navbar>

    <twm-toolbar
      :top="isTop"
      :class="`left-0 ${
        isTop ? 'ios:top-11-safe material:top-14-safe sticky' : 'bottom-0 fixed'
      } w-full`"
    >
      <twm-link toolbar>Link 1</twm-link>
      <twm-link toolbar>Link 2</twm-link>
      <twm-link toolbar>Link 3</twm-link>
    </twm-toolbar>

    <twm-block strong class="space-y-4">
      <p>
        Toolbar supports both top and bottom positions. Click the following
        button to change its position.
      </p>
      <p>
        <twm-button @click="() => (isTop = !isTop)">
          Toggle Toolbar Position
        </twm-button>
      </p>
    </twm-block>
  </twm-page>
</template>
<script>
  import { ref } from 'vue';
  import {
    twmPage,
    twmNavbar,
    twmNavbarBackLink,
    twmToolbar,
    twmLink,
    twmBlock,
    twmButton,
  } from 'tailwind-mobile/vue';

  export default {
    name: 'ToolbarPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmToolbar,
      twmLink,
      twmBlock,
      twmButton,
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
