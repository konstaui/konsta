<template>
  <twm-page>
    <twm-navbar title="Subnavbar">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
      <template #subnavbar>
        <twm-segmented strong>
          <twm-segmented-button small strong active>
            Button
          </twm-segmented-button>
          <twm-segmented-button small strong> Button </twm-segmented-button>
          <twm-segmented-button small strong> Button </twm-segmented-button>
        </twm-segmented>
      </template>
    </twm-navbar>
    <div class="relative">
      <twm-block strong>
        <p>
          Subnavbar is useful when you need to put any additional elements into
          Navbar, like Tab Links or Search Bar. It also remains visible when
          Navbar hidden.
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
    twmBlock,
    twmSegmented,
    twmSegmentedButton,
  } from 'tailwind-mobile/vue';

  export default {
    name: 'SubnavbarPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmBlock,
      twmSegmented,
      twmSegmentedButton,
    },
    setup() {
      return {
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
