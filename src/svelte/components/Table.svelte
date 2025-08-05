<script>
  import { TableClasses } from '../../shared/classes/TableClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let {
    class: className,
    ios = undefined,
    material = undefined,

    children,
    ...restProps
  } = $props();

  const rippleEl = { current: null };

  const c = $derived(
    useThemeClasses({ ios, material }, TableClasses({}), className)
  );
</script>

<table bind:this={rippleEl.current} class={c.base} {...restProps}>
  {@render children?.()}
</table>
