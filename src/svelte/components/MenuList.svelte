<script>
  import List from './List.svelte';
  let { children, ...restProps } = $props();

  let el = $state(null);
  export { el };
</script>

<List bind:this={el} menuList {...restProps}>
  {@render children?.()}
</List>
