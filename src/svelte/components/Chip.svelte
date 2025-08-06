<script>
  import { ChipClasses } from '../../shared/classes/ChipClasses.js';
  import { ChipColors } from '../../shared/colors/ChipColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';

  import DeleteIcon from './icons/DeleteIcon.svelte';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    deleteButton = undefined,
    onDelete = undefined,
    ondelete = undefined,
    onClick = undefined,
    onclick = undefined,
    outline = false,
    media = undefined,
    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const dark = useDarkClasses();
  const theme = $derived(useTheme({ ios, material }));

  const style = $derived(outline ? 'outline' : 'fill');

  const colors = $derived(ChipColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses({ ios, material }, ChipClasses({}, colors), className)
  );
</script>

<div
  bind:this={el}
  class={c.base[style]}
  {...restProps}
  onclick={onClick || onclick}
>
  {#if media}
    <div class={c.media}>{@render media()}</div>
  {/if}
  {@render children?.()}
  {#if deleteButton}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div
      class={c.deleteButton}
      role="button"
      tabindex="0"
      onclick={onDelete || ondelete}
    >
      <DeleteIcon {theme} class="h-4 w-4" />
    </div>
  {/if}
</div>
