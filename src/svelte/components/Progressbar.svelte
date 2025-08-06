<script>
  import { ProgressbarClasses } from '../../shared/classes/ProgressbarClasses.js';
  import { ProgressbarColors } from '../../shared/colors/ProgressbarColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    progress = 0,

    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const dark = useDarkClasses();

  const colors = $derived(ProgressbarColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses({ ios, material }, ProgressbarClasses(colors), className)
  );
</script>

<span bind:this={el} class={c.base} {...restProps}>
  <span
    class={c.inner}
    style={`transform: translateX(-${100 - (progress / 1) * 100}%)`}
  ></span>
  {@render children?.()}
</span>
