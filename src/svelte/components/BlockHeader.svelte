<script>
  import { BlockHeaderClasses } from '../../shared/classes/BlockHeaderClasses.js';
  import { BlockHeaderColors } from '../../shared/colors/BlockHeaderColors.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    inset = undefined,
    insetIos = false,
    insetMaterial = false,
    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const theme = $derived(useTheme({ ios, material }));

  const dark = useDarkClasses();

  const isInset = $derived(
    typeof inset === 'undefined'
      ? theme === 'ios'
        ? insetIos
        : insetMaterial
      : inset
  );

  const colors = $derived(BlockHeaderColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      BlockHeaderClasses({ inset: isInset }, colors),
      className
    )
  );
</script>

<div bind:this={el} class={c.base} {...restProps}>
  {@render children?.()}
</div>
