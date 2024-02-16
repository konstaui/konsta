<script>
  import { BreadcrumbsItemClasses } from '../../shared/classes/BreadcrumbsItemClasses.js';
  import { BreadcrumbsItemColors } from '../../shared/colors/BreadcrumbsItemColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  export let ios = undefined;
  export let material = undefined;

  let colorsProp = undefined;
  export { colorsProp as colors };

  export let onClick = undefined;

  export let active = false;

  const dark = useDarkClasses();

  $: colors = BreadcrumbsItemColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    BreadcrumbsItemClasses({ active }, colors),
    className,
    (v) => (c = v)
  );
</script>

<div
  class={c.base}
  {...$$restProps}
  role="menuitem"
  tabindex="0"
  on:click={onClick}
>
  <slot />
</div>
