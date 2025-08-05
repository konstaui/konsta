<template>
  <k-page>
    <k-navbar title="Dialog">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block strong inset class="space-y-4">
      <p>
        Dialog is a type of modal window that appears in front of app content to
        provide critical information, or prompt for a decision to be made.
      </p>
    </k-block>

    <k-block strong inset>
      <p class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <k-button rounded @click="() => (basicOpened = true)">Basic</k-button>
        <k-button rounded @click="() => (alertOpened = true)">Alert</k-button>
        <k-button rounded @click="() => (confirmOpened = true)"
          >Confirm</k-button
        >
        <k-button rounded @click="() => (listOpened = true)">List</k-button>
      </p>
    </k-block>

    <k-dialog
      :opened="basicOpened"
      @backdropclick="() => (basicOpened = false)"
    >
      <template #title>Dialog Title</template>
      Dialog is a type of modal window that appears in front of app content to
      provide critical information, or prompt for a decision to be made.

      <template #buttons>
        <k-dialog-button @click="() => (basicOpened = false)">
          Action 2
        </k-dialog-button>
        <k-dialog-button strong @click="() => (basicOpened = false)">
          Action 1
        </k-dialog-button>
      </template>
    </k-dialog>
    <k-dialog
      :opened="alertOpened"
      @backdropclick="() => (alertOpened = false)"
    >
      <template #title>Konsta UI</template>
      Hello world!
      <template #buttons>
        <k-dialog-button strong @click="() => (alertOpened = false)"
          >Ok</k-dialog-button
        >
      </template>
    </k-dialog>
    <k-dialog
      :opened="confirmOpened"
      @backdropclick="() => (confirmOpened = false)"
    >
      <template #title>Konsta UI</template>
      All good today?
      <template #buttons>
        <k-dialog-button @click="() => (confirmOpened = false)"
          >No</k-dialog-button
        >
        <k-dialog-button strong @click="() => (confirmOpened = false)">
          Yes
        </k-dialog-button>
      </template>
    </k-dialog>
    <k-dialog :opened="listOpened" @backdropclick="() => (listOpened = false)">
      <template #title>Your super hero</template>
      <k-list nested class="-mx-4">
        <k-list-item label title="Batman">
          <template #after>
            <k-radio
              component="div"
              value="batman"
              :checked="radioValue === 'batman'"
              @change="() => (radioValue = 'batman')"
            />
          </template>
        </k-list-item>
        <k-list-item label title="Spider-man">
          <template #after>
            <k-radio
              component="div"
              value="spiderman"
              :checked="radioValue === 'spiderman'"
              @change="() => (radioValue = 'spiderman')"
            />
          </template>
        </k-list-item>
        <k-list-item label title="Hulk">
          <template #after>
            <k-radio
              component="div"
              value="hulk"
              :checked="radioValue === 'hulk'"
              @change="() => (radioValue = 'hulk')"
            />
          </template>
        </k-list-item>
      </k-list>
      <template #buttons>
        <k-dialog-button strong @click="() => (listOpened = false)"
          >Confirm</k-dialog-button
        >
      </template>
    </k-dialog>
  </k-page>
</template>
<script>
  import { ref } from 'vue';
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kBlock,
    kButton,
    kDialog,
    kDialogButton,
    kList,
    kListItem,
    kRadio,
  } from 'konsta/vue';

  export default {
    name: 'DialogPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kBlock,
      kButton,
      kDialog,
      kDialogButton,
      kList,
      kListItem,
      kRadio,
    },
    setup() {
      const basicOpened = ref(false);
      const alertOpened = ref(false);
      const confirmOpened = ref(false);
      const listOpened = ref(false);
      const radioValue = ref('batman');
      return {
        basicOpened,
        alertOpened,
        confirmOpened,
        listOpened,
        radioValue,
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
