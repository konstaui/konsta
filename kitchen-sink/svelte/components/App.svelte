<script>
  import { onMount } from 'svelte';
  import { App } from 'konsta/svelte';
  import { Router, Route, createHistory } from 'svelte-navigator';
  import createHashSource from '../hashHistory.js';

  import routes from '../routes.js';
  import HomePage from '../pages/Home.svelte';

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

  const hash = createHistory(createHashSource());
</script>

<App {theme} safeAreas={!inIFrame}>
  <Router history={hash} primary={false}>
    <Route path="/">
      <HomePage {theme} {setTheme} />
    </Route>
    {#each routes as route}
      <Route path={route.path} component={route.component} />
    {/each}
  </Router>
</App>
