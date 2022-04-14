<script>
  import ListItem from './ListItem.svelte';

  export let active = false;
  export let href = undefined;
</script>

<ListItem
  menuListItem
  menuListItemActive={active}
  href={href || false}
  {...$$restProps}
>
  <slot />
</ListItem>
