<template>
  <k-page>
    <k-navbar title="Segmented Control">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block-title>Default Segmented</k-block-title>
    <k-block strong class="space-y-4">
      <k-segmented>
        <k-segmented-button
          :active="activeSegmented === 1"
          @click="() => (activeSegmented = 1)"
        >
          Button
        </k-segmented-button>
        <k-segmented-button
          :active="activeSegmented === 2"
          @click="() => (activeSegmented = 2)"
        >
          Button
        </k-segmented-button>
        <k-segmented-button
          :active="activeSegmented === 3"
          @click="() => (activeSegmented = 3)"
        >
          Button
        </k-segmented-button>
      </k-segmented>

      <k-segmented rounded>
        <k-segmented-button
          :active="activeSegmented === 1"
          @click="() => (activeSegmented = 1)"
        >
          Button
        </k-segmented-button>
        <k-segmented-button
          :active="activeSegmented === 2"
          @click="() => (activeSegmented = 2)"
        >
          Button
        </k-segmented-button>
        <k-segmented-button
          :active="activeSegmented === 3"
          @click="() => (activeSegmented = 3)"
        >
          Button
        </k-segmented-button>
      </k-segmented>
    </k-block>

    <k-block-title>Raised Segmented</k-block-title>
    <k-block strong class="space-y-4">
      <k-segmented raised>
        <k-segmented-button
          :active="activeSegmented === 1"
          @click="() => (activeSegmented = 1)"
        >
          Button
        </k-segmented-button>
        <k-segmented-button
          :active="activeSegmented === 2"
          @click="() => (activeSegmented = 2)"
        >
          Button
        </k-segmented-button>
        <k-segmented-button
          :active="activeSegmented === 3"
          @click="() => (activeSegmented = 3)"
        >
          Button
        </k-segmented-button>
      </k-segmented>
      <k-segmented raised rounded>
        <k-segmented-button
          :active="activeSegmented === 1"
          @click="() => (activeSegmented = 1)"
        >
          Button
        </k-segmented-button>
        <k-segmented-button
          :active="activeSegmented === 2"
          @click="() => (activeSegmented = 2)"
        >
          Button
        </k-segmented-button>
        <k-segmented-button
          :active="activeSegmented === 3"
          @click="() => (activeSegmented = 3)"
        >
          Button
        </k-segmented-button>
      </k-segmented>
    </k-block>

    <k-block-title>Outline</k-block-title>
    <k-block strong class="space-y-4">
      <k-segmented outline>
        <k-segmented-button
          :active="activeSegmented === 1"
          @click="() => (activeSegmented = 1)"
        >
          Button
        </k-segmented-button>
        <k-segmented-button
          :active="activeSegmented === 2"
          @click="() => (activeSegmented = 2)"
        >
          Button
        </k-segmented-button>
        <k-segmented-button
          :active="activeSegmented === 3"
          @click="() => (activeSegmented = 3)"
        >
          Button
        </k-segmented-button>
      </k-segmented>
      <k-segmented rounded outline>
        <k-segmented-button
          :active="activeSegmented === 1"
          @click="() => (activeSegmented = 1)"
        >
          Button
        </k-segmented-button>
        <k-segmented-button
          :active="activeSegmented === 2"
          @click="() => (activeSegmented = 2)"
        >
          Button
        </k-segmented-button>
        <k-segmented-button
          :active="activeSegmented === 3"
          @click="() => (activeSegmented = 3)"
        >
          Button
        </k-segmented-button>
      </k-segmented>
    </k-block>

    <k-block-title>Strong Segmented</k-block-title>
    <k-block strong class="space-y-4">
      <k-segmented strong>
        <k-segmented-button
          strong
          :active="activeSegmented === 1"
          @click="() => (activeSegmented = 1)"
        >
          Button
        </k-segmented-button>
        <k-segmented-button
          strong
          :active="activeSegmented === 2"
          @click="() => (activeSegmented = 2)"
        >
          Button
        </k-segmented-button>
        <k-segmented-button
          strong
          :active="activeSegmented === 3"
          @click="() => (activeSegmented = 3)"
        >
          Button
        </k-segmented-button>
      </k-segmented>

      <k-segmented strong rounded>
        <k-segmented-button
          strong
          rounded
          :active="activeSegmented === 1"
          @click="() => (activeSegmented = 1)"
        >
          Button
        </k-segmented-button>
        <k-segmented-button
          strong
          rounded
          :active="activeSegmented === 2"
          @click="() => (activeSegmented = 2)"
        >
          Button
        </k-segmented-button>
        <k-segmented-button
          strong
          rounded
          :active="activeSegmented === 3"
          @click="() => (activeSegmented = 3)"
        >
          Button
        </k-segmented-button>
      </k-segmented>
    </k-block>
  </k-page>
</template>
<script>
  import { ref } from 'vue';
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kSegmented,
    kSegmentedButton,
    kBlock,
    kBlockTitle,
  } from 'konsta/vue';

  export default {
    name: 'SegmentedControlPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kSegmented,
      kSegmentedButton,
      kBlock,
      kBlockTitle,
    },
    setup() {
      const activeSegmented = ref(1);
      return {
        activeSegmented,
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
