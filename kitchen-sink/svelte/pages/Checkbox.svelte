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
  let media = ['Item 1'];
  const toggleMediaValue = (value) => {
    if (media.includes(value)) media.splice(media.indexOf(value), 1);
    else media.push(value);
    media = [...media];
  };
</script>

<Page>
  <Navbar title="Checkbox">
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
  <List strongIos outlineIos>
    <ListItem label title="Books">
      <Checkbox
        slot="media"
        component="div"
        name="demo-checkbox"
        checked={group.includes('Books')}
        onChange={() => toggleGroupValue('Books')}
      />
    </ListItem>
    <ListItem label title="Movies">
      <Checkbox
        slot="media"
        component="div"
        name="demo-checkbox"
        checked={group.includes('Movies')}
        onChange={() => toggleGroupValue('Movies')}
      />
    </ListItem>
    <ListItem label title="Food">
      <Checkbox
        slot="media"
        component="div"
        name="demo-checkbox"
        checked={group.includes('Food')}
        onChange={() => toggleGroupValue('Food')}
      />
    </ListItem>
    <ListItem label title="Drinks">
      <Checkbox
        slot="media"
        component="div"
        name="demo-checkbox"
        checked={group.includes('Drinks')}
        onChange={() => toggleGroupValue('Drinks')}
      />
    </ListItem>
  </List>

  <BlockTitle>Indeterminate State</BlockTitle>
  <List strongIos outlineIos>
    <ListItem label title="Movies" name="demo-checkbox">
      <Checkbox
        slot="media"
        checked={movies.length === 2}
        indeterminate={movies.length === 1}
        onChange={onMoviesChange}
      />
      <ul class="ps-12">
        <ListItem label title="Movie 1">
          <Checkbox
            slot="media"
            name="demo-checkbox"
            value="Movie 1"
            checked={movies.indexOf('Movie 1') >= 0}
            onChange={onMovieChange}
          />
        </ListItem>
        <ListItem label title="Movie 2">
          <Checkbox
            slot="media"
            name="demo-checkbox"
            value="Movie 2"
            checked={movies.indexOf('Movie 2') >= 0}
            onChange={onMovieChange}
          />
        </ListItem>
      </ul>
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
      <Checkbox
        slot="media"
        component="div"
        name="demo-media-checkbox"
        checked={media.includes('Item 1')}
        onChange={() => toggleMediaValue('Item 1')}
      />
    </ListItem>
    <ListItem
      label
      title="John Doe (via Twitter)"
      after="17:11"
      subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
    >
      <Checkbox
        slot="media"
        component="div"
        name="demo-media-checkbox"
        checked={media.includes('Item 2')}
        onChange={() => toggleMediaValue('Item 2')}
      />
    </ListItem>
  </List>
</Page>
