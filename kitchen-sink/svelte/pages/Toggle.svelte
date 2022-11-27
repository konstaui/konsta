<script>
  import {
    List,
    ListItem,
    Navbar,
    NavbarBackLink,
    Page,
    Toggle,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
  let checked1 = true;
  let checked2 = true;
  let checked3 = true;
  let checked4 = true;
</script>

<Page>
  <Navbar title="Toggle">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink on:click={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <List strong inset>
    <ListItem label title="Item 1">
      <Toggle
        slot="after"
        component="div"
        class="-my-1"
        checked={checked1}
        on:change={() => (checked1 = !checked1)}
      />
    </ListItem>
    <ListItem label title="Item 2">
      <Toggle
        slot="after"
        component="div"
        class="-my-1 k-color-brand-red"
        checked={checked2}
        on:change={() => (checked2 = !checked2)}
      />
    </ListItem>
    <ListItem label title="Item 3">
      <Toggle
        slot="after"
        component="div"
        class="-my-1 k-color-brand-green"
        checked={checked3}
        on:change={() => (checked3 = !checked3)}
      />
    </ListItem>
    <ListItem label title="Item 4">
      <Toggle
        slot="after"
        component="div"
        class="-my-1 k-color-brand-yellow"
        checked={checked4}
        on:change={() => (checked4 = !checked4)}
      />
    </ListItem>
  </List>
</Page>
