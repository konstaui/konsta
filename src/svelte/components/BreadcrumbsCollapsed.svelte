<script>
  import { BreadcrumbsCollapsedClasses } from '../../shared/classes/BreadcrumbsCollapsedClasses.js';
  import { BreadcrumbsCollapsedColors } from '../../shared/colors/BreadcrumbsCollapsedColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    children,
    ...restProps
  } = $props();

  const dark = useDarkClasses();

  const colors = $derived(BreadcrumbsCollapsedColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      BreadcrumbsCollapsedClasses({}, colors),
      className
    )
  );
</script>

<div class={c.base} {...restProps} role="button" tabindex="0">
  <span class={c.dot}></span>
  <span class={c.dot}></span>
  <span class={c.dot}></span>
  {@render children?.()}
</div>
