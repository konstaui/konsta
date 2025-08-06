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

  let el = $state(null);
  export { el };

  const c = $derived(
    useThemeClasses({ ios, material }, TableClasses({}), className)
  );
</script>

<table bind:this={el} class={c.base} {...restProps}>
  {@render children?.()}
</table>
