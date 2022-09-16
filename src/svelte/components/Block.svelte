<script>
  import { BlockClasses } from '../../shared/classes/BlockClasses.js';
  import { BlockColors } from '../../shared/colors/BlockColors.js';
  import { cls } from '../../shared/cls.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let margin = 'my-8';
  export let padding = 'py-4';
  export let inset = undefined;
  export let insetIos = false;
  export let insetMaterial = false;
  export let strong = undefined;
  export let strongIos = false;
  export let strongMaterial = false;
  export let outline = undefined;
  export let outlineIos = false;
  export let outlineMaterial = false;
  export let nested = undefined;

  let theme;
  theme = useTheme({}, (v) => (theme = v));

  const dark = useDarkClasses();

  $: isStrong =
    typeof strong === 'undefined'
      ? theme === 'ios'
        ? strongIos
        : strongMaterial
      : strong;

  $: isOutline =
    typeof outline === 'undefined'
      ? theme === 'ios'
        ? outlineIos
        : outlineMaterial
      : outline;
  $: isInset =
    typeof inset === 'undefined'
      ? theme === 'ios'
        ? insetIos
        : insetMaterial
      : inset;

  $: colors = BlockColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    BlockClasses(
      { margin, padding, nested, inset: isInset, outline: isOutline, strong: isStrong },
      colors,
      className
    ),
    '',
    (v) => (c = v)
  );

  $: classes = cls(
    // base
    c.base,

    // inset
    isInset && c.inset,

    className
  );
</script>

<div class={classes} {...$$restProps}>
  <slot />
</div>
