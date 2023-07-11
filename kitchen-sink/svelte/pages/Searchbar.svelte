<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Searchbar,
    List,
    ListItem,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
  let searchQuery = '';
  let items = [
    { title: 'FC Ajax' },
    { title: 'FC Arsenal' },
    { title: 'FC Athletic' },
    { title: 'FC Barcelona' },
    { title: 'FC Bayern München' },
    { title: 'FC Bordeaux' },
    { title: 'FC Borussia Dortmund' },
    { title: 'FC Chelsea' },
    { title: 'FC Galatasaray' },
    { title: 'FC Juventus' },
    { title: 'FC Liverpool' },
    { title: 'FC Manchester City' },
    { title: 'FC Manchester United' },
    { title: 'FC Paris Saint-Germain' },
    { title: 'FC Real Madrid' },
    { title: 'FC Tottenham Hotspur' },
    { title: 'FC Valencia' },
    { title: 'FC West Ham United' },
  ];

  function handleSearch(e) {
    searchQuery = e.target.value;
  }

  function handleClear() {
    searchQuery = '';
  }

  function handleDisable() {
    console.log('Disable');
  }

  let filteredItems = [];

  $: {
     filteredItems = searchQuery
      ? items.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : items;
  }
</script>

<Page>
  <Navbar title="Searchbar">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
    <Searchbar
      slot="subnavbar"
      onInput={handleSearch}
      value={searchQuery}
      onClear={handleClear}
      disableButton
      disableButtonText="Cancel"
      onDisable={handleDisable}
    />
  </Navbar>
  <List strong insetMaterial outlineIos>
    {#if filteredItems.length === 0}
      <ListItem title="Nothing found" />
    {/if}
    {#each filteredItems as item (item.title)}
      <ListItem key={item.title} title={item.title} />
    {/each}
  </List>
</Page>
