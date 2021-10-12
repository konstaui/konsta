<template>
  <twm-page>
    <twm-navbar title="Segmented Control">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
    </twm-navbar>

    <twm-block-title>Default Segmented</twm-block-title>
    <twm-block strong class="space-y-4">
      <twm-segmented>
        <twm-segmented-button
          :active="activeSegmented === 1"
          @click="() => (activeSegmented = 1)"
        >
          Button
        </twm-segmented-button>
        <twm-segmented-button
          :active="activeSegmented === 2"
          @click="() => (activeSegmented = 2)"
        >
          Button
        </twm-segmented-button>
        <twm-segmented-button
          :active="activeSegmented === 3"
          @click="() => (activeSegmented = 3)"
        >
          Button
        </twm-segmented-button>
      </twm-segmented>

      <twm-segmented rounded>
        <twm-segmented-button
          :active="activeSegmented === 1"
          @click="() => (activeSegmented = 1)"
        >
          Button
        </twm-segmented-button>
        <twm-segmented-button
          :active="activeSegmented === 2"
          @click="() => (activeSegmented = 2)"
        >
          Button
        </twm-segmented-button>
        <twm-segmented-button
          :active="activeSegmented === 3"
          @click="() => (activeSegmented = 3)"
        >
          Button
        </twm-segmented-button>
      </twm-segmented>
    </twm-block>

    <twm-block-title>Raised Segmented</twm-block-title>
    <twm-block strong class="space-y-4">
      <twm-segmented raised>
        <twm-segmented-button
          :active="activeSegmented === 1"
          @click="() => (activeSegmented = 1)"
        >
          Button
        </twm-segmented-button>
        <twm-segmented-button
          :active="activeSegmented === 2"
          @click="() => (activeSegmented = 2)"
        >
          Button
        </twm-segmented-button>
        <twm-segmented-button
          :active="activeSegmented === 3"
          @click="() => (activeSegmented = 3)"
        >
          Button
        </twm-segmented-button>
      </twm-segmented>
      <twm-segmented raised rounded>
        <twm-segmented-button
          :active="activeSegmented === 1"
          @click="() => (activeSegmented = 1)"
        >
          Button
        </twm-segmented-button>
        <twm-segmented-button
          :active="activeSegmented === 2"
          @click="() => (activeSegmented = 2)"
        >
          Button
        </twm-segmented-button>
        <twm-segmented-button
          :active="activeSegmented === 3"
          @click="() => (activeSegmented = 3)"
        >
          Button
        </twm-segmented-button>
      </twm-segmented>
    </twm-block>

    <twm-block-title>Outline</twm-block-title>
    <twm-block strong class="space-y-4">
      <twm-segmented outline>
        <twm-segmented-button
          :active="activeSegmented === 1"
          @click="() => (activeSegmented = 1)"
        >
          Button
        </twm-segmented-button>
        <twm-segmented-button
          :active="activeSegmented === 2"
          @click="() => (activeSegmented = 2)"
        >
          Button
        </twm-segmented-button>
        <twm-segmented-button
          :active="activeSegmented === 3"
          @click="() => (activeSegmented = 3)"
        >
          Button
        </twm-segmented-button>
      </twm-segmented>
      <twm-segmented rounded outline>
        <twm-segmented-button
          :active="activeSegmented === 1"
          @click="() => (activeSegmented = 1)"
        >
          Button
        </twm-segmented-button>
        <twm-segmented-button
          :active="activeSegmented === 2"
          @click="() => (activeSegmented = 2)"
        >
          Button
        </twm-segmented-button>
        <twm-segmented-button
          :active="activeSegmented === 3"
          @click="() => (activeSegmented = 3)"
        >
          Button
        </twm-segmented-button>
      </twm-segmented>
    </twm-block>

    <twm-block-title>Strong Segmented</twm-block-title>
    <twm-block strong class="space-y-4">
      <twm-segmented strong>
        <twm-segmented-button
          strong
          :active="activeSegmented === 1"
          @click="() => (activeSegmented = 1)"
        >
          Button
        </twm-segmented-button>
        <twm-segmented-button
          strong
          :active="activeSegmented === 2"
          @click="() => (activeSegmented = 2)"
        >
          Button
        </twm-segmented-button>
        <twm-segmented-button
          strong
          :active="activeSegmented === 3"
          @click="() => (activeSegmented = 3)"
        >
          Button
        </twm-segmented-button>
      </twm-segmented>

      <twm-segmented strong rounded>
        <twm-segmented-button
          strong
          rounded
          :active="activeSegmented === 1"
          @click="() => (activeSegmented = 1)"
        >
          Button
        </twm-segmented-button>
        <twm-segmented-button
          strong
          rounded
          :active="activeSegmented === 2"
          @click="() => (activeSegmented = 2)"
        >
          Button
        </twm-segmented-button>
        <twm-segmented-button
          strong
          rounded
          :active="activeSegmented === 3"
          @click="() => (activeSegmented = 3)"
        >
          Button
        </twm-segmented-button>
      </twm-segmented>
    </twm-block>
  </twm-page>
</template>
<script>
  import { ref } from 'vue';
  import {
    twmPage,
    twmNavbar,
    twmNavbarBackLink,
    twmSegmented,
    twmSegmentedButton,
    twmBlock,
    twmBlockTitle,
  } from 'tailwind-mobile/vue';

  export default {
    name: 'SegmentedControlPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmSegmented,
      twmSegmentedButton,
      twmBlock,
      twmBlockTitle,
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
