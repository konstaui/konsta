<template>
  <k-page>
    <k-navbar title="Sheet Modal">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block strong-ios outline-ios class="space-y-4">
      <p>
        Sheet Modals slide up from the bottom of the screen to reveal more
        content. Such modals allow to create custom overlays with custom
        content.
      </p>
      <p>
        <k-button @click="() => (sheetOpened = true)">Open Sheet</k-button>
      </p>
    </k-block>

    <k-sheet
      class="pb-safe"
      :opened="sheetOpened"
      @backdropclick="() => (sheetOpened = false)"
    >
      <k-toolbar top>
        <div class="left" />
        <div class="right">
          <k-link toolbar @click="() => (sheetOpened = false)"> Done </k-link>
        </div>
      </k-toolbar>
      <k-block>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ad
          excepturi nesciunt nobis aliquam. Quibusdam ducimus neque
          necessitatibus, molestias cupiditate velit nihil alias incidunt,
          excepturi voluptatem dolore itaque sapiente dolores!
        </p>
        <div class="mt-4">
          <k-button @click="() => (sheetOpened = false)">Action</k-button>
        </div>
      </k-block>
    </k-sheet>
  </k-page>
</template>
<script>
  import { ref } from 'vue';
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kSheet,
    kBlock,
    kButton,
    kToolbar,
    kLink,
  } from 'konsta/vue';

  export default {
    name: 'SheetModalPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kSheet,
      kBlock,
      kButton,
      kToolbar,
      kLink,
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
