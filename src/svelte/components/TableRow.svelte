<script>
  import { TableRowClasses } from '../../shared/classes/TableRowClasses.js';
  import { TableRowColors } from '../../shared/colors/TableRowColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export let component = 'tr';
  let className = undefined;
  export {className as class};
  let colorsProp = undefined;
  export { colorsProp as colors };

  export let ios = undefined;
  export let material = undefined;

  export let header = undefined;

  const rippleEl = { current: null };
  const dark = useDarkClasses();
  $: colors = TableRowColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    TableRowClasses({ header }, colors),
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
