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
    withBlock = true,
    medium = false,
    large = false,
    children,
    ...restProps
  } = $props();

  const dark = useDarkClasses();

  const colors = $derived(BlockTitleColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      BlockTitleClasses({ withBlock, medium, large }, colors),
      className
    )
  );
</script>

<div class={c.base} {...restProps}>
  {@render children?.()}
</div>
