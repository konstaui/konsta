<script>
  import Button from './Button.svelte';

  export let active = false;
  export let strong = false;
  export let rounded = false;

  // svelte-ignore unused-export-let
  export let outline = false;
  // svelte-ignore unused-export-let
  export let clear = false;
</script>

<Button
  segmented
  segmentedActive={active}
  segmentedStrong={strong}
  rounded={rounded && strong}
  {...$$restProps}
>
  <slot />
</Button>
