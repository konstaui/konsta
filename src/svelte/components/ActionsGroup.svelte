<script>
  import { ActionsGroupClasses } from '../../shared/classes/ActionsGroupClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { ActionsGroupColors } from '../../shared/colors/ActionsGroupColors.js';
  import Glass from './Glass.svelte';
  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    dividers = true,
    component = 'div',
    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

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

<Glass bind:this={el} {component} class={c.base} {...restProps}>
  {@render children?.()}
</Glass>
