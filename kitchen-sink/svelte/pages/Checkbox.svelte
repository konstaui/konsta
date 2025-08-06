<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Checkbox,
    BlockTitle,
    Block,
    List,
    ListItem,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
  let checked1 = false;
  let checked2 = true;

  // Group
  let group = ['Books'];
  const toggleGroupValue = (value) => {
    if (group.includes(value)) group.splice(group.indexOf(value), 1);
    else group.push(value);
    group = [...group];
  };

  // Indeterminate
  let movies = ['Movie 1'];
  const onMovieChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      movies.push(value);
    } else {
      movies.splice(movies.indexOf(value), 1);
    }
    movies = [...movies];
  };
  const onMoviesChange = () => {
    if (movies.length === 1 || movies.length === 0) {
      movies = ['Movie 1', 'Movie 2'];
    } else if (movies.length === 2) {
      movies = [];
    }
  };

  // Media
  let mediaValue = ['Item 1'];
  const toggleMediaValue = (value) => {
    if (mediaValue.includes(value))
      mediaValue.splice(mediaValue.indexOf(value), 1);
    else mediaValue.push(value);
    mediaValue = [...mediaValue];
  };
</script>

<Page>
  <Navbar title="Checkbox">
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
      <Checkbox
        name="checkbox-1"
        checked={checked1}
        onChange={(e) => (checked1 = e.target.checked)}
      />{' '}
      ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae illo nihil
      aut eius commodi sint eveniet aliquid eligendi{' '}
      <Checkbox
        name="checkbox-2"
        checked={checked2}
        onChange={(e) => (checked2 = e.target.checked)}
      />{' '}
      ad delectus impedit tempore nemo, enim vel praesentium consequatur nulla mollitia!
    </p>
  </Block>

  <BlockTitle>Checkbox Group</BlockTitle>
  <List strong inset>
    <ListItem label title="Books">
      {#snippet media()}
        <Checkbox
          component="div"
          name="demo-checkbox"
          checked={group.includes('Books')}
          onChange={() => toggleGroupValue('Books')}
        />
      {/snippet}
    </ListItem>
    <ListItem label title="Movies">
      {#snippet media()}
        <Checkbox
          component="div"
          name="demo-checkbox"
          checked={group.includes('Movies')}
          onChange={() => toggleGroupValue('Movies')}
        />
      {/snippet}
    </ListItem>
    <ListItem label title="Food">
      {#snippet media()}
        <Checkbox
          component="div"
          name="demo-checkbox"
          checked={group.includes('Food')}
          onChange={() => toggleGroupValue('Food')}
        />
      {/snippet}
    </ListItem>
    <ListItem label title="Drinks">
      {#snippet media()}
        <Checkbox
          component="div"
          name="demo-checkbox"
          checked={group.includes('Drinks')}
          onChange={() => toggleGroupValue('Drinks')}
        />
      {/snippet}
    </ListItem>
  </List>

  <BlockTitle>Indeterminate State</BlockTitle>
  <List strong inset>
    <ListItem label title="Movies" name="demo-checkbox">
      {#snippet media()}
        <Checkbox
          checked={movies.length === 2}
          indeterminate={movies.length === 1}
          onChange={onMoviesChange}
        />
      {/snippet}
      <ul class="ps-12">
        <ListItem label title="Movie 1">
          {#snippet media()}
            <Checkbox
              name="demo-checkbox"
              value="Movie 1"
              checked={movies.indexOf('Movie 1') >= 0}
              onChange={onMovieChange}
            />
          {/snippet}
        </ListItem>
        <ListItem label title="Movie 2">
          {#snippet media()}
            <Checkbox
              name="demo-checkbox"
              value="Movie 2"
              checked={movies.indexOf('Movie 2') >= 0}
              onChange={onMovieChange}
            />
          {/snippet}
        </ListItem>
      </ul>
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
        <Checkbox
          component="div"
          name="demo-media-checkbox"
          checked={mediaValue.includes('Item 1')}
          onChange={() => toggleMediaValue('Item 1')}
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
        <Checkbox
          component="div"
          name="demo-media-checkbox"
          checked={mediaValue.includes('Item 2')}
          onChange={() => toggleMediaValue('Item 2')}
        />
      {/snippet}
    </ListItem>
  </List>
</Page>
