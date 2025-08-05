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
  let toastLeftOpened = $state(false);
  let toastCenterOpened = $state(false);
  let toastRightOpened = $state(false);

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
    {#snippet left()}
      {#if !isPreview}
        <NavbarBackLink onclick={() => history.back()} />
      {/if}
    {/snippet}
  </Navbar>

  <Block strongIos outlineIos class="flex flex-col gap-4">
    <Toast position="left" opened={toastLeftOpened}>
      {#snippet button()}
        <Button clear inline onClick={() => (toastLeftOpened = false)}>
          Close
        </Button>
      {/snippet}
      <div class="shrink">Hello this is left toast!</div>
    </Toast>
    <Toast position="center" opened={toastCenterOpened}>
      {#snippet button()}
        <Button clear inline onClick={() => (toastCenterOpened = false)}>
          Close
        </Button>
      {/snippet}
      <div class="shrink">Hello this is center toast!</div>
    </Toast>
    <Toast position="right" opened={toastRightOpened}>
      {#snippet button()}
        <Button clear inline onClick={() => (toastRightOpened = false)}>
          Close
        </Button>
      {/snippet}
      <div class="shrink">Hello this is right toast!</div>
    </Toast>
    <p>
      Toasts provide brief feedback about an operation through a message on the
      screen.
    </p>
    <p>
      <Button onclick={() => openToast(() => (toastLeftOpened = true))}>
        Toast on Left
      </Button>
    </p>
    <p>
      <Button onclick={() => openToast(() => (toastCenterOpened = true))}>
        Toast on Center
      </Button>
    </p>
    <p>
      <Button onclick={() => openToast(() => (toastRightOpened = true))}>
        Toast on Right
      </Button>
    </p>
  </Block>
</Page>
