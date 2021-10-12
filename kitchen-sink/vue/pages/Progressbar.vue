<template>
  <twm-page>
    <twm-navbar title="Progressbar">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
    </twm-navbar>

    <twm-block-title>Determinate Progress Bar</twm-block-title>
    <twm-block strong>
      <div class="my-4">
        <twm-progressbar :progress="progress" />
      </div>
      <twm-segmented raised>
        <twm-segmented-button
          :active="progress === 0.1"
          @click="() => (progress = 0.1)"
        >
          10%
        </twm-segmented-button>
        <twm-segmented-button
          :active="progress === 0.3"
          @click="() => (progress = 0.3)"
        >
          30%
        </twm-segmented-button>
        <twm-segmented-button
          :active="progress === 0.5"
          @click="() => (progress = 0.5)"
        >
          50%
        </twm-segmented-button>
        <twm-segmented-button
          :active="progress === 1.0"
          @click="() => (progress = 1.0)"
        >
          100%
        </twm-segmented-button>
      </twm-segmented>
    </twm-block>

    <twm-block-title>Colors</twm-block-title>
    <twm-block strong class="space-y-4">
      <twm-progressbar :colors="{ bg: 'bg-red-500' }" :progress="0.25" />
      <twm-progressbar :colors="{ bg: 'bg-green-500' }" :progress="0.5" />
      <twm-progressbar :colors="{ bg: 'bg-blue-500' }" :progress="0.75" />
      <twm-progressbar :colors="{ bg: 'bg-yellow-500' }" :progress="1" />
    </twm-block>
  </twm-page>
</template>
<script>
  import { ref } from 'vue';
  import {
    twmPage,
    twmNavbar,
    twmNavbarBackLink,
    twmBlock,
    twmBlockTitle,
    twmProgressbar,
    twmSegmented,
    twmSegmentedButton,
  } from 'tailwind-mobile/vue';

  export default {
    name: 'ProgressbarPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmBlock,
      twmBlockTitle,
      twmProgressbar,
      twmSegmented,
      twmSegmentedButton,
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
