<script>
  import { BreadcrumbsCollapsedClasses } from '../../shared/classes/BreadcrumbsCollapsedClasses.js';
  import { BreadcrumbsCollapsedColors } from '../../shared/colors/BreadcrumbsCollapsedColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  export let ios = undefined;
  export let material = undefined;

  let colorsProp = undefined;
  export { colorsProp as colors };

  const dark = useDarkClasses();

  $: colors = BreadcrumbsCollapsedColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    BreadcrumbsCollapsedClasses({}, colors),
    className,
    (v) => (c = v)
  );
</script>

<div class={c.base} {...$$restProps} on:click>
  <span class={c.dot} />
  <span class={c.dot} />
  <span class={c.dot} />
  <slot />
</div>
