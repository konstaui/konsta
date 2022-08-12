<script>
  import { BlockHeaderClasses } from '../../shared/classes/BlockHeaderClasses.js';
  import { BlockHeaderColors } from '../../shared/colors/BlockHeaderColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  const dark = useDarkClasses();

  $: colors = BlockHeaderColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    BlockHeaderClasses({}, colors),
    className,
    (v) => (c = v)
  );
</script>

<div class={c.base} {...$$restProps}>
  <slot />
</div>
