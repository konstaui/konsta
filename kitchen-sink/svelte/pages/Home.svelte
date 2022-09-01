<script>
  import {
    Page,
    Navbar,
    BlockTitle,
    List,
    ListItem,
    Radio,
    Toggle,
    Card,
    Block,
    Link,
  } from 'konsta/svelte';
  import { LogoAndroid, LogoIos, MoonStarsFill } from 'framework7-icons/svelte';

  import { afterUpdate } from 'svelte';
  import routes from '../routes.js';
  import DemoIcon from '../components/DemoIcon.svelte';

  export let theme;
  export let setTheme;
  export let colorTheme;
  export let setColorTheme;

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
  <Navbar title="Konsta UI" large transparent centerTitle />

  <BlockTitle>Theming</BlockTitle>
  <Block>
    <div class="grid grid-cols-3 gap-4">
      <Card margin="" contentWrap={false} class="overflow-hidden">
        <Link
          component="label"
          touchRipple
          class="!flex flex-col p-4 space-y-4 !space-x-0 text-center h-full"
        >
          <LogoIos class="text-[28px]" />
          <Radio
            onChange={() => setTheme('ios')}
            component="div"
            checked={theme === 'ios'}
          />
        </Link>
      </Card>

      <Card margin="" contentWrap={false} class="overflow-hidden">
        <Link
          component="label"
          touchRipple
          class=" !flex flex-col p-4 space-y-4 !space-x-0 text-center h-full"
        >
          <LogoAndroid class="text-[28px]" />
          <Radio
            onChange={() => setTheme('material')}
            component="div"
            checked={theme === 'material'}
          />
        </Link>
      </Card>

      <Card margin="" contentWrap={false} class="overflow-hidden">
        <Link
          component="label"
          touchRipple
          class="!flex flex-col p-4 space-y-4 !space-x-0 text-center h-full"
        >
          <MoonStarsFill class="text-[28px]" />
          <Toggle onChange={() => toggleDarkMode()} checked={darkMode} />
        </Link>
      </Card>
    </div>
    <Card margin="mt-4">
      <div class="flex items-center justify-around">
        <div
          on:click={() => setColorTheme('')}
          class={`bg-brand-primary w-8 h-8 rounded-full cursor-pointer duration-200 ${
            colorTheme === '' ? '' : 'scale-75'
          }`}
        />
        <div
          on:click={() => setColorTheme('k-color-brand-red')}
          class={`bg-brand-red w-8 h-8 rounded-full cursor-pointer duration-200 ${
            colorTheme === 'k-color-brand-red' ? '' : 'scale-75'
          }`}
        />
        <div
          on:click={() => setColorTheme('k-color-brand-green')}
          class={`bg-brand-green w-8 h-8 rounded-full cursor-pointer duration-200 ${
            colorTheme === 'k-color-brand-green' ? '' : 'scale-75'
          }`}
        />
        <div
          on:click={() => setColorTheme('k-color-brand-yellow')}
          class={`bg-brand-yellow w-8 h-8 rounded-full cursor-pointer duration-200 ${
            colorTheme === 'k-color-brand-yellow' ? '' : 'scale-75'
          }`}
        />
        <div
          on:click={() => setColorTheme('k-color-brand-purple')}
          class={`bg-brand-purple w-8 h-8 rounded-full cursor-pointer duration-200 ${
            colorTheme === 'k-color-brand-purple' ? '' : 'scale-75'
          }`}
        />
      </div>
    </Card>
  </Block>

  <BlockTitle>Components</BlockTitle>
  <List strong inset>
    {#each routes as route}
      <ListItem link href={`#${route.path}`} title={route.title}>
        <DemoIcon slot="media" />
      </ListItem>
    {/each}
  </List>
</Page>
