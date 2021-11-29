<template>
  <k-page>
    <k-navbar title="Preloader">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block-title>Default</k-block-title>
    <k-block strong class="text-center">
      <k-preloader />
    </k-block>

    <k-block-title>Colors</k-block-title>
    <k-block strong class="grid grid-cols-4">
      <div class="text-center">
        <k-preloader :colors="{ icon: 'text-red-500' }" />
      </div>
      <div class="text-center">
        <k-preloader :colors="{ icon: 'text-green-500' }" />
      </div>
      <div class="text-center">
        <k-preloader :colors="{ icon: 'text-pink-500' }" />
      </div>
      <div class="text-center">
        <k-preloader :colors="{ icon: 'text-yellow-500' }" />
      </div>
    </k-block>

    <k-block-title>Sizes</k-block-title>
    <k-block strong class="grid grid-cols-4 items-center">
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
