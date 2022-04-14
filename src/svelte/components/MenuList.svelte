<script>
  import List from './List.svelte';
</script>

<List menuList {...$$restProps}>
  <slot />
</List>
