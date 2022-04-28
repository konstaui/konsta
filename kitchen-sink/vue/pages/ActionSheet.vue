<template>
  <k-page>
    <k-navbar title="ActionSheet">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block strong class="space-y-4">
      <p>
        Action Sheet is a slide-up pane for presenting the user with a set of
        alternatives for how to proceed with a given task.
      </p>
    </k-block>
    <k-block-title>Open Action Sheet</k-block-title>
    <k-block strong class="flex space-x-4">
      <k-button @click="() => (actionsOneOpened = true)">One group</k-button>
      <k-button @click="() => (actionsTwoOpened = true)">Two groups</k-button>
    </k-block>

    <k-actions
      :opened="actionsOneOpened"
      @backdropclick="() => (actionsOneOpened = false)"
    >
      <k-actions-group>
        <k-actions-label>Do something</k-actions-label>
        <k-actions-button bold @click="() => (actionsOneOpened = false)">
          Button 1
        </k-actions-button>
        <k-actions-button @click="() => (actionsOneOpened = false)">
          Button 2
        </k-actions-button>
        <k-actions-button
          :colors="{ text: 'text-red-500' }"
          @click="() => (actionsOneOpened = false)"
        >
          Cancel
        </k-actions-button>
      </k-actions-group>
    </k-actions>

    <k-actions
      :opened="actionsTwoOpened"
      @backdropclick="() => (actionsTwoOpened = false)"
    >
      <k-actions-group>
        <k-actions-label>Do something</k-actions-label>
        <k-actions-button bold @click="() => (actionsTwoOpened = false)">
          Button 1
        </k-actions-button>
        <k-actions-button @click="() => (actionsTwoOpened = false)">
          Button 2
        </k-actions-button>
      </k-actions-group>
      <k-actions-group>
        <k-actions-button
          :colors="{ text: 'text-red-500' }"
          @click="() => (actionsTwoOpened = false)"
        >
          Cancel
        </k-actions-button>
      </k-actions-group>
    </k-actions>
  </k-page>
</template>
<script>
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kBlockTitle,
    kBlock,
    kButton,
    kActions,
    kActionsButton,
    kActionsLabel,
    kActionsGroup,
  } from 'konsta/vue';
  import { ref } from 'vue';

  export default {
    name: 'ActionSheetPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kBlockTitle,
      kBlock,
      kButton,
      kActions,
      kActionsButton,
      kActionsLabel,
      kActionsGroup,
    },
    setup() {
      const actionsOneOpened = ref(false);
      const actionsTwoOpened = ref(false);

      return {
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
        actionsOneOpened,
        actionsTwoOpened,
      };
    },
  };
</script>
