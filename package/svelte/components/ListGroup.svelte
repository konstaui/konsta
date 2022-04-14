<script>
  import List from './List.svelte';
</script>

<li>
  <List nested {...$$restProps}>
    <slot />
  </List>
</li>
