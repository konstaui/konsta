<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Button,
    Toast,
    Block,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
  let toastLeftOpened = false;
  let toastCenterOpened = false;
  let toastRightOpened = false;

  const openToast = (setter) => {
    // close other toast
    toastLeftOpened = false;
    toastCenterOpened = false;
    toastRightOpened = false;
    setter();
  };
</script>

<Page>
  <Navbar title="Toast">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <Block strong class="space-y-4">
    <Toast position="left" opened={toastLeftOpened}>
      <Button
        slot="button"
        clear
        inline
        onClick={() => (toastLeftOpened = false)}
      >
        Close
      </Button>
      <div class="shrink">Hello this is left toast!</div>
    </Toast>
    <Toast position="center" opened={toastCenterOpened}>
      <Button
        slot="button"
        clear
        inline
        onClick={() => (toastCenterOpened = false)}
      >
        Close
      </Button>
      <div class="shrink">Hello this is center toast!</div>
    </Toast>
    <Toast position="right" opened={toastRightOpened}>
      <Button
        slot="button"
        clear
        inline
        onClick={() => (toastRightOpened = false)}
      >
        Close
      </Button>
      <div class="shrink">Hello this is right toast!</div>
    </Toast>
    <p>
      Toasts provide brief feedback about an operation through a message on the
      screen.
    </p>
    <p>
      <Button onClick={() => openToast(() => (toastLeftOpened = true))}>
        Toast on Left
      </Button>
    </p>
    <p>
      <Button onClick={() => openToast(() => (toastCenterOpened = true))}>
        Toast on Center
      </Button>
    </p>
    <p>
      <Button onClick={() => openToast(() => (toastRightOpened = true))}>
        Toast on Right
      </Button>
    </p>
  </Block>
</Page>
