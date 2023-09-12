<script>
  import { TableCellClasses } from '../../shared/classes/TableCellClasses.js';
  import { TableCellColors } from '../../shared/colors/TableCellColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export let header = undefined;
  export let component = header ? 'th' : 'td';
  let className = undefined;
  export {className as class};
  let colorsProp = undefined;
  export { colorsProp as colors };

  export let ios = undefined;
  export let material = undefined;

  const rippleEl = { current: null };
  const dark = useDarkClasses();
  $: colors = TableCellColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    TableCellClasses({ header }, colors),
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
