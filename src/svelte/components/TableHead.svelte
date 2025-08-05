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

  const c = $derived(
    useThemeClasses({ ios, material }, TableHeadClasses({}), className)
  );
</script>

<thead class={c.base} {...restProps}>
  {@render children?.()}
</thead>
