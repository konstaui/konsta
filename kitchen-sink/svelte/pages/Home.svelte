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
  import { afterUpdate } from 'svelte';
  import routes from '../routes.js';
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
  <Navbar title="Konsta UI" centerTitle />

  <BlockTitle>Theme</BlockTitle>
  <List strong outlineIos insetMaterial>
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
    <ListItem title="Dark Mode">
      <Toggle
        slot="after"
        onChange={() => toggleDarkMode()}
        checked={darkMode}
      />
    </ListItem>
  </List>

  <BlockTitle>Components</BlockTitle>
  <List strong outlineIos insetMaterial>
    {#each routes as route}
      <ListItem link href={`#${route.path}`} title={route.title}>
        <DemoIcon slot="media" />
      </ListItem>
    {/each}
  </List>
</Page>
