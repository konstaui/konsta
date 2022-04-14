<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    List,
    ListButton,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
</script>

<Page>
  <Navbar title="List Button">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <List>
    <ListButton>Button 1</ListButton>
    <ListButton>Button 2</ListButton>
    <ListButton>Button 3</ListButton>
  </List>

  <List inset>
    <ListButton>Button 1</ListButton>
    <ListButton>Button 2</ListButton>
    <ListButton>Button 3</ListButton>
  </List>
  <List inset>
    <ListButton
      colors={{
        text: 'text-red-500',
        activeBg: 'active:bg-red-500',
        touchRipple: 'touch-ripple-red-500',
      }}
    >
      Red Button
    </ListButton>
  </List>
</Page>
