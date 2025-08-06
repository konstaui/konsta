<script>
  import List from './List.svelte';

  let { children, ...restProps } = $props();

  let el = $state(null);
  export { el };
</script>

<li bind:this={el}>
  <List nested {...restProps}>
    {@render children?.()}
  </List>
</li>
