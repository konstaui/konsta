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
  let volume = 50;
  let price = 150;
  let red = 100;
  let green = 50;
  let blue = 75;
</script>

<Page>
  <Navbar title="Range Slider">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <BlockTitle>Volume: {volume}</BlockTitle>
  <BlockHeader>From 0 to 100 with step 10</BlockHeader>
  <List strong insetMaterial outlineIos>
    <ListItem innerClass="flex space-x-4 rtl:space-x-reverse">
      <svelte:fragment slot="inner">
        <span>0</span>
        <Range
          value={volume}
          step={10}
          onInput={(e) => (volume = e.target.value)}
        />
        <span>100</span>
      </svelte:fragment>
    </ListItem>
  </List>

  <BlockTitle>Price: ${price}</BlockTitle>
  <BlockHeader>From 0 to 1000 with step 1</BlockHeader>
  <List strong insetMaterial outlineIos>
    <ListItem innerClass="flex space-x-4 rtl:space-x-reverse">
      <svelte:fragment slot="inner">
        <span>$0</span>
        <Range
          value={price}
          step={1}
          min={0}
          max={1000}
          onInput={(e) => (price = e.target.value)}
        />
        <span>$1000</span>
      </svelte:fragment>
    </ListItem>
  </List>

  <BlockTitle>
    Color: rgb({red}, {green}, {blue})
  </BlockTitle>
  <List strong insetMaterial outlineIos>
    <ListItem>
      <Range
        slot="inner"
        class="k-color-brand-red"
        value={red}
        step={1}
        min={0}
        max={255}
        onInput={(e) => (red = e.target.value)}
      /></ListItem
    >
    <ListItem>
      <Range
        slot="inner"
        class="k-color-brand-green"
        value={green}
        step={1}
        min={0}
        max={255}
        onInput={(e) => (green = e.target.value)}
      /></ListItem
    >
    <ListItem>
      <Range
        slot="inner"
        class="k-color-brand-blue"
        value={blue}
        step={1}
        min={0}
        max={255}
        onInput={(e) => (blue = e.target.value)}
      /></ListItem
    >
  </List>
</Page>
