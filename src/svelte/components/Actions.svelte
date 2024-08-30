<script>
  import { ActionsClasses } from '../../shared/classes/ActionsClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  export let ios = undefined;
  export let material = undefined;

  export let opened = undefined;
  export let backdrop = true;
  export let onBackdropClick = undefined;

  $: state = opened ? 'opened' : 'closed';

  $: c = useThemeClasses(
    { ios, material },
    ActionsClasses({}),
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
