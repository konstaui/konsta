<script>
  import { onMount } from 'svelte';
  import { App } from 'konsta/svelte';
  import HomePage from '../pages/Home.svelte';
  import BadgePage from '../pages/Badge.svelte';
  import CardsPage from '../pages/Cards.svelte';

  let theme = 'ios';
  const setTheme = (t) => {
    theme = t;
  };
  window.setTheme = setTheme;
  window.setMode = (mode) => {
    if (mode === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  const inIFrame = window.parent !== window;

  onMount(() => {
    if (window.location.href.includes('safe-areas')) {
      const html = document.documentElement;
      if (html) {
        html.style.setProperty('--k-safe-area-top', '44px');
        html.style.setProperty('--k-safe-area-bottom', '34px');
      }
    }
  });
</script>

<App {theme} safeAreas={!inIFrame}>
  <!-- <HomePage {theme} {setTheme} /> -->
  <!-- <BadgePage /> -->
  <CardsPage />
</App>
