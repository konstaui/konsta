<script>
  import { ToastClasses } from '../../shared/classes/ToastClasses.js';
  import { ToastColors } from '../../shared/colors/ToastColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    position = 'left',
    opened = false,
    button = undefined,

    children,
    ...restProps
  } = $props();

  const dark = useDarkClasses();

  const colors = $derived(ToastColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      ToastClasses({ opened }, colors),
      className
    )
  );
</script>

<div class={c.base[position]} {...restProps}>
  <div class={c.content}>
    {@render children?.()}
    {#if button}
      <div class={c.button}>
        {@render button()}
      </div>
    {/if}
  </div>
</div>
