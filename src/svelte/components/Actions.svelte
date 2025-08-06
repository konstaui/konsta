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

  let el = $state(null);
  export { el };

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
<div bind:this={el} class={c.base[state]} {...restProps}>
  {@render children?.()}
</div>
