<template>
  <k-page>
    <k-navbar title="Panel / Side Panel">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block strong class="space-y-4">
      <p>
        Konsta UI comes with 2 panels (on left and on right), both are optional.
        You can put absolutely anything inside: data lists, forms, custom
        content, etc.
      </p>
    </k-block>
    <k-block strong class="flex space-x-4">
      <k-button @click="() => (leftPanelOpened = true)">Left Panel</k-button>
      <k-button @click="() => (rightPanelOpened = true)">Right Panel</k-button>
    </k-block>

    <k-panel
      side="left"
      :opened="leftPanelOpened"
      @backdropclick="() => (leftPanelOpened = false)"
    >
      <k-page>
        <k-navbar title="Left Panel">
          <template #right>
            <k-link navbar @click="() => (leftPanelOpened = false)">
              Close
            </k-link>
          </template>
        </k-navbar>
        <k-block class="space-y-4">
          <p>Here comes left panel.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris,
            eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus,
            viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis
            dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu
            et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare
            consequat nunc viverra pellentesque. Aenean semper eu massa sit amet
            aliquam. Integer et neque sed libero mollis elementum at vitae
            ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a
            faucibus lectus.
          </p>
        </k-block>
      </k-page>
    </k-panel>

    <k-panel
      side="right"
      :opened="rightPanelOpened"
      @backdropclick="() => (rightPanelOpened = false)"
    >
      <k-page>
        <k-navbar title="Right Panel">
          <template #right>
            <k-link navbar @click="() => (rightPanelOpened = false)">
              Close
            </k-link>
          </template>
        </k-navbar>
        <k-block class="space-y-4">
          <p>Here comes right panel.</p>
          <p>
            Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula.
            Phasellus blandit nisl ut lorem semper pharetra. Nullam tortor nibh,
            suscipit in consequat vel, feugiat sed quam. Nam risus libero,
            auctor vel tristique ac, malesuada ut ante. Sed molestie, est in
            eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros
            sapien nec libero. Mauris dapibus laoreet nibh quis bibendum. Fusce
            dolor sem, suscipit in iaculis id, pharetra at urna. Pellentesque
            tempor congue massa quis faucibus. Vestibulum nunc eros, convallis
            blandit dui sit amet, gravida adipiscing libero.
          </p>
        </k-block>
      </k-page>
    </k-panel>
  </k-page>
</template>
<script>
  import { ref } from 'vue';
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kPanel,
    kBlock,
    kLink,
    kButton,
  } from 'konsta/vue';

  export default {
    name: 'SidePanelsPage',
    title: 'Panel / Side Panels',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kPanel,
      kBlock,
      kLink,
      kButton,
    },
    setup() {
      const leftPanelOpened = ref(false);
      const rightPanelOpened = ref(false);
      return {
        leftPanelOpened,
        rightPanelOpened,
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
