<template>
  <k-page>
    <k-navbar title="Preloader">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block-title>Default</k-block-title>
    <k-block strong inset-material outline-ios class="text-center">
      <k-preloader />
    </k-block>

    <k-block-title>Colors</k-block-title>
    <k-block strong inset-material outline-ios class="grid grid-cols-4">
      <div class="text-center">
        <k-preloader class="k-color-brand-red" />
      </div>
      <div class="text-center">
        <k-preloader class="k-color-brand-green" />
      </div>
      <div class="text-center">
        <k-preloader class="k-color-brand-purple" />
      </div>
      <div class="text-center">
        <k-preloader class="k-color-brand-yellow" />
      </div>
    </k-block>

    <k-block-title>Sizes</k-block-title>
    <k-block
      strong
      inset-material
      outline-ios
      class="grid grid-cols-4 items-center"
    >
      <div class="text-center">
        <k-preloader size="w-4 h-4" />
      </div>
      <div class="text-center">
        <k-preloader size="w-8 h-8" />
      </div>
      <div class="text-center">
        <k-preloader size="w-12 h-12" />
      </div>
      <div class="text-center">
        <k-preloader size="w-16 h-16" />
      </div>
    </k-block>
  </k-page>
</template>
<script>
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kBlock,
    kBlockTitle,
    kPreloader,
  } from 'konsta/vue';

  export default {
    name: 'PreloaderPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kBlock,
      kBlockTitle,
      kPreloader,
    },
    setup() {
      return {
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
