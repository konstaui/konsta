<script>
  import { TableRowClasses } from '../../shared/classes/TableRowClasses.js';
  import { TableRowColors } from '../../shared/colors/TableRowColors.js';
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

  const dark = useDarkClasses();

  const colors = $derived(TableRowColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      TableRowClasses({ header }, colors),
      className
    )
  );
</script>

<tr bind:this={el} class={c.base} {...restProps}>
  {@render children?.()}
</tr>
