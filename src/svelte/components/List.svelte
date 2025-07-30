<script>
  import { cls } from '../../shared/cls.js';
  import { ListClasses } from '../../shared/classes/ListClasses.js';
  import { ListColors } from '../../shared/colors/ListColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';
  import { setReactiveContext } from '../shared/set-reactive-context.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let margin = 'my-8';
  export let dividers = undefined;
  export let dividersIos = true;
  export let dividersMaterial = false;
  export let inset = undefined;
  export let insetIos = undefined;
  export let insetMaterial = undefined;
  export let strong = undefined;
  export let strongIos = undefined;
  export let strongMaterial = undefined;
  export let outline = undefined;
  export let outlineIos = undefined;
  export let outlineMaterial = undefined;
  export let nested = false;
  export let menuList = false;

  let theme;
  theme = useTheme({}, (v) => (theme = v));

  const dark = useDarkClasses();

  /* eslint-disable */
  const hasDividers = () =>
    typeof dividers === 'undefined'
      ? theme === 'ios'
        ? dividersIos
        : dividersMaterial
      : dividers;
  /* eslint-enable */
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
  /* eslint-disable */
  $: isInset =
    typeof inset === 'undefined'
      ? theme === 'ios'
        ? insetIos
        : insetMaterial
      : inset;
  /* eslint-enable */

  // eslint-disable-next-line
  setReactiveContext('ListDividersContext', () => {
    return {
      value: hasDividers(),
    };
  });

  $: colors = ListColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    ListClasses(
      { nested, margin, inset: isInset, outline: isOutline, strong: isStrong },
      colors,
    ),
    '',
    (v) => (c = v)
  );

  $: classes = cls(
    c.base,

    isInset && c.inset,

    menuList && c.menuList,

    className
  );
</script>

<div class={classes} {...$$restProps}>
  <ul class={c.ul}>
    <slot />
  </ul>
</div>
