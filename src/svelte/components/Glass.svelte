<script>
  import { GlassClasses } from '../../shared/classes/GlassClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useIosHighlight } from '../../shared/use-ios-highlight.js';
  import { useTheme } from '../shared/use-theme.js';
  import { onMount, onDestroy } from 'svelte';
  import { KonstaStore } from '../shared/KonstaStore.svelte.js';
  let {
    component = 'div',
    class: className,
    ios = undefined,
    material = undefined,
    highlight = true,
    children,
    ...restProps
  } = $props();

  let el = $state(null);

  export { el };

  const theme = $derived(useTheme({ ios, material }));

  const dark = useDarkClasses();

  const c = $derived(
    useThemeClasses({ ios, material }, GlassClasses({}, dark), className)
  );

  const highlightData = { current: {} };
  const { attachEvents, detachEvents } = useIosHighlight({
    getEl: () => el,
    enabled: () =>
      highlight && theme === 'ios' && KonstaStore.iosHoverHighlight,
    data: highlightData.current,
  });

  onMount(() => {
    attachEvents();
  });
  onDestroy(() => {
    detachEvents();
  });
</script>

<svelte:element this={component} class={c.base} bind:this={el} {...restProps}>
  {@render children?.()}
</svelte:element>
