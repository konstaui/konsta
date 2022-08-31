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
    <ListButton className="k-color-brand-red">Red Button</ListButton>
  </List>
</Page>
