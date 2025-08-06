<script>
  import { TableCellClasses } from '../../shared/classes/TableCellClasses.js';
  import { TableCellColors } from '../../shared/colors/TableCellColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    header = false,

    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const component = $derived(header ? 'th' : 'td');
  const dark = useDarkClasses();
  const colors = $derived(TableCellColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      TableCellClasses({ header }, colors),
      className
    )
  );
</script>

<svelte:element this={component} bind:this={el} class={c.base} {...restProps}>
  {@render children?.()}
</svelte:element>
