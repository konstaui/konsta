<script>
  import { TableBodyClasses } from '../../shared/classes/TableBodyClasses.js';
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
    useThemeClasses({ ios, material }, TableBodyClasses({}), className)
  );
</script>

<tbody bind:this={el} class={c.base} {...restProps}>
  {@render children?.()}
</tbody>
