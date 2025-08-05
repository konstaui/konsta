<script>
  import ListItem from './ListItem.svelte';

  let {
    active = false,
    href = undefined,
    children,

    ...restProps
  } = $props();
</script>

<ListItem
  menuListItem
  menuListItemActive={active}
  href={href || false}
  {...restProps}
>
  {@render children?.()}
</ListItem>
