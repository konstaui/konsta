<script>
  import { BreadcrumbsCollapsedClasses } from '../../shared/esm/classes/BreadcrumbsCollapsedClasses.js';
  import { cls } from '../../shared/esm/cls.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  export let ios = undefined;
  export let material = undefined;

  let colorsProp = undefined;
  export { colorsProp as colors };

  export let onClick = undefined;

  const dark = useDarkClasses();

  $: colors = {
    bg: cls('bg-black bg-opacity-15', dark('dark:bg-white dark:bg-opacity-15')),
    dotBg: cls('bg-black', dark('dark:bg-white')),
    ...colorsProp,
  };

  $: c = useThemeClasses(
    { ios, material },
    BreadcrumbsCollapsedClasses({}, colors),
    className,
    (v) => (c = v)
  );
</script>

<div class={c.base} {...$$restProps} on:click={onClick}>
  <span class={c.dot} />
  <span class={c.dot} />
  <span class={c.dot} />
  <slot />
</div>
