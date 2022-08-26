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
        <NavbarBackLink onClick={() => history.back()} />
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
      <Button rounded onClick={() => (basicOpened = true)}>Basic</Button>
      <Button rounded onClick={() => (alertOpened = true)}>Alert</Button>
      <Button rounded onClick={() => (confirmOpened = true)}>Confirm</Button>
      <Button rounded onClick={() => (listOpened = true)}>List</Button>
    </p>
  </Block>
  <Dialog opened={basicOpened} onBackdropClick={() => (basicOpened = false)}>
    <svelte:fragment slot="title">Dialog Title</svelte:fragment>
    Dialog is a type of modal window that appears in front of app content to provide
    critical information, or prompt for a decision to be made.

    <svelte:fragment slot="buttons">
      <DialogButton onClick={() => (basicOpened = false)}>
        Action 2
      </DialogButton>
      <DialogButton onClick={() => (basicOpened = false)}>
        Action 1
      </DialogButton>
    </svelte:fragment>
  </Dialog>
  <Dialog opened={alertOpened} onBackdropClick={() => (alertOpened = false)}>
    <svelte:fragment slot="title">Konsta UI</svelte:fragment>
    Hello world!
    <svelte:fragment slot="buttons">
      <DialogButton onClick={() => (alertOpened = false)}>Ok</DialogButton>
    </svelte:fragment>
  </Dialog>
  <Dialog
    opened={confirmOpened}
    onBackdropClick={() => (confirmOpened = false)}
  >
    <svelte:fragment slot="title">Konsta UI</svelte:fragment>
    All good today?
    <svelte:fragment slot="buttons">
      <DialogButton onClick={() => (confirmOpened = false)}>No</DialogButton>
      <DialogButton strong onClick={() => (confirmOpened = false)}>
        Yes
      </DialogButton>
    </svelte:fragment>
  </Dialog>
  <Dialog opened={listOpened} onBackdropClick={() => (listOpened = false)}>
    <svelte:fragment slot="title">Your super hero</svelte:fragment>
    <List nested class="-mx-4">
      <ListItem label title="Batman">
        <svelte:fragment slot="after">
          <Radio
            component="div"
            value="batman"
            checked={radioValue === 'batman'}
            onChange={() => (radioValue = 'batman')}
          />
        </svelte:fragment>
      </ListItem>
      <ListItem label title="Spider-man">
        <svelte:fragment slot="after">
          <Radio
            component="div"
            value="spiderman"
            checked={radioValue === 'spiderman'}
            onChange={() => (radioValue = 'spiderman')}
          />
        </svelte:fragment>
      </ListItem>
      <ListItem label title="Hulk">
        <svelte:fragment slot="after">
          <Radio
            component="div"
            value="hulk"
            checked={radioValue === 'hulk'}
            onChange={() => (radioValue = 'hulk')}
          />
        </svelte:fragment>
      </ListItem>
    </List>
    <svelte:fragment slot="buttons">
      <DialogButton onClick={() => (listOpened = false)}>Confirm</DialogButton>
    </svelte:fragment>
  </Dialog>
</Page>
