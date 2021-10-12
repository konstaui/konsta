<template>
  <twm-page>
    <twm-navbar title="Navbar" subtitle="Subtitle" class="top-0 sticky">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
      <template #right>
        <twm-link navbar>Right</twm-link>
      </template>
    </twm-navbar>
    <div class="relative">
      <twm-block strong>
        <p>
          Navbar is a fixed area at the top of a screen that contains Page title
          and navigation elements.
        </p>
      </twm-block>
    </div>
  </twm-page>
</template>

<script>
  import {
    twmPage,
    twmNavbar,
    twmNavbarBackLink,
    twmLink,
    twmBlock,
  } from 'tailwind-mobile/vue';

  export default {
    name: 'NavbarPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmLink,
      twmBlock,
    },
    setup() {
      return {
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
