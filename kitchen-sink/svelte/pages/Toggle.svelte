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
  let checked1 = true;
  let checked2 = true;
  let checked3 = true;
  let checked4 = true;
</script>

<Page>
  <Navbar title="Toggle">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <List>
    <ListItem title="Item 1">
      <Toggle
        slot="after"
        class="-my-1"
        checked={checked1}
        onChange={() => (checked1 = !checked1)}
      />
    </ListItem>
    <ListItem title="Item 2">
      <Toggle
        slot="after"
        class="-my-1"
        colors={{ bg: 'bg-red-500' }}
        checked={checked2}
        onChange={() => (checked2 = !checked2)}
      />
    </ListItem>
    <ListItem title="Item 3">
      <Toggle
        slot="after"
        class="-my-1"
        colors={{ bg: 'bg-green-500' }}
        checked={checked3}
        onChange={() => (checked3 = !checked3)}
      />
    </ListItem>
    <ListItem title="Item 4">
      <Toggle
        slot="after"
        class="-my-1"
        colors={{ bg: 'bg-yellow-500' }}
        checked={checked4}
        onChange={() => (checked4 = !checked4)}
      />
    </ListItem>
  </List>
</Page>
