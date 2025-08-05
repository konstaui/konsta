<script>
  import Button from './Button.svelte';

  let {
    active = false,
    strong = false,
    rounded = false,
    outline = false,
    clear = false,

    children,
    ...restProps
  } = $props();
</script>

<Button
  segmented
  segmentedActive={active}
  segmentedStrong={strong}
  rounded={rounded && strong}
  {...restProps}
>
  {@render children?.()}
</Button>
