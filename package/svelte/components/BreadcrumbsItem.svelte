<script>
  import { BreadcrumbsItemClasses } from '../../shared/esm/classes/BreadcrumbsItemClasses.js';
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

  export let active = false;

  const dark = useDarkClasses();

  $: colors = {
    text: cls(
      'text-black text-opacity-55',
      dark('dark:text-white dark:text-opacity-55')
    ),
    textActive: cls('text-black', dark('dark:text-white')),
    ...colorsProp,
  };

  $: c = useThemeClasses(
    { ios, material },
    BreadcrumbsItemClasses({ active }, colors),
    className,
    (v) => (c = v)
  );
</script>

<div class={c.base} {...$$restProps} on:click={onClick}>
  <slot />
</div>
