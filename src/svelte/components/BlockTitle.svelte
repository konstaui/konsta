<script>
  import { BlockTitleClasses } from '../../shared/classes/BlockTitleClasses.js';
  import { BlockTitleColors } from '../../shared/colors/BlockTitleColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    medium = false,
    large = false,
    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const dark = useDarkClasses();

  const colors = $derived(BlockTitleColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      BlockTitleClasses({ medium, large }, colors),
      className
    )
  );
</script>

<div bind:this={el} class={c.base} {...restProps}>
  {@render children?.()}
</div>
