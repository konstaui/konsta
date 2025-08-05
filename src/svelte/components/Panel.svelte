<script>
  import { cls } from '../../shared/cls.js';
  import { PanelClasses } from '../../shared/classes/PanelClasses.js';
  import { PanelColors } from '../../shared/colors/PanelColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    size = 'w-72 h-screen',
    side = 'left',
    opened = false,
    backdrop = true,
    floating = false,
    onBackdropClick = undefined,

    children,
    ...restProps
  } = $props();

  const state = $derived(opened ? 'opened' : 'closed');

  const dark = useDarkClasses();

  const colors = $derived(PanelColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      PanelClasses({ size, floating }, colors),
      className
    )
  );

  const classes = $derived(cls(c.base, c[side][state]));
</script>

{#if backdrop}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class={c.backdrop[state]} onclick={onBackdropClick}></div>
{/if}
<div class={classes} {...restProps}>
  {@render children?.()}
</div>
