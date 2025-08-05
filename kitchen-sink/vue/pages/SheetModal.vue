<template>
  <k-page>
    <k-navbar title="Sheet Modal">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block strong inset class="space-y-4">
      <p>
        Sheet Modals slide up from the bottom of the screen to reveal more
        content. Such modals allow to create custom overlays with custom
        content.
      </p>
      <p>
        <k-button rounded @click="() => (sheetOpened = true)"
          >Open Sheet</k-button
        >
      </p>
    </k-block>

    <k-sheet
      class="pb-safe"
      :opened="sheetOpened"
      @backdropclick="() => (sheetOpened = false)"
    >
      <k-toolbar top class="justify-end ios:pt-4">
        <div class="ios:hidden" />
        <k-toolbar-pane>
          <k-link icon-only @click="() => (sheetOpened = false)">
            <close-icon />
          </k-link>
        </k-toolbar-pane>
      </k-toolbar>
      <k-block>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ad
          excepturi nesciunt nobis aliquam. Quibusdam ducimus neque
          necessitatibus, molestias cupiditate velit nihil alias incidunt,
          excepturi voluptatem dolore itaque sapiente dolores!
        </p>
        <div class="mt-4">
          <k-button large rounded @click="() => (sheetOpened = false)">
            Action
          </k-button>
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
    kToolbarPane,
  } from 'konsta/vue';
  import CloseIcon from '../components/CloseIcon.vue';
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
      kToolbarPane,
      CloseIcon,
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
