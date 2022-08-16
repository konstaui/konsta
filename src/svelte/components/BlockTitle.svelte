<script>
  import { BlockTitleClasses } from '../../shared/classes/BlockTitleClasses.js';
  import { BlockTitleColors } from '../../shared/colors/BlockTitleColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let withBlock = true;
  export let medium = false;
  export let large = false;
  const dark = useDarkClasses();

  $: colors = BlockTitleColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    BlockTitleClasses({ withBlock, medium, large }, colors),
    className,
    (v) => (c = v)
  );
</script>

<div class={c.base} {...$$restProps}>
  <slot />
</div>
