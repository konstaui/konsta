<script>
  import Toolbar from './Toolbar.svelte';

  let { labels = false, icons = false, children, ...restProps } = $props();

  let el = $state(null);
  export { el };
</script>

<Toolbar
  bind:this={el}
  tabbar
  tabbarLabels={labels}
  tabbarIcons={icons}
  {...restProps}
>
  {@render children?.()}
</Toolbar>
