<script>
  import { GlassClasses } from '../../shared/classes/GlassClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useHoverable } from '../../shared/use-hoverable.js';
  import { useTheme } from '../shared/use-theme.js';
  import { onMount, onDestroy } from 'svelte';

  let {
    component = 'div',
    class: className,
    ios = undefined,
    material = undefined,
    hoverable = true,
    children,
    ...restProps
  } = $props();

  const theme = $derived(useTheme({ ios, material }));

  let Component = component;

  const el = { current: null };

  const dark = useDarkClasses();

  const c = $derived(
    useThemeClasses({ ios, material }, GlassClasses({}, dark), className)
  );

  const hoverableData = { current: {} };
  const { attachEvents, detachEvents } = useHoverable({
    getEl: () => el.current,
    enabled: () => hoverable && theme === 'ios',
    data: hoverableData.current,
  });

  onMount(() => {
    attachEvents();
  });
  onDestroy(() => {
    detachEvents();
  });
</script>

<svelte:element
  this={Component}
  class={c.base}
  bind:this={el.current}
  {...restProps}
>
  {@render children?.()}
</svelte:element>
