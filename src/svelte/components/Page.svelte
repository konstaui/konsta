<script>
  import { PageClasses } from '../../shared/classes/PageClasses.js';
  import { PageColors } from '../../shared/colors/PageColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };

  let colorsProp = undefined;
  export { colorsProp as colors };

  export let ios = undefined;
  export let material = undefined;

  export let component = 'div';

  const dark = useDarkClasses();

  $: colors = PageColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    PageClasses({}, colors, className),
    className,
    (v) => (c = v)
  );
</script>

<svelte:element this={component} class={c.base} {...$$restProps}>
  <slot />
</svelte:element>
