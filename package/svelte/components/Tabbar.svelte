<script>
  import Toolbar from './Toolbar.svelte';

  export let labels = false;
</script>

<Toolbar tabbar tabbarLabels={labels} {...$$restProps}>
  <slot />
</Toolbar>
