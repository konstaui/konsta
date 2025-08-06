<script>
  import { ActionsLabelClasses } from '../../shared/classes/ActionsLabelClasses.js';
  import { ActionsLabelColors } from '../../shared/colors/ActionsLabelColors.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    fontSizeIos = 'text-sm',
    fontSizeMaterial = 'text-sm',
    dividers = undefined,
    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const dark = useDarkClasses();

  const theme = $derived(useTheme({ ios, material }));

  const colors = $derived(ActionsLabelColors(colorsProp, dark));

  const isDividers = $derived(
    typeof dividers === 'undefined' ? theme === 'ios' : dividers
  );

  const c = $derived(
    useThemeClasses(
      { ios, material },
      ActionsLabelClasses(
        { fontSizeIos, fontSizeMaterial, dividers: isDividers },
        colors,
        dark
      ),
      className
    )
  );
</script>

<div bind:this={el} class={c.base} {...restProps}>
  {@render children?.()}
</div>
