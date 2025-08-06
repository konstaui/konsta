<script>
  import { getContext, setContext } from 'svelte';
  let { children } = $props();
  const ListContext =
    getContext('ListContext') ||
    (() => ({
      value: { dividers: false, nested: false },
    }));

  setContext('ListContext', () => ({
    value: { dividers: ListContext().value.dividers, nested: false },
  }));
</script>

{@render children?.()}
