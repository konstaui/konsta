<script>
  import { ChipClasses } from '../../shared/classes/ChipClasses.js';
  import { ChipColors } from '../../shared/colors/ChipColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';

  import DeleteIcon from './icons/DeleteIcon.svelte';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let deleteButton = undefined;
  export let onDelete = undefined;
  export let outline = false;

  export let onClick = undefined;

  const dark = useDarkClasses();
  let theme;
  theme = useTheme({}, (v) => (theme = v));

  $: style = outline ? 'outline' : 'fill';

  $: colors = ChipColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    ChipClasses({}, colors),
    className,
    (v) => (c = v)
  );
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class={c.base[style]} {...$$restProps} on:click={onClick}>
  {#if $$slots.media}
    <div class={c.media}><slot name="media" /></div>
  {/if}
  <slot />
  {#if deleteButton}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class={c.deleteButton} role="button" tabindex="0" on:click={onDelete}>
      <DeleteIcon {theme} class="h-4 w-4" />
    </div>
  {/if}
</div>
