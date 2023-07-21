<template>
  <k-page>
    <k-navbar title="Notification">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-notification
      :opened="opened.notificationFull"
      title="Konsta UI"
      title-right-text="now"
      subtitle="This is a subtitle"
      text="This is a simple notification message"
    >
      <template #icon>
        <demo-icon />
      </template>
    </k-notification>

    <k-notification
      :opened="opened.notificationWithButton"
      title="Konsta UI"
      subtitle="Notification with close button"
      text="Click (x) button to close me"
    >
      <template #icon>
        <demo-icon />
      </template>
      <template #button>
        <button
          type="button"
          @click="() => (opened.notificationWithButton = false)"
        >
          <component
            :is="CloseIcon"
            class="ios:w-6 ios:h-6 ios:fill-stone-400 ios:dark:fill-stone-500 material:w-6 material:h-6 material:fill-md-light-on-surface-variant material:dark:fill-md-dark-on-surface-variant"
          />
        </button>
      </template>
    </k-notification>

    <k-notification
      :opened="opened.notificationCloseOnClick"
      title="Konsta UI"
      title-right-text="now"
      subtitle="Notification with close on click"
      text="Click me to close"
      @click="() => (opened.notificationCloseOnClick = false)"
    >
      <template #icon>
        <demo-icon />
      </template>
    </k-notification>

    <k-notification
      :opened="opened.notificationCallbackOnClose"
      title="Konsta UI"
      title-right-text="now"
      subtitle="Notification with close on click"
      text="Click me to close"
      @click="
        () => {
          opened.notificationCallbackOnClose = false;
          alertOpened = true;
        }
      "
    >
      <template #icon>
        <demo-icon />
      </template>
    </k-notification>
    <k-dialog
      :opened="alertOpened"
      @backdropclick="() => (alertOpened = false)"
    >
      <template #title>Konsta UI</template>
      Notification closed
      <template #buttons>
        <k-dialog-button @click="() => (alertOpened = false)">
          Ok
        </k-dialog-button>
      </template>
    </k-dialog>
    <k-block strong-ios outline-ios class="space-y-4">
      <p>
        Konsta UI comes with simple Notifications component that allows you to
        show some useful messages to user and request basic actions.
      </p>
      <p>
        <k-button @click="() => openNotification('notificationFull')">
          Full layout notification
        </k-button>
      </p>
      <p>
        <k-button @click="() => openNotification('notificationWithButton')">
          With Close Button
        </k-button>
      </p>
      <p>
        <k-button @click="() => openNotification('notificationCloseOnClick')">
          Click to Close
        </k-button>
      </p>
      <p>
        <k-button
          @click="() => openNotification('notificationCallbackOnClose')"
        >
          Callback on Close
        </k-button>
      </p>
    </k-block>
  </k-page>
</template>
<script>
  import { ref, computed } from 'vue';
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kBlock,
    kNotification,
    kButton,
    kDialog,
    kDialogButton,
    useTheme,
  } from 'konsta/vue';
  import { XmarkCircleFill } from 'framework7-icons/vue';
  import MdOutlineCancel from '../components/MdOutlineCancel.vue';
  import DemoIcon from '../components/DemoIcon.vue';

  export default {
    name: 'NotificationPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kBlock,
      kNotification,
      kButton,
      kDialog,
      kDialogButton,
      XmarkCircleFill,
      MdOutlineCancel,
      DemoIcon,
    },
    setup() {
      const opened = ref({
        notificationFull: false,
        notificationWithButton: false,
        notificationCloseOnClick: false,
        notificationCallbackOnClose: false,
      });
      const alertOpened = ref(false);
      const theme = useTheme();
      const CloseIcon = computed(() =>
        theme.value === 'ios' ? XmarkCircleFill : MdOutlineCancel
      );
      const openNotification = (setter) => {
        opened.value = {
          notificationFull: false,
          notificationWithButton: false,
          notificationCloseOnClick: false,
          notificationCallbackOnClose: false,
        };
        opened.value[setter] = true;
      };

      return {
        opened,
        alertOpened,
        openNotification,
        theme,
        CloseIcon,
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
