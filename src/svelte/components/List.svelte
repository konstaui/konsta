<script>
  import { cls } from '../../shared/cls.js';
  import { ListClasses } from '../../shared/classes/ListClasses.js';
  import { ListColors } from '../../shared/colors/ListColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';
  import { setContext } from 'svelte';

  let {
    class: className,
    colors: colorsProp,

    ios = undefined,
    material = undefined,

    dividers = undefined,
    dividersIos = true,
    dividersMaterial = false,
    inset = undefined,
    insetIos = undefined,
    insetMaterial = undefined,
    strong = undefined,
    strongIos = undefined,
    strongMaterial = undefined,
    outline = undefined,
    outlineIos = undefined,
    outlineMaterial = undefined,
    nested = false,
    menuList = false,

    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const theme = $derived(useTheme({ ios, material }));

  const dark = useDarkClasses();

  /* eslint-disable */
  const hasDividers = $derived(
    typeof dividers === 'undefined'
      ? theme === 'ios'
        ? dividersIos
        : dividersMaterial
      : dividers
  );
  /* eslint-enable */
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
  /* eslint-disable */
  const isInset = $derived(
    typeof inset === 'undefined'
      ? theme === 'ios'
        ? insetIos
        : insetMaterial
      : inset
  );
  setContext('ListContext', () => ({
    value: { dividers: hasDividers, nested },
  }));

  const colors = $derived(ListColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      ListClasses(
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
      c.base,

      isInset && c.inset,

      menuList && c.menuList,

      className
    )
  );
</script>

<div bind:this={el} class={classes} {...restProps}>
  <ul class={c.ul}>
    {@render children?.()}
  </ul>
</div>
