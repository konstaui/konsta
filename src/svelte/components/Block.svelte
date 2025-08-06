<script>
  import { BlockClasses } from '../../shared/classes/BlockClasses.js';
  import { BlockColors } from '../../shared/colors/BlockColors.js';
  import { cls } from '../../shared/cls.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    inset = undefined,
    insetIos = false,
    insetMaterial = false,
    strong = undefined,
    strongIos = false,
    strongMaterial = false,
    outline = undefined,
    outlineIos = false,
    outlineMaterial = false,
    nested = undefined,
    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const theme = $derived(useTheme({ ios, material }));

  const dark = useDarkClasses();

  const isStrong = $derived(
    typeof strong === 'undefined'
      ? theme === 'ios'
        ? strongIos
        : strongMaterial
      : strong
  );

  const isOutline = $derived(
    typeof outline === 'undefined'
      ? theme === 'ios'
        ? outlineIos
        : outlineMaterial
      : outline
  );

  const isInset = $derived(
    typeof inset === 'undefined'
      ? theme === 'ios'
        ? insetIos
        : insetMaterial
      : inset
  );

  const colors = $derived(BlockColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      BlockClasses(
        {
          nested,
          inset: isInset,
          outline: isOutline,
          strong: isStrong,
        },
        colors
      ),
      className
    )
  );

  const classes = $derived(
    cls(
      // base
      c.base,

      // inset
      isInset && c.inset,

      className
    )
  );
</script>

<div bind:this={el} class={classes} {...restProps}>
  {@render children?.()}
</div>
