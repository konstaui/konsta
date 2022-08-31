<template>
  <k-page>
    <k-navbar title="Progressbar">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block-title>Determinate Progress Bar</k-block-title>
    <k-block strong inset-material outline-ios>
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
    <k-block strong inset-material outline-ios class="space-y-4">
      <k-progressbar class="k-color-brand-red" :progress="0.25" />
      <k-progressbar class="k-color-brand-green" :progress="0.5" />
      <k-progressbar class="k-color-brand-yellow" :progress="0.75" />
      <k-progressbar class="k-color-brand-purple" :progress="1" />
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
