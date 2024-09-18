<script>
  import { onMount, onDestroy, beforeUpdate } from 'svelte';
  import { App } from 'konsta/svelte';

  import routes from '../routes.js';
  import HomePage from '../pages/Home.svelte';

  let theme = 'ios';
  const setTheme = (t) => {
    theme = t;
  };
  let currentColorTheme = '';
  const setColorTheme = (color) => {
    const htmlEl = document.documentElement;
    htmlEl.classList.forEach((c) => {
      if (c.includes('k-color')) htmlEl.classList.remove(c);
    });
    if (color) htmlEl.classList.add(color);
    currentColorTheme = color;
  };

  window.setTheme = setTheme;
  window.setMode = (mode) => {
    if (mode === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  const inIFrame = window.parent !== window;

  const calcSafeAreas = () => {
    if (window.location.href.includes('safe-areas')) {
      const html = document.documentElement;
      if (html) {
        html.style.setProperty(
          '--k-safe-area-top',
          theme === 'ios' ? '44px' : '24px'
        );
        html.style.setProperty('--k-safe-area-bottom', '34px');
      }
    }
  };

  let hash = '';
  function updateHash() {
    hash = window.location.hash;
  }

  onMount(() => {
    calcSafeAreas();
    window.addEventListener('popstate', updateHash);
  });

  beforeUpdate(() => {
    calcSafeAreas();
  });

  onDestroy(() => {
    window.removeEventListener('popstate', updateHash);
  });

  $: component = routes.find(route => route.path === hash.slice(1))?.component;
</script>

<App {theme} safeAreas={!inIFrame}>
  {#if component}
    <svelte:component this={component} />
  {:else}
    <HomePage
      {theme}
      {setTheme}
      colorTheme={currentColorTheme}
      {setColorTheme}
    />
  {/if}
</App>
