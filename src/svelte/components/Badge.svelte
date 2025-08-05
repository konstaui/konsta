<script>
  import { BadgeClasses } from '../../shared/classes/BadgeClasses.js';
  import { BadgeColors } from '../../shared/colors/BadgeColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    small = false,
    children,
    ...restProps
  } = $props();

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

<span class={c.base[size]} {...restProps}>
  {@render children?.()}
</span>
