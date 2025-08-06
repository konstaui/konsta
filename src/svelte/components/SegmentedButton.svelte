<script>
  import { getContext } from 'svelte';
  import Button from './Button.svelte';

  let {
    active = false,
    clear = false,

    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const SegmentedContext =
    getContext('SegmentedContext') ||
    (() => ({ value: { strong: false, rounded: false } }));
  const { strong, rounded, setActiveEl } = $derived(
    SegmentedContext()?.value || { strong: false, rounded: false }
  );

  $effect(() => {
    if (active) {
      setActiveEl?.(el);
    }
  });
</script>

<Button
  bind:this={el}
  segmented
  segmentedActive={active}
  segmentedStrong={strong}
  rounded={rounded && strong}
  {...restProps}
>
  {@render children?.()}
</Button>
