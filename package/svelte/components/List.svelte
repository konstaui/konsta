<script>
  import { cls } from '../../shared/esm/cls.js';
  import { ListClasses } from '../../shared/esm/classes/ListClasses.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let margin = 'my-8';
  export let inset = false;
  export let nested = false;
  export let menuList = false;

  export let hairlines = true;

  const dark = useDarkClasses();

  $: colors = {
    bg: cls(`bg-block-strong-light`, dark('dark:bg-block-strong-dark')),
    ...colorsProp,
  };

  $: c = useThemeClasses(
    { ios, material },
    ListClasses({ nested, margin, inset, hairlines }, colors, className),
    '',
    (v) => (c = v)
  );

  $: classes = cls(
    c.base,

    inset && c.inset,

    menuList && c.menuList,

    className
  );
</script>

<div class={classes} {...$$restProps}>
  <ul class={c.ul}>
    <slot />
  </ul>
</div>
