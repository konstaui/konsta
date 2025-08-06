<script>
  import { TableHeadClasses } from '../../shared/classes/TableHeadClasses.js';
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
    useThemeClasses({ ios, material }, TableHeadClasses({}), className)
  );
</script>

<thead bind:this={el} class={c.base} {...restProps}>
  {@render children?.()}
</thead>
