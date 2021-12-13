<template>
  <twm-page>
    <twm-navbar title="Toast">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
    </twm-navbar>

    <twm-block strong class="space-y-4">
      <twm-toast position="left" :opened="opened.left">
        <template #button>
          <twm-button clear inline @click="() => (opened.left = false)">
            Close
          </twm-button>
        </template>
        <div class="shrink">Hello this is left toast!</div>
      </twm-toast>
      <twm-toast position="center" :opened="opened.center">
        <template #button>
          <twm-button clear inline @click="() => (opened.center = false)">
            Close
          </twm-button>
        </template>
        <div class="shrink">Hello this is center toast!</div>
      </twm-toast>
      <twm-toast position="right" :opened="opened.right">
        <template #button>
          <twm-button clear inline @click="() => (opened.right = false)">
            Close
          </twm-button>
        </template>
        <div class="shrink">Hello this is right toast!</div>
      </twm-toast>
      <p>
        Toasts provide brief feedback about an operation through a message on
        the screen.
      </p>
      <p>
        <twm-button @click="() => openToast('left')">
          Toast on Left
        </twm-button>
      </p>
      <p>
        <twm-button @click="() => openToast('center')">
          Toast on Center
        </twm-button>
      </p>
      <p>
        <twm-button @click="() => openToast('right')">
          Toast on Right
        </twm-button>
      </p>
    </twm-block>
  </twm-page>
</template>
<script>
  import { ref } from 'vue';
  import {
    twmPage,
    twmNavbar,
    twmNavbarBackLink,
    twmButton,
    twmToast,
    twmBlock,
  } from 'tailwind-mobile/vue';

  export default {
    name: 'ToastPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmButton,
      twmToast,
      twmBlock,
    },
    setup() {
      const opened = ref({
        left: false,
        center: false,
        right: false,
      });
      const openToast = (side) => {
        // close other toast
        opened.value = { left: false, center: false, right: false };
        opened.value[side] = true;
      };
      return {
        openToast,
        opened,
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
