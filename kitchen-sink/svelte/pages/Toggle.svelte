<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    List,
    ListItem,
    Toggle,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
  let checked1 = $state(true);
  let checked2 = $state(true);
  let checked3 = $state(true);
  let checked4 = $state(true);
</script>

<Page>
  <Navbar title="Toggle">
    {#snippet left()}
      {#if !isPreview}
        <NavbarBackLink onclick={() => history.back()} />
      {/if}
    {/snippet}
  </Navbar>

  <List strong inset>
    <ListItem label title="Item 1">
      {#snippet after()}
        <Toggle
          component="div"
          class="-my-1"
          checked={checked1}
          onChange={() => (checked1 = !checked1)}
        />
      {/snippet}
    </ListItem>
    <ListItem label title="Item 2">
      {#snippet after()}
        <Toggle
          component="div"
          class="-my-1 k-color-brand-red"
          checked={checked2}
          onChange={() => (checked2 = !checked2)}
        />
      {/snippet}
    </ListItem>
    <ListItem label title="Item 3">
      {#snippet after()}
        <Toggle
          component="div"
          class="-my-1 k-color-brand-green"
          checked={checked3}
          onChange={() => (checked3 = !checked3)}
        />
      {/snippet}
    </ListItem>
    <ListItem label title="Item 4">
      {#snippet after()}
        <Toggle
          component="div"
          class="-my-1 k-color-brand-yellow"
          checked={checked4}
          onChange={() => (checked4 = !checked4)}
        />
      {/snippet}
    </ListItem>
  </List>
</Page>
