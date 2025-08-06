<script>
  import ListItem from './ListItem.svelte';

  let {
    active = false,
    href = undefined,
    children,

    ...restProps
  } = $props();

  let el = $state(null);
  export { el };
</script>

<ListItem
  bind:this={el}
  menuListItem
  menuListItemActive={active}
  href={href || false}
  {...restProps}
>
  {@render children?.()}
</ListItem>
