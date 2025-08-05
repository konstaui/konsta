<script>
  import { ActionsClasses } from '../../shared/classes/ActionsClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let {
    class: className,
    ios = undefined,
    material = undefined,
    opened = undefined,
    backdrop = true,
    onBackdropClick = undefined,
    children,
    ...restProps
  } = $props();

  let state = $derived(opened ? 'opened' : 'closed');

  let c = $derived(
    useThemeClasses({ ios, material }, ActionsClasses({}), className)
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
