<script>
  import { PopupClasses } from '../../shared/classes/PopupClasses.js';
  import { PopupColors } from '../../shared/colors/PopupColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let size = 'w-screen h-screen md:w-160 md:h-160';
  export let opened = false;
  export let backdrop = true;
  export let onBackdropClick = undefined;

  $: state = opened ? 'opened' : 'closed';

  const dark = useDarkClasses();

  $: colors = PopupColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    PopupClasses({ size }, colors, className),
    className,
    (v) => (c = v)
  );
</script>

{#if backdrop}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class={c.backdrop[state]} on:click={onBackdropClick} />
{/if}
<div class={c.base[state]} {...$$restProps}>
  <slot />
</div>
