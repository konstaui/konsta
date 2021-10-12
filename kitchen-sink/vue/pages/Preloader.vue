<template>
  <twm-page>
    <twm-navbar title="Preloader">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
    </twm-navbar>

    <twm-block-title>Default</twm-block-title>
    <twm-block strong class="text-center">
      <twm-preloader />
    </twm-block>

    <twm-block-title>Colors</twm-block-title>
    <twm-block strong class="grid grid-cols-4">
      <div class="text-center">
        <twm-preloader :colors="{ icon: 'text-red-500' }" />
      </div>
      <div class="text-center">
        <twm-preloader :colors="{ icon: 'text-green-500' }" />
      </div>
      <div class="text-center">
        <twm-preloader :colors="{ icon: 'text-pink-500' }" />
      </div>
      <div class="text-center">
        <twm-preloader :colors="{ icon: 'text-yellow-500' }" />
      </div>
    </twm-block>

    <twm-block-title>Sizes</twm-block-title>
    <twm-block strong class="grid grid-cols-4 items-center">
      <div class="text-center">
        <twm-preloader size="w-4 h-4" />
      </div>
      <div class="text-center">
        <twm-preloader size="w-8 h-8" />
      </div>
      <div class="text-center">
        <twm-preloader size="w-12 h-12" />
      </div>
      <div class="text-center">
        <twm-preloader size="w-16 h-16" />
      </div>
    </twm-block>
  </twm-page>
</template>
<script>
  import {
    twmPage,
    twmNavbar,
    twmNavbarBackLink,
    twmBlock,
    twmBlockTitle,
    twmPreloader,
  } from 'tailwind-mobile/vue';

  export default {
    name: 'PreloaderPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmBlock,
      twmBlockTitle,
      twmPreloader,
    },
    setup() {
      return {
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
