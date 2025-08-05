<script>
  import { BreadcrumbsClasses } from '../../shared/classes/BreadcrumbsClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let {
    class: className,
    ios = undefined,
    material = undefined,
    fontSizeIos = 'text-[17px]',
    fontSizeMaterial = 'text-[14px]',
    children,
    ...restProps
  } = $props();

  const c = $derived(
    useThemeClasses(
      { ios, material },
      BreadcrumbsClasses({ fontSizeIos, fontSizeMaterial }),
      className
    )
  );
</script>

<div class={c.base} {...restProps}>
  {@render children?.()}
</div>
