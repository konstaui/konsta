<script>
  import { SheetClasses } from '../../shared/classes/SheetClasses.js';
  import { SheetColors } from '../../shared/colors/SheetColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    opened = false,
    backdrop = true,
    onBackdropClick = undefined,

    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const state = $derived(opened ? 'opened' : 'closed');

  const dark = useDarkClasses();

  const colors = $derived(SheetColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses({ ios, material }, SheetClasses({}, colors), className)
  );
</script>

{#if backdrop}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class={c.backdrop[state]} onclick={onBackdropClick}></div>
{/if}
<div bind:this={el} class={c.base[state]} {...restProps}>
  {@render children?.()}
</div>
