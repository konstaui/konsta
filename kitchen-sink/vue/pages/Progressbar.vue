<template>
  <k-page>
    <k-navbar title="Progressbar">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block-title>Determinate Progress Bar</k-block-title>
    <k-block strong>
      <div class="my-4">
        <k-progressbar :progress="progress" />
      </div>
      <k-segmented raised>
        <k-segmented-button
          :active="progress === 0.1"
          @click="() => (progress = 0.1)"
        >
          10%
        </k-segmented-button>
        <k-segmented-button
          :active="progress === 0.3"
          @click="() => (progress = 0.3)"
        >
          30%
        </k-segmented-button>
        <k-segmented-button
          :active="progress === 0.5"
          @click="() => (progress = 0.5)"
        >
          50%
        </k-segmented-button>
        <k-segmented-button
          :active="progress === 1.0"
          @click="() => (progress = 1.0)"
        >
          100%
        </k-segmented-button>
      </k-segmented>
    </k-block>

    <k-block-title>Colors</k-block-title>
    <k-block strong class="space-y-4">
      <k-progressbar :colors="{ bg: 'bg-red-500' }" :progress="0.25" />
      <k-progressbar :colors="{ bg: 'bg-green-500' }" :progress="0.5" />
      <k-progressbar :colors="{ bg: 'bg-blue-500' }" :progress="0.75" />
      <k-progressbar :colors="{ bg: 'bg-yellow-500' }" :progress="1" />
    </k-block>
  </k-page>
</template>
<script>
  import { ref } from 'vue';
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kBlock,
    kBlockTitle,
    kProgressbar,
    kSegmented,
    kSegmentedButton,
  } from 'konsta/vue';

  export default {
    name: 'ProgressbarPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kBlock,
      kBlockTitle,
      kProgressbar,
      kSegmented,
      kSegmentedButton,
    },
    setup() {
      const progress = ref(0.1);
      return {
        progress,
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
