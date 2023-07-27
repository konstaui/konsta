<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    List,
    ListGroup,
    ListItem,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
</script>

<Page>
  <Navbar title="Contacts List">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>
  <List strongIos>
    <ListGroup dividers={false}>
      <ListItem title="A" groupTitle contacts/>
      <ListItem title="Aaron" contacts />
      <ListItem title="Abbie" contacts />
      <ListItem title="Adam" contacts />
      <ListItem title="Adele" contacts />
      <ListItem title="Agatha" contacts />
      <ListItem title="Agnes" contacts />
      <ListItem title="Albert" contacts />
      <ListItem title="Alexander" contacts />
    </ListGroup>
    <ListGroup dividers={false}>
      <ListItem title="B" groupTitle contacts />
      <ListItem title="Bailey" contacts />
      <ListItem title="Barclay" contacts />
      <ListItem title="Bartolo" contacts />
      <ListItem title="Bellamy" contacts />
      <ListItem title="Belle" contacts />
      <ListItem title="Benjamin" contacts />
    </ListGroup>
    <ListGroup dividers={false}>
      <ListItem title="C" groupTitle contacts />
      <ListItem title="Caiden" contacts />
      <ListItem title="Calvin" contacts />
      <ListItem title="Candy" contacts />
      <ListItem title="Carl" contacts />
      <ListItem title="Cherilyn" contacts />
      <ListItem title="Chester" contacts />
      <ListItem title="Chloe" contacts />
    </ListGroup>
    <ListGroup dividers={false}>
      <ListItem title="V" groupTitle contacts />
      <ListItem title="Vladimir" contacts />
    </ListGroup>
  </List>
</Page>
