<script>
  import { BlockClasses } from '../../shared/classes/BlockClasses.js';
  import { cls } from '../../shared/cls.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let margin = 'my-8';
  export let strong = undefined;
  export let inset = undefined;
  export let nested = undefined;

  export let hairlines = true;

  const dark = useDarkClasses();

  $: colors = {
    strongBg: cls(`bg-block-strong-light`, dark('dark:bg-block-strong-dark')),
    ...colorsProp,
  };

  $: c = useThemeClasses(
    { ios, material },
    BlockClasses(
      { margin, strong, inset, nested, hairlines },
      colors,
      className
    ),
    '',
    (v) => (c = v)
  );

  $: classes = cls(
    // base
    c.base,

    // strong
    strong && c.strong,

    // inset
    inset && c.inset,

    className
  );
</script>

<div class={classes} {...$$restProps}>
  <slot />
</div>
