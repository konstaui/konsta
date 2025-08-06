<script>
  import { PageClasses } from '../../shared/classes/PageClasses.js';
  import { PageColors } from '../../shared/colors/PageColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    component = 'div',
    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const dark = useDarkClasses();

  const colors = $derived(PageColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses({ ios, material }, PageClasses({}, colors), className)
  );
</script>

<svelte:element this={component} bind:this={el} class={c.base} {...restProps}>
  {@render children?.()}
</svelte:element>
