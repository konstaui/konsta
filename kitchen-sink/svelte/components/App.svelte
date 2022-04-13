<script>
  import { onMount } from 'svelte';
  import {
    App,
    Badge,
    Page,
    Navbar,
    Block,
    BlockTitle,
    BlockHeader,
    BlockFooter,
  } from 'konsta/svelte';

  let theme = 'ios';
  const inIFrame = window.parent !== window;
  const setTheme = (t) => {
    theme = t;
  };

  window.setTheme = setTheme;
  window.setMode = (mode) => {
    if (mode === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };
  onMount(() => {
    if (window.location.href.includes('safe-areas')) {
      const html = document.documentElement;
      if (html) {
        html.style.setProperty('--k-safe-area-top', '44px');
        html.style.setProperty('--k-safe-area-bottom', '34px');
      }
    }
  });

  let dark = false;

  const toggleTheme = () => {
    if (theme === 'ios') theme = 'material';
    else theme = 'ios';
  };
</script>

<App {theme} safeAreas={!inIFrame} {dark}>
  <Page>
    <Navbar title="App">
      <Badge slot="left">5</Badge>
      <Badge slot="right" colors={{ bg: 'bg-red-500' }}>6</Badge>
    </Navbar>
    <p><button on:click={toggleTheme}>Toggle Theme</button></p>
    <p>Theme is: {theme}</p>
    <Badge small={theme === 'material'}>5</Badge>

    <BlockTitle>Title</BlockTitle>
    <BlockHeader>Header</BlockHeader>
    <Block strong inset>Hello world</Block>
    <BlockFooter>Footer</BlockFooter>
  </Page>
</App>
