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
  } from 'konsta/svelte';
  import DemoIcon from '../components/DemoIcon.svelte';

  const isPreview = document.location.href.includes('examplePreview');

  let notificationFull = $state(false);
  let notificationWithButton = $state(false);
  let notificationCloseOnClick = $state(false);
  let notificationCallbackOnClose = $state(false);
  let alertOpened = $state(false);

  const openNotification = (setter) => {
    notificationFull = false;
    notificationWithButton = false;
    notificationCloseOnClick = false;
    notificationCallbackOnClose = false;
    setter();

    if (notificationFull) {
      setTimeout(() => {
        notificationFull = false;
      }, 3000);
    }
  };
</script>

<Page>
  <Navbar title="Notification">
    {#snippet left()}
      {#if !isPreview}
        <NavbarBackLink onclick={() => history.back()} />
      {/if}
    {/snippet}
  </Navbar>

  <Notification
    opened={notificationFull}
    title="Konsta UI"
    titleRightText="now"
    subtitle="This is a subtitle"
    text="This is a simple notification message"
  >
    <DemoIcon slot="icon" />
  </Notification>

  <Notification
    opened={notificationWithButton}
    title="Konsta UI"
    subtitle="Notification with close button"
    text="Click (x) button to close me"
    button
    onClose={() => (notificationWithButton = false)}
  >
    <DemoIcon slot="icon" />
  </Notification>

  <Notification
    opened={notificationCloseOnClick}
    title="Konsta UI"
    titleRightText="now"
    subtitle="Notification with close on click"
    text="Click me to close"
    onclick={() => (notificationCloseOnClick = false)}
  >
    <DemoIcon slot="icon" />
  </Notification>

  <Notification
    opened={notificationCallbackOnClose}
    title="Konsta UI"
    titleRightText="now"
    subtitle="Notification with close on click"
    text="Click me to close"
    onclick={() => {
      notificationCallbackOnClose = false;
      alertOpened = true;
    }}
  >
    <DemoIcon slot="icon" />
  </Notification>
  <Dialog opened={alertOpened} onBackdropClick={() => (alertOpened = false)}>
    {#snippet title()}
      Konsta UI
    {/snippet}
    Notification closed

    {#snippet buttons()}
      <DialogButton onclick={() => (alertOpened = false)}>Ок</DialogButton>
    {/snippet}
  </Dialog>
  <Block strongIos outlineIos class="space-y-4">
    <p>
      Konsta UI comes with simple Notifications component that allows you to
      show some useful messages to user and request basic actions.
    </p>
    <p>
      <Button onclick={() => openNotification(() => (notificationFull = true))}>
        Full layout notification
      </Button>
    </p>
    <p>
      <Button
        onclick={() => openNotification(() => (notificationWithButton = true))}
      >
        With Close Button
      </Button>
    </p>
    <p>
      <Button
        onclick={() =>
          openNotification(() => (notificationCloseOnClick = true))}
      >
        Click to Close
      </Button>
    </p>
    <p>
      <Button
        onclick={() =>
          openNotification(() => (notificationCallbackOnClose = true))}
      >
        Callback on Close
      </Button>
    </p>
  </Block>
</Page>
