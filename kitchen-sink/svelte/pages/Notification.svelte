<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Block,
    Notification,
    Button,
    Dialog,
    DialogButton,
    useTheme,
  } from 'konsta/svelte';
  import { XmarkCircleFill } from 'framework7-icons/svelte';
  import MdOutlineCancel from '../components/MdOutlineCancel.svelte';
  import DemoIcon from '../components/DemoIcon.svelte';

  const isPreview = document.location.href.includes('examplePreview');
  $: theme = useTheme((newValue) => (theme = newValue));
  $: CloseIcon = theme === 'ios' ? XmarkCircleFill : MdOutlineCancel;

  let notificationFull = false;
  let notificationWithButton = false;
  let notificationCloseOnClick = false;
  let notificationCallbackOnClose = false;
  let alertOpened = false;

  const openNotification = (setter) => {
    notificationFull = false;
    notificationWithButton = false;
    notificationCloseOnClick = false;
    notificationCallbackOnClose = false;
    setter();
  };
</script>

<Page>
  <Navbar title="Notification">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <Notification
    opened={notificationFull}
    title="Konsta UI"
    titleRightText="now"
    subtitle="This is a subtitle"
    text="This is a simple notification message"
  >
    <DemoIcon slot="icon"/>
  </Notification>

  <Notification
    opened={notificationWithButton}
    title="Konsta UI"
    subtitle="Notification with close button"
    text="Click (x) button to close me"
  >
    <DemoIcon slot="icon"/>
      <button clear inline slot="button" on:click={() => (notificationWithButton = false)}>
        <svelte:component this={CloseIcon} class="ios:w-6 ios:h-6 ios:fill-stone-400 ios:dark:fill-stone-500 material:w-6 material:h-6 material:fill-md-light-on-surface-variant material:dark:fill-md-dark-on-surface-variant"/>
      </button>
  </Notification>

  <Notification
    opened={notificationCloseOnClick}
    title="Konsta UI"
    titleRightText="now"
    subtitle="Notification with close on click"
    text="Click me to close"
    onClick={() => (notificationCloseOnClick = false)}
  >
    <DemoIcon slot="icon"/>
  </Notification>

  <Notification
    opened={notificationCallbackOnClose}
    title="Konsta UI"
    titleRightText="now"
    subtitle="Notification with close on click"
    text="Click me to close"
    onClick={() => {
      notificationCallbackOnClose = false;
      alertOpened = true;
    }}
  >
    <DemoIcon slot="icon"/>
  </Notification>
  <Dialog
    opened={alertOpened}
    onBackdropClick={() => (alertOpened = false)}
  >
    <svelte:fragment slot="title">Konsta UI</svelte:fragment>
    Notification closed

    <svelte:fragment slot="buttons">
      <DialogButton onClick={() => (alertOpened = false)}>
        Ок
      </DialogButton>
    </svelte:fragment>
  </Dialog>
  <Block strongIos outlineIos class="space-y-4">
    <p>
      Konsta UI comes with simple Notifications component that allows you to
      show some useful messages to user and request basic actions.
    </p>
    <p>
      <Button onClick={() => openNotification(() => (notificationFull = true))}>
        Full layout notification
      </Button>
    </p>
    <p>
      <Button onClick={() => openNotification(() => (notificationWithButton = true))}>
        With Close Button
      </Button>
    </p>
    <p>
      <Button onClick={() => openNotification(() => (notificationCloseOnClick = true))}>
        Click to Close
      </Button>
    </p>
    <p>
      <Button onClick={() => openNotification(() => (notificationCallbackOnClose = true))}>
        Callback on Close
      </Button>
    </p>
  </Block>
</Page>
