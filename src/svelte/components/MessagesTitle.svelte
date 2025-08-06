<script>
  import { MessagesTitleClasses } from '../../shared/classes/MessagesTitleClasses.js';
  import { MessagesTitleColors } from '../../shared/colors/MessagesTitleColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    component = 'div',
    id = undefined,
    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const dark = useDarkClasses();

  const colors = $derived(MessagesTitleColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      MessagesTitleClasses({}, colors, className),
      ''
    )
  );
</script>

<svelte:element
  this={component}
  {id}
  bind:this={el}
  class={c.base}
  {...restProps}
>
  {@render children?.()}
</svelte:element>
