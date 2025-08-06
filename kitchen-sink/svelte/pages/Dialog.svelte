<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Block,
    Button,
    Dialog,
    DialogButton,
    List,
    ListItem,
    Radio,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
  let basicOpened = $state(false);
  let alertOpened = $state(false);
  let confirmOpened = $state(false);
  let listOpened = $state(false);
  let radioValue = $state('batman');
</script>

<Page>
  <Navbar title="Dialog">
    {#snippet left()}
      {#if !isPreview}
        <NavbarBackLink onclick={() => history.back()} />
      {/if}
    {/snippet}
  </Navbar>

  <Block strong inset class="space-y-4">
    <p>
      Dialog is a type of modal window that appears in front of app content to
      provide critical information, or prompt for a decision to be made.
    </p>
  </Block>
  <Block strong inset>
    <p class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Button rounded onclick={() => (basicOpened = true)}>Basic</Button>
      <Button rounded onclick={() => (alertOpened = true)}>Alert</Button>
      <Button rounded onclick={() => (confirmOpened = true)}>Confirm</Button>
      <Button rounded onclick={() => (listOpened = true)}>List</Button>
    </p>
  </Block>
  <Dialog opened={basicOpened} onBackdropClick={() => (basicOpened = false)}>
    {#snippet title()}
      Dialog Title
    {/snippet}
    Dialog is a type of modal window that appears in front of app content to provide
    critical information, or prompt for a decision to be made.

    {#snippet buttons()}
      <DialogButton onclick={() => (basicOpened = false)}>
        Action 2
      </DialogButton>
      <DialogButton strong onclick={() => (basicOpened = false)}>
        Action 1
      </DialogButton>
    {/snippet}
  </Dialog>
  <Dialog opened={alertOpened} onBackdropClick={() => (alertOpened = false)}>
    {#snippet title()}
      Konsta UI
    {/snippet}
    Hello world!
    {#snippet buttons()}
      <DialogButton strong onclick={() => (alertOpened = false)}
        >Ok</DialogButton
      >
    {/snippet}
  </Dialog>
  <Dialog
    opened={confirmOpened}
    onBackdropClick={() => (confirmOpened = false)}
  >
    {#snippet title()}
      Konsta UI
    {/snippet}
    All good today?
    {#snippet buttons()}
      <DialogButton onclick={() => (confirmOpened = false)}>No</DialogButton>
      <DialogButton strong onclick={() => (confirmOpened = false)}>
        Yes
      </DialogButton>
    {/snippet}
  </Dialog>
  <Dialog opened={listOpened} onBackdropClick={() => (listOpened = false)}>
    {#snippet title()}
      Your super hero
    {/snippet}
    <List nested class="-mx-4">
      <ListItem label title="Batman">
        {#snippet after()}
          <Radio
            component="div"
            value="batman"
            checked={radioValue === 'batman'}
            onChange={() => (radioValue = 'batman')}
          />
        {/snippet}
      </ListItem>
      <ListItem label title="Spider-man">
        {#snippet after()}
          <Radio
            component="div"
            value="spiderman"
            checked={radioValue === 'spiderman'}
            onChange={() => (radioValue = 'spiderman')}
          />
        {/snippet}
      </ListItem>
      <ListItem label title="Hulk">
        {#snippet after()}
          <Radio
            component="div"
            value="hulk"
            checked={radioValue === 'hulk'}
            onChange={() => (radioValue = 'hulk')}
          />
        {/snippet}
      </ListItem>
    </List>
    {#snippet buttons()}
      <DialogButton strong onclick={() => (listOpened = false)}
        >Confirm</DialogButton
      >
    {/snippet}
  </Dialog>
</Page>
