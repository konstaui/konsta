<template>
  <k-page>
    <k-navbar title="Toast">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block strong-ios outline-ios class="space-y-4">
      <k-toast position="left" :opened="opened.left">
        <template #button>
          <k-button clear inline @click="() => (opened.left = false)">
            Close
          </k-button>
        </template>
        <div class="shrink">Hello this is left toast!</div>
      </k-toast>
      <k-toast position="center" :opened="opened.center">
        <template #button>
          <k-button clear inline @click="() => (opened.center = false)">
            Close
          </k-button>
        </template>
        <div class="shrink">Hello this is center toast!</div>
      </k-toast>
      <k-toast position="right" :opened="opened.right">
        <template #button>
          <k-button clear inline @click="() => (opened.right = false)">
            Close
          </k-button>
        </template>
        <div class="shrink">Hello this is right toast!</div>
      </k-toast>
      <p>
        Toasts provide brief feedback about an operation through a message on
        the screen.
      </p>
      <p>
        <k-button @click="() => openToast('left')"> Toast on Left </k-button>
      </p>
      <p>
        <k-button @click="() => openToast('center')">
          Toast on Center
        </k-button>
      </p>
      <p>
        <k-button @click="() => openToast('right')"> Toast on Right </k-button>
      </p>
    </k-block>
  </k-page>
</template>
<script>
  import { ref } from 'vue';
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kButton,
    kToast,
    kBlock,
  } from 'konsta/vue';

  export default {
    name: 'ToastPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kButton,
      kToast,
      kBlock,
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
