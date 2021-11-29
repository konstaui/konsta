<template>
  <k-page>
    <k-navbar title="Subnavbar">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
      <template #subnavbar>
        <k-segmented strong>
          <k-segmented-button small strong active> Button </k-segmented-button>
          <k-segmented-button small strong> Button </k-segmented-button>
          <k-segmented-button small strong> Button </k-segmented-button>
        </k-segmented>
      </template>
    </k-navbar>
    <div class="relative">
      <k-block strong>
        <p>
          Subnavbar is useful when you need to put any additional elements into
          Navbar, like Tab Links or Search Bar. It also remains visible when
          Navbar hidden.
        </p>
      </k-block>
    </div>
  </k-page>
</template>
<script>
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kBlock,
    kSegmented,
    kSegmentedButton,
  } from 'konsta/vue';

  export default {
    name: 'SubnavbarPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kBlock,
      kSegmented,
      kSegmentedButton,
    },
    setup() {
      return {
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
