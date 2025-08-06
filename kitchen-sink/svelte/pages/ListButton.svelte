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
    {#snippet left()}
      {#if !isPreview}
        <NavbarBackLink onclick={() => history.back()} />
      {/if}
    {/snippet}
  </Navbar>

  <List strong>
    <ListButton>Button 1</ListButton>
    <ListButton>Button 2</ListButton>
    <ListButton>Button 3</ListButton>
  </List>

  <List strong inset>
    <ListButton>Button 1</ListButton>
    <ListButton>Button 2</ListButton>
    <ListButton>Button 3</ListButton>
  </List>
  <List strong inset>
    <ListButton class="k-color-brand-red">Red Button</ListButton>
  </List>
</Page>
