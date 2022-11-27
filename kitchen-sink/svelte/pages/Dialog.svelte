<script>
  import {
    Block,
    Button,
    Dialog,
    DialogButton,
    List,
    ListItem,
    Navbar,
    NavbarBackLink,
    Page,
    Radio,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
  let basicOpened = false;
  let alertOpened = false;
  let confirmOpened = false;
  let listOpened = false;
  let radioValue = 'batman';
</script>

<Page>
  <Navbar title="Dialog">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink on:click={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <Block strong inset class="space-y-4">
    <p>
      Dialog is a type of modal window that appears in front of app content to
      provide critical information, or prompt for a decision to be made.
    </p>
  </Block>
  <Block strong inset>
    <p class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Button rounded on:click={() => (basicOpened = true)}>Basic</Button>
      <Button rounded on:click={() => (alertOpened = true)}>Alert</Button>
      <Button rounded on:click={() => (confirmOpened = true)}>Confirm</Button>
      <Button rounded on:click={() => (listOpened = true)}>List</Button>
    </p>
  </Block>
  <Dialog opened={basicOpened} on:backdropClick={() => (basicOpened = false)}>
    <svelte:fragment slot="title">Dialog Title</svelte:fragment>
    Dialog is a type of modal window that appears in front of app content to provide
    critical information, or prompt for a decision to be made.

    <svelte:fragment slot="buttons">
      <DialogButton on:click={() => (basicOpened = false)}>
        Action 2
      </DialogButton>
      <DialogButton on:click={() => (basicOpened = false)}>
        Action 1
      </DialogButton>
    </svelte:fragment>
  </Dialog>
  <Dialog opened={alertOpened} on:backdropClick={() => (alertOpened = false)}>
    <svelte:fragment slot="title">Konsta UI</svelte:fragment>
    Hello world!
    <svelte:fragment slot="buttons">
      <DialogButton on:click={() => (alertOpened = false)}>Ok</DialogButton>
    </svelte:fragment>
  </Dialog>
  <Dialog
    opened={confirmOpened}
    on:backdropClick={() => (confirmOpened = false)}
  >
    <svelte:fragment slot="title">Konsta UI</svelte:fragment>
    All good today?
    <svelte:fragment slot="buttons">
      <DialogButton on:click={() => (confirmOpened = false)}>No</DialogButton>
      <DialogButton strong on:click={() => (confirmOpened = false)}>
        Yes
      </DialogButton>
    </svelte:fragment>
  </Dialog>
  <Dialog opened={listOpened} on:backdropClick={() => (listOpened = false)}>
    <svelte:fragment slot="title">Your super hero</svelte:fragment>
    <List nested class="-mx-4">
      <ListItem label title="Batman">
        <svelte:fragment slot="after">
          <Radio
            component="div"
            value="batman"
            checked={radioValue === 'batman'}
            on:change={() => (radioValue = 'batman')}
          />
        </svelte:fragment>
      </ListItem>
      <ListItem label title="Spider-man">
        <svelte:fragment slot="after">
          <Radio
            component="div"
            value="spiderman"
            checked={radioValue === 'spiderman'}
            on:change={() => (radioValue = 'spiderman')}
          />
        </svelte:fragment>
      </ListItem>
      <ListItem label title="Hulk">
        <svelte:fragment slot="after">
          <Radio
            component="div"
            value="hulk"
            checked={radioValue === 'hulk'}
            on:change={() => (radioValue = 'hulk')}
          />
        </svelte:fragment>
      </ListItem>
    </List>
    <svelte:fragment slot="buttons">
      <DialogButton on:click={() => (listOpened = false)}>Confirm</DialogButton>
    </svelte:fragment>
  </Dialog>
</Page>
