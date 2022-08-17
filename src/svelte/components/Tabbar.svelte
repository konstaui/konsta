<script>
  import Toolbar from './Toolbar.svelte';

  export let labels = false;
  export let icons = false;
</script>

<Toolbar tabbar tabbarLabels={labels} tabbarIcons={icons} {...$$restProps}>
  <slot />
</Toolbar>
