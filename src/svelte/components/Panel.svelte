<script>
  import { cls } from '../../shared/cls.js';
  import { PanelClasses } from '../../shared/classes/PanelClasses.js';
  import { PanelColors } from '../../shared/colors/PanelColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import Glass from './Glass.svelte';
  import { useTheme } from '../shared/use-theme.js';
  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    side = 'left',
    opened = false,
    backdrop = true,
    floating = false,
    onBackdropClick = undefined,

    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const state = $derived(opened ? 'opened' : 'closed');

  const dark = useDarkClasses();

  const colors = $derived(PanelColors(colorsProp, dark));
  const theme = $derived(useTheme({ ios, material }));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      PanelClasses({ floating }, colors),
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
{#if theme === 'ios' && floating}
  <Glass bind:this={el} highlight={false} class={classes} {...restProps}>
    {@render children?.()}
  </Glass>
{:else}
  <div bind:this={el} class={classes} {...restProps}>
    {@render children?.()}
  </div>
{/if}
