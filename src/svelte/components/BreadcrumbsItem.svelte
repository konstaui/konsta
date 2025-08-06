<script>
  import { BreadcrumbsItemClasses } from '../../shared/classes/BreadcrumbsItemClasses.js';
  import { BreadcrumbsItemColors } from '../../shared/colors/BreadcrumbsItemColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    active = false,
    children,
    onClick = undefined,
    onclick = undefined,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const dark = useDarkClasses();

  const colors = $derived(BreadcrumbsItemColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      BreadcrumbsItemClasses({ active }, colors),
      className
    )
  );
</script>

<div
  bind:this={el}
  class={c.base}
  {...restProps}
  role="menuitem"
  tabindex="0"
  onclick={onClick || onclick}
>
  {@render children?.()}
</div>
