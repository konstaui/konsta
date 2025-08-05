<script>
  import List from './List.svelte';
  let { children, ...restProps } = $props();
</script>

<List menuList {...restProps}>
  {@render children?.()}
</List>
