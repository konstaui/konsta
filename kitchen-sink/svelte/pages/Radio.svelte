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
  let inlineValue = $state('inline-1');
  let groupValue = $state('Books');
  let mediaValue = $state('Item 1');
</script>

<Page>
  <Navbar title="Radio">
    {#snippet left()}
      {#if !isPreview}
        <NavbarBackLink onclick={() => history.back()} />
      {/if}
    {/snippet}
  </Navbar>

  <BlockTitle>Inline</BlockTitle>
  <Block strong inset>
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
  <List strong inset>
    <ListItem label title="Books">
      {#snippet media()}
        <Radio
          component="div"
          value="Books"
          checked={groupValue === 'Books'}
          onChange={() => (groupValue = 'Books')}
        />
      {/snippet}
    </ListItem>
    <ListItem label title="Movies">
      {#snippet media()}
        <Radio
          component="div"
          value="Movies"
          checked={groupValue === 'Movies'}
          onChange={() => (groupValue = 'Movies')}
        />
      {/snippet}
    </ListItem>
    <ListItem label title="Food">
      {#snippet media()}
        <Radio
          component="div"
          value="Food"
          checked={groupValue === 'Food'}
          onChange={() => (groupValue = 'Food')}
        />
      {/snippet}
    </ListItem>
    <ListItem label title="Drinks">
      {#snippet media()}
        <Radio
          component="div"
          value="Drinks"
          checked={groupValue === 'Drinks'}
          onChange={() => (groupValue = 'Drinks')}
        />
      {/snippet}
    </ListItem>
  </List>

  <List strong inset>
    <ListItem label title="Books">
      {#snippet after()}
        <Radio
          component="div"
          value="Books"
          checked={groupValue === 'Books'}
          onChange={() => (groupValue = 'Books')}
        />
      {/snippet}
    </ListItem>
    <ListItem label title="Movies">
      {#snippet after()}
        <Radio
          component="div"
          value="Movies"
          checked={groupValue === 'Movies'}
          onChange={() => (groupValue = 'Movies')}
        />
      {/snippet}
    </ListItem>
    <ListItem label title="Food">
      {#snippet after()}
        <Radio
          component="div"
          value="Food"
          checked={groupValue === 'Food'}
          onChange={() => (groupValue = 'Food')}
        />
      {/snippet}
    </ListItem>
    <ListItem label title="Drinks">
      {#snippet after()}
        <Radio
          component="div"
          value="Drinks"
          checked={groupValue === 'Drinks'}
          onChange={() => (groupValue = 'Drinks')}
        />
      {/snippet}
    </ListItem>
  </List>

  <BlockTitle>With Media Lists</BlockTitle>
  <List strong inset>
    <ListItem
      label
      title="Facebook"
      after="17:14"
      subtitle="New messages from John Doe"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
    >
      {#snippet media()}
        <Radio
          component="div"
          checked={mediaValue === 'Item 1'}
          onChange={() => (mediaValue = 'Item 1')}
        />
      {/snippet}
    </ListItem>
    <ListItem
      label
      title="John Doe (via Twitter)"
      after="17:11"
      subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
    >
      {#snippet media()}
        <Radio
          component="div"
          checked={mediaValue === 'Item 2'}
          onChange={() => (mediaValue = 'Item 2')}
        />
      {/snippet}
    </ListItem>
  </List>
</Page>
