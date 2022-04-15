<script>
  import { PageClasses } from '../../shared/esm/classes/PageClasses.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };

  export let ios = undefined;
  export let material = undefined;

  export let component = 'div';

  const dark = useDarkClasses();

  $: c = useThemeClasses(
    { ios, material },
    PageClasses({}, className, dark),
    className,
    (v) => (c = v)
  );
</script>

<svelte:element this={component} class={c.base} {...$$restProps}>
  <slot />
</svelte:element>
