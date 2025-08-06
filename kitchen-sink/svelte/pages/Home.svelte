<script>
  import {
    Page,
    Navbar,
    BlockTitle,
    List,
    ListItem,
    Radio,
    Toggle,
    Link,
    Popover,
  } from 'konsta/svelte';

  import routes from '../routes.js';
  import DemoIcon from '../components/DemoIcon.svelte';

  let {
    theme,
    setTheme,
    setColorTheme,
    colorPickerOpened,
    vibrant,
    setVibrant,
    monochrome,
    setMonochrome,
  } = $props();

  let darkMode = $state(false);

  const toggleDarkMode = () => {
    darkMode = !darkMode;
    document.documentElement.classList.toggle('dark');
  };

  $effect(() => {
    darkMode = document.documentElement.classList.contains('dark');
  });
</script>

<Page>
  <Navbar title="Konsta UI" large transparent centerTitle />

  <BlockTitle>Theme</BlockTitle>
  <List strong inset>
    <ListItem label title="iOS Theme">
      {#snippet media()}
        <Radio
          onChange={() => setTheme('ios')}
          component="div"
          checked={theme === 'ios'}
        />
      {/snippet}
    </ListItem>
    <ListItem label title="Material Theme">
      {#snippet media()}
        <Radio
          onChange={() => setTheme('material')}
          component="div"
          checked={theme === 'material'}
        />
      {/snippet}
    </ListItem>
  </List>
  <List strong inset>
    <ListItem title="Dark Mode" label>
      {#snippet after()}
        <Toggle
          component="div"
          onChange={() => toggleDarkMode()}
          checked={darkMode}
        />
      {/snippet}
    </ListItem>

    <ListItem
      title="Color Theme"
      link
      onClick={() => (colorPickerOpened = true)}
    >
      {#snippet after()}
        <div class="w-6 h-6 rounded-full bg-primary home-color-picker"></div>
      {/snippet}
    </ListItem>
    {#if theme === 'material'}
      <ListItem title="Vibrant Colors" label>
        {#snippet after()}
          <Toggle
            component="div"
            checked={vibrant}
            onChange={() => setVibrant(!vibrant)}
          />
        {/snippet}
      </ListItem>
      <ListItem title="Monochrome" label>
        {#snippet after()}
          <Toggle
            component="div"
            checked={monochrome}
            onChange={() => setMonochrome(!monochrome)}
          />
        {/snippet}
      </ListItem>
    {/if}
  </List>
  <Popover
    opened={colorPickerOpened}
    onBackdropClick={() => (colorPickerOpened = false)}
    class="w-auto"
    target=".home-color-picker"
  >
    <div class="grid grid-cols-3 py-2 ios:px-2">
      <Link
        touchRipple
        class="overflow-hidden h-12 w-12"
        onClick={() => setColorTheme('')}
      >
        <span class="bg-brand-primary w-6 h-6 rounded-full"></span>
      </Link>
      <Link
        touchRipple
        class="overflow-hidden h-12 w-12"
        onClick={() => setColorTheme('k-color-brand-red')}
      >
        <span class="bg-brand-red w-6 h-6 rounded-full"></span>
      </Link>
      <Link
        touchRipple
        class="overflow-hidden h-12 w-12"
        onClick={() => setColorTheme('k-color-brand-green')}
      >
        <span class="bg-brand-green w-6 h-6 rounded-full"></span>
      </Link>
      <Link
        touchRipple
        class="overflow-hidden h-12 w-12"
        onClick={() => setColorTheme('k-color-brand-yellow')}
      >
        <span class="bg-brand-yellow w-6 h-6 rounded-full"></span>
      </Link>
      <Link
        touchRipple
        class="overflow-hidden h-12 w-12"
        onClick={() => setColorTheme('k-color-brand-purple')}
      >
        <span class="bg-brand-purple w-6 h-6 rounded-full"></span>
      </Link>
    </div>
  </Popover>

  <BlockTitle>Components</BlockTitle>
  <List strong inset>
    {#each routes as route}
      <ListItem link href={`#${route.path}`} title={route.title}>
        {#snippet media()}
          <DemoIcon />
        {/snippet}
      </ListItem>
    {/each}
  </List>
</Page>
