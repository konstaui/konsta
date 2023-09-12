<script>
  import { TableHeadClasses } from '../../shared/classes/TableHeadClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export let component = 'thead';
  let className = undefined;
  export {className as class};

  export let ios = undefined;
  export let material = undefined;

  const rippleEl = { current: null };

  $: c = useThemeClasses(
    { ios, material },
    TableHeadClasses({}),
    className,
    (v) => (c = v)
  );
</script>

<svelte:element
  this={component}
  bind:this={rippleEl.current}
  class={c.base}
  {...$$restProps}
>
  <slot />
</svelte:element>
