<script>
  import { ActionsClasses } from '../../shared/esm/classes/ActionsClasses.js';
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
  <div class={c.backdrop[state]} on:click={onBackdropClick} />
{/if}
<div class={c.base[state]} {...$$restProps}>
  <slot />
</div>
