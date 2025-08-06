<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    BlockTitle,
    BlockHeader,
    List,
    ListItem,
    Range,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
  let volume = $state(50);
  let price = $state(150);
  let red = $state(100);
  let green = $state(50);
  let blue = $state(75);
</script>

<Page>
  <Navbar title="Range Slider">
    {#snippet left()}
      {#if !isPreview}
        <NavbarBackLink onclick={() => history.back()} />
      {/if}
    {/snippet}
  </Navbar>

  <BlockTitle>Volume: {volume}</BlockTitle>
  <BlockHeader>From 0 to 100 with step 10</BlockHeader>
  <List strong inset>
    <ListItem innerClass="flex space-x-4 rtl:space-x-reverse">
      {#snippet inner()}
        <span>0</span>
        <Range
          value={volume}
          step={10}
          onInput={(e) => (volume = e.target.value)}
        />
        <span>100</span>
      {/snippet}
    </ListItem>
  </List>

  <BlockTitle>Price: ${price}</BlockTitle>
  <BlockHeader>From 0 to 1000 with step 1</BlockHeader>
  <List strong inset>
    <ListItem innerClass="flex space-x-4 rtl:space-x-reverse">
      {#snippet inner()}
        <span>$0</span>
        <Range
          value={price}
          step={1}
          min={0}
          max={1000}
          onInput={(e) => (price = e.target.value)}
        />
        <span>$1000</span>
      {/snippet}
    </ListItem>
  </List>

  <BlockTitle>
    Color: rgb({red}, {green}, {blue})
  </BlockTitle>
  <List strong inset>
    <ListItem>
      {#snippet inner()}
        <Range
          class="k-color-brand-red"
          value={red}
          step={1}
          min={0}
          max={255}
          onInput={(e) => (red = e.target.value)}
        />
      {/snippet}
    </ListItem>
    <ListItem>
      {#snippet inner()}
        <Range
          class="k-color-brand-green"
          value={green}
          step={1}
          min={0}
          max={255}
          onInput={(e) => (green = e.target.value)}
        />
      {/snippet}
    </ListItem>
    <ListItem>
      {#snippet inner()}
        <Range
          class="k-color-brand-blue"
          value={blue}
          step={1}
          min={0}
          max={255}
          onInput={(e) => (blue = e.target.value)}
        />
      {/snippet}
    </ListItem>
  </List>
</Page>
