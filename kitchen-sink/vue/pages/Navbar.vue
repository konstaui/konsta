<template>
  <k-page>
    <k-navbar title="Navbar" subtitle="Subtitle" class="top-0 sticky">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
      <template #right>
        <k-link navbar>Right</k-link>
      </template>
    </k-navbar>
    <div class="relative">
      <k-block strong>
        <p>
          Navbar is a fixed area at the top of a screen that contains Page title
          and navigation elements.
        </p>
      </k-block>
    </div>
  </k-page>
</template>

<script>
  import { kPage, kNavbar, kNavbarBackLink, kLink, kBlock } from 'konsta/vue';

  export default {
    name: 'NavbarPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kLink,
      kBlock,
    },
    setup() {
      return {
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
