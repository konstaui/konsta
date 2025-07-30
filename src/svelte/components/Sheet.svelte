<script>
  import { SheetClasses } from '../../shared/classes/SheetClasses.js';
  import { SheetColors } from '../../shared/colors/SheetColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let opened = false;
  export let backdrop = true;
  export let onBackdropClick = undefined;

  $: state = opened ? 'opened' : 'closed';

  const dark = useDarkClasses();

  $: colors = SheetColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    SheetClasses({}, colors),
    className,
    (v) => (c = v)
  );
</script>

{#if backdrop}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class={c.backdrop[state]} on:click={onBackdropClick}></div>
{/if}
<div class={c.base[state]} {...$$restProps}>
  <slot />
</div>
