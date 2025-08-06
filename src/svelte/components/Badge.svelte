<script>
  import { BadgeClasses } from '../../shared/classes/BadgeClasses.js';
  import { BadgeColors } from '../../shared/colors/BadgeColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let {
    component = 'span',
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    small = false,
    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const colors = $derived(BadgeColors(colorsProp));

  const size = $derived(small ? 'sm' : 'md');

  const c = $derived(
    useThemeClasses(
      { ios, material },
      BadgeClasses({ small }, colors),
      className
    )
  );
</script>

<svelte:element
  this={component}
  bind:this={el}
  class={c.base[size]}
  {...restProps}
>
  {@render children?.()}
</svelte:element>
