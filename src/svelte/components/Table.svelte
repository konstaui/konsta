<script>
  import { TableClasses } from '../../shared/classes/TableClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export let component = 'div';
  let className = undefined;
  export {className as class};

  export let ios = undefined;
  export let material = undefined;

  const rippleEl = { current: null };

  $: c = useThemeClasses(
    { ios, material },
    TableClasses({}),
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
  <table class={c.table}>
    <slot />
  </table>

</svelte:element>
