<template>
  <twm-page>
    <twm-navbar title="Popup">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
    </twm-navbar>

    <twm-block strong class="space-y-4">
      <p>
        Popup is a modal window with any HTML content that pops up over App's
        main content. Popup as all other overlays is part of so called
        "Temporary Views".
      </p>
      <p>
        <twm-button @click="() => (popupOpened = true)">Open Popup</twm-button>
      </p>
    </twm-block>

    <twm-popup
      :opened="popupOpened"
      @backdropclick="() => (popupOpened = false)"
    >
      <twm-page>
        <twm-navbar title="Popup">
          <template #right>
            <twm-link navbar @click="() => (popupOpened = false)">
              Close
            </twm-link>
          </template>
        </twm-navbar>
        <twm-block class="space-y-4">
          <p>
            Here comes popup. You can put here anything, even independent view
            with its own navigation. Also not, that by default popup looks a bit
            different on iPhone/iPod and iPad, on iPhone it is fullscreen.
          </p>
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
        </twm-block>
      </twm-page>
    </twm-popup>
  </twm-page>
</template>
<script>
  import { ref } from 'vue';
  import {
    twmPage,
    twmNavbar,
    twmNavbarBackLink,
    twmPopup,
    twmBlock,
    twmLink,
    twmButton,
  } from 'tailwind-mobile/vue';

  export default {
    name: 'PopupPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmPopup,
      twmBlock,
      twmLink,
      twmButton,
    },
    setup() {
      const popupOpened = ref(false);
      return {
        popupOpened,
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
