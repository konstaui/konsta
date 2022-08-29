<script>
  import { BlockHeaderClasses } from '../../shared/classes/BlockHeaderClasses.js';
  import { BlockHeaderColors } from '../../shared/colors/BlockHeaderColors.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;
  export let inset = undefined;
  export let insetIos = undefined;
  export let insetMaterial = undefined;

  let theme;
  theme = useTheme({}, (v) => (theme = v));

  const dark = useDarkClasses();

  $: isInset =
    typeof inset === 'undefined'
      ? theme === 'ios'
        ? insetIos
        : insetMaterial
      : inset;

  $: colors = BlockHeaderColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    BlockHeaderClasses({ inset: isInset }, colors),
    className,
    (v) => (c = v)
  );
</script>

<div class={c.base} {...$$restProps}>
  <slot />
</div>
