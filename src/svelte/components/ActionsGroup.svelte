<script>
  import { ActionsGroupClasses } from '../../shared/classes/ActionsGroupClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { ActionsGroupColors } from '../../shared/colors/ActionsGroupColors.js';
  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    dividers = true,
    children,
    ...restProps
  } = $props();

  const dark = useDarkClasses();

  const colors = $derived(ActionsGroupColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      ActionsGroupClasses({ dividers }, colors),
      className
    )
  );
</script>

<div class={c.base} {...restProps}>
  {@render children?.()}
</div>
