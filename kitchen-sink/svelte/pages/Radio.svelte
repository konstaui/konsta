<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Radio,
    BlockTitle,
    Block,
    List,
    ListItem,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
  let inlineValue = 'inline-1';
  let groupValue = 'Books';
  let mediaValue = 'Item 1';
</script>

<Page>
  <Navbar title="Radio">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <BlockTitle>Inline</BlockTitle>
  <Block strongIos outlineIos>
    <p>
      Lorem{' '}
      <Radio
        name="demo-radio-inline"
        value="inline-1"
        checked={inlineValue === 'inline-1'}
        onChange={() => (inlineValue = 'inline-1')}
      />{' '}
      ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae illo nihil
      aut eius commodi sint eveniet aliquid eligendi{' '}
      <Radio
        name="demo-radio-inline"
        value="inline-2"
        checked={inlineValue === 'inline-2'}
        onChange={() => (inlineValue = 'inline-2')}
      />{' '}
      ad delectus impedit tempore nemo, enim vel praesentium consequatur nulla mollitia!
    </p>
  </Block>

  <BlockTitle>Radio Group</BlockTitle>
  <List strongIos outlineIos>
    <ListItem label title="Books">
      <Radio
        slot="media"
        component="div"
        value="Books"
        checked={groupValue === 'Books'}
        onChange={() => (groupValue = 'Books')}
      />
    </ListItem>
    <ListItem label title="Movies">
      <Radio
        slot="media"
        component="div"
        value="Movies"
        checked={groupValue === 'Movies'}
        onChange={() => (groupValue = 'Movies')}
      />
    </ListItem>
    <ListItem label title="Food">
      <Radio
        slot="media"
        component="div"
        value="Food"
        checked={groupValue === 'Food'}
        onChange={() => (groupValue = 'Food')}
      />
    </ListItem>
    <ListItem label title="Drinks">
      <Radio
        slot="media"
        component="div"
        value="Drinks"
        checked={groupValue === 'Drinks'}
        onChange={() => (groupValue = 'Drinks')}
      />
    </ListItem>
  </List>

  <List strongIos outlineIos>
    <ListItem label title="Books">
      <Radio
        slot="after"
        component="div"
        value="Books"
        checked={groupValue === 'Books'}
        onChange={() => (groupValue = 'Books')}
      />
    </ListItem>
    <ListItem label title="Movies">
      <Radio
        slot="after"
        component="div"
        value="Movies"
        checked={groupValue === 'Movies'}
        onChange={() => (groupValue = 'Movies')}
      />
    </ListItem>
    <ListItem label title="Food">
      <Radio
        slot="after"
        component="div"
        value="Food"
        checked={groupValue === 'Food'}
        onChange={() => (groupValue = 'Food')}
      />
    </ListItem>
    <ListItem label title="Drinks">
      <Radio
        slot="after"
        component="div"
        value="Drinks"
        checked={groupValue === 'Drinks'}
        onChange={() => (groupValue = 'Drinks')}
      />
    </ListItem>
  </List>

  <BlockTitle>With Media Lists</BlockTitle>
  <List strongIos outlineIos>
    <ListItem
      label
      title="Facebook"
      after="17:14"
      subtitle="New messages from John Doe"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
    >
      <Radio
        slot="media"
        component="div"
        checked={mediaValue === 'Item 1'}
        onChange={() => (mediaValue = 'Item 1')}
      />
    </ListItem>
    <ListItem
      label
      title="John Doe (via Twitter)"
      after="17:11"
      subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
    >
      <Radio
        slot="media"
        component="div"
        checked={mediaValue === 'Item 2'}
        onChange={() => (mediaValue = 'Item 2')}
      />
    </ListItem>
  </List>
</Page>
