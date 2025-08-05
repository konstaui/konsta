<script>
  import Toolbar from './Toolbar.svelte';

  let { labels = false, icons = false, children, ...restProps } = $props();
</script>

<Toolbar tabbar tabbarLabels={labels} tabbarIcons={icons} {...restProps}>
  {@render children?.()}
</Toolbar>
