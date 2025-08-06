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

  let el = $state(null);
  export { el };

  const c = $derived(
    useThemeClasses(
      { ios, material },
      BreadcrumbsClasses({ fontSizeIos, fontSizeMaterial }),
      className
    )
  );
</script>

<div bind:this={el} class={c.base} {...restProps}>
  {@render children?.()}
</div>
