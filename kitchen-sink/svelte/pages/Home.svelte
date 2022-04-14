<script>
  import {
    Page,
    Navbar,
    BlockTitle,
    List,
    ListItem,
    Radio,
    Toggle,
  } from 'konsta/svelte';
  import { afterUpdate, onMount } from 'svelte';
  // import { Link } from 'react-router-dom';
  // import routes from '../routes.js';
  import DemoIcon from '../components/DemoIcon.svelte';

  export let theme;
  export let setTheme;
  let darkMode = false;

  const toggleDarkMode = () => {
    darkMode = !darkMode;
    document.documentElement.classList.toggle('dark');
  };

  afterUpdate(() => {
    darkMode = document.documentElement.classList.contains('dark');
  });
</script>

<Page>
  <Navbar title="Konsta UI" />

  <BlockTitle>Theme</BlockTitle>
  <List>
    <ListItem label title="iOS Theme">
      <Radio
        slot="media"
        onChange={() => setTheme('ios')}
        component="div"
        checked={theme === 'ios'}
      />
    </ListItem>
    <ListItem label title="Material Theme">
      <Radio
        slot="media"
        onChange={() => setTheme('material')}
        component="div"
        checked={theme === 'material'}
      />
    </ListItem>
  </List>

  <List>
    <ListItem title="Dark Mode">
      <Toggle
        slot="after"
        onChange={() => toggleDarkMode()}
        checked={darkMode}
      />
    </ListItem>
  </List>

  <BlockTitle>Components</BlockTitle>
  <!-- <List>
    {routes.map((route) => (
      <ListItem
        key={route.path}
        link
        title={route.title}
        linkComponent={Link}
        linkProps={{ to: route.path }}
        media={<DemoIcon />}
      />
    ))}
  </List> -->
</Page>
