<script>
  import { PopupClasses } from '../../shared/classes/PopupClasses.js';
  import { PopupColors } from '../../shared/colors/PopupColors.js';
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

  const state = $derived(opened ? 'opened' : 'closed');

  const dark = useDarkClasses();

  const colors = $derived(PopupColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses({ ios, material }, PopupClasses({}, colors), className)
  );
</script>

{#if backdrop}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class={c.backdrop[state]} onclick={onBackdropClick}></div>
{/if}
<div class={c.base[state]} {...restProps}>
  {@render children?.()}
</div>
