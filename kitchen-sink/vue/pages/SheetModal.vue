<template>
  <twm-page>
    <twm-navbar title="Sheet Modal">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
    </twm-navbar>

    <twm-block strong class="space-y-4">
      <p>
        Sheet Modals slide up from the bottom of the screen to reveal more
        content. Such modals allow to create custom overlays with custom
        content.
      </p>
      <p>
        <twm-button @click="() => (sheetOpened = true)">Open Sheet</twm-button>
      </p>
    </twm-block>

    <twm-sheet
      class="pb-safe"
      :opened="sheetOpened"
      @backdropclick="() => (sheetOpened = false)"
    >
      <twm-toolbar top>
        <div class="left" />
        <div class="right">
          <twm-link toolbar @click="() => (sheetOpened = false)">
            Done
          </twm-link>
        </div>
      </twm-toolbar>
      <twm-block>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ad
          excepturi nesciunt nobis aliquam. Quibusdam ducimus neque
          necessitatibus, molestias cupiditate velit nihil alias incidunt,
          excepturi voluptatem dolore itaque sapiente dolores!
        </p>
        <div class="mt-4">
          <twm-button @click="() => (sheetOpened = false)">Action</twm-button>
        </div>
      </twm-block>
    </twm-sheet>
  </twm-page>
</template>
<script>
  import { ref } from 'vue';
  import {
    twmPage,
    twmNavbar,
    twmNavbarBackLink,
    twmSheet,
    twmBlock,
    twmButton,
    twmToolbar,
    twmLink,
  } from 'tailwind-mobile/vue';

  export default {
    name: 'SheetModalPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmSheet,
      twmBlock,
      twmButton,
      twmToolbar,
      twmLink,
    },
    setup() {
      const sheetOpened = ref(false);
      return {
        sheetOpened,
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
