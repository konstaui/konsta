<script>
  import { PageClasses } from '../../shared/classes/PageClasses.js';
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

  $: colors = {
    bgIos: cls('bg-page-ios-light', dark('dark:bg-page-ios-dark')),
    bgMaterial: cls(
      'bg-page-material-light',
      dark('dark:bg-page-material-dark')
    ),
    ...colorsProp,
  };

  $: c = useThemeClasses(
    { ios, material },
    PageClasses({}, className, colors),
    className,
    (v) => (c = v)
  );
</script>

<svelte:element this={component} class={c.base} {...$$restProps}>
  <slot />
</svelte:element>
