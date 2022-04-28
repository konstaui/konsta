<script>
  import { BreadcrumbsClasses } from '../../shared/esm/classes/BreadcrumbsClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  export let ios = undefined;
  export let material = undefined;

  export let fontSizeIos = 'text-[17px]';
  export let fontSizeMaterial = 'text-[16px]';

  $: c = useThemeClasses(
    { ios, material },
    BreadcrumbsClasses({ fontSizeIos, fontSizeMaterial }),
    className,
    (v) => (c = v)
  );
</script>

<div class={c.base} {...$$restProps}>
  <slot />
</div>
