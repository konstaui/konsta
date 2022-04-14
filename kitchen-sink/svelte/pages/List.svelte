<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Badge,
    Block,
    BlockTitle,
    List,
    ListGroup,
    ListItem,
  } from 'konsta/svelte';
  import DemoIcon from '../components/DemoIcon.svelte';

  const isPreview = document.location.href.includes('examplePreview');
</script>

<Page>
  <Navbar title="List">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <BlockTitle>Simple List</BlockTitle>
  <List>
    <ListItem title="Item 1" />
    <ListItem title="Item 2" />
    <ListItem title="Item 3" />
  </List>

  <BlockTitle>Simple Links List</BlockTitle>
  <List>
    <ListItem title="Link 1" link />
    <ListItem title="Link 2" link />
    <ListItem title="Link 3" link />
  </List>

  <BlockTitle>Data list, with icons</BlockTitle>
  <List>
    <ListItem title="Ivan Petrov" after="CEO">
      <DemoIcon slot="media" />
    </ListItem>
    <ListItem title="John Doe">
      <DemoIcon slot="media" />
      <Badge slot="after">5</Badge>
    </ListItem>
    <ListItem title="Jenna Smith">
      <DemoIcon slot="media" />
    </ListItem>
  </List>
  <BlockTitle>Links</BlockTitle>
  <List>
    <ListItem link title="Ivan Petrov" after="CEO"
      ><DemoIcon slot="media" /></ListItem
    >
    <ListItem link title="John Doe" after="Cleaner"
      ><DemoIcon slot="media" /></ListItem
    >
    <ListItem link title="Jenna Smith"><DemoIcon slot="media" /></ListItem>
  </List>
  <BlockTitle>Links, Header, Footer</BlockTitle>
  <List>
    <ListItem link header="Name" title="John Doe" after="Edit">
      <DemoIcon slot="media" />
    </ListItem>
    <ListItem link header="Phone" title="+7 90 111-22-3344" after="Edit">
      <DemoIcon slot="media" />
    </ListItem>
    <ListItem link header="Email" title="john@doe" footer="Home" after="Edit">
      <DemoIcon slot="media" />
    </ListItem>
    <ListItem
      link
      header="Email"
      title="john@konsta"
      footer="Work"
      after="Edit"
    >
      <DemoIcon slot="media" />
    </ListItem>
  </List>

  <BlockTitle>Links, no icons</BlockTitle>
  <List>
    <ListItem link title="Ivan Petrov" />
    <ListItem link title="John Doe" />
    <ListItem divider title="Divider Here" />
    <ListItem link title="Ivan Petrov" />
    <ListItem link title="Jenna Smith" />
  </List>

  <BlockTitle>Grouped with sticky titles</BlockTitle>
  <List>
    <ListGroup>
      <ListItem
        title="A"
        groupTitle
        class="ios:top-11-safe material:top-14-safe"
      />
      <ListItem title="Aaron " />
      <ListItem title="Abbie" />
      <ListItem title="Adam" />
    </ListGroup>
    <ListGroup>
      <ListItem
        title="B"
        groupTitle
        class="ios:top-11-safe material:top-14-safe"
      />
      <ListItem title="Bailey" />
      <ListItem title="Barclay" />
      <ListItem title="Bartolo" />
    </ListGroup>
    <ListGroup>
      <ListItem
        title="C"
        groupTitle
        class="ios:top-11-safe material:top-14-safe"
      />
      <ListItem title="Caiden" />
      <ListItem title="Calvin" />
      <ListItem title="Candy" />
    </ListGroup>
  </List>

  <BlockTitle>Inset List</BlockTitle>
  <List inset>
    <ListItem title="Item 1" />
    <ListItem title="Item 2" />
    <ListItem title="Item 3" />
  </List>

  <BlockTitle class="text-2xl">Media Lists</BlockTitle>
  <Block>
    <p>
      Media Lists are almost the same as Data Lists, but with a more flexible
      layout for visualization of more complex data, like products, services,
      user, etc.
    </p>
  </Block>

  <BlockTitle>Songs</BlockTitle>
  <List>
    <ListItem
      link
      title="Yellow Submarine"
      after="$15"
      subtitle="Beatles"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
    >
      <img
        slot="media"
        src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
        width="80"
        alt="demo"
      />
    </ListItem>
    <ListItem
      link
      title="Don't Stop Me Now"
      after="$22"
      subtitle="Queen"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
    >
      <img
        slot="media"
        src="https://cdn.framework7.io/placeholder/people-160x160-2.jpg"
        width="80"
        alt="demo"
      />
    </ListItem>
    <ListItem
      link
      title="Billie Jean"
      after="$16"
      subtitle="Michael Jackson"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
    >
      <img
        slot="media"
        src="https://cdn.framework7.io/placeholder/people-160x160-3.jpg"
        width="80"
        alt="demo"
      />
    </ListItem>
  </List>
  <BlockTitle>Mail App</BlockTitle>
  <List>
    <ListItem
      link
      title="Facebook"
      after="17:14"
      subtitle="New messages from John Doe"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
    />
    <ListItem
      link
      title="John Doe (via Twitter)"
      after="17:11"
      subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
    />
    <ListItem
      link
      title="Facebook"
      after="16:48"
      subtitle="New messages from John Doe"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
    />
    <ListItem
      link
      title="John Doe (via Twitter)"
      after="15:32"
      subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
    />
  </List>
</Page>
