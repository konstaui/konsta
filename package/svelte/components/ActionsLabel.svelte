<script>
  import { ActionsLabelClasses } from '../../shared/esm/classes/ActionsLabelClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { cls } from '../../shared/esm/cls.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let fontSizeIos = 'text-sm';
  export let fontSizeMaterial = 'text-base';
  export let hairlines = true;

  const dark = useDarkClasses();

  $: attrs = {
    ...$$restProps,
  };

  $: colors = {
    bg: cls('bg-white', dark('dark:bg-neutral-800')),
    activeBg: cls('active:bg-neutral-200', dark('dark:active:bg-neutral-700')),
    text: cls(
      'text-black text-opacity-55',
      dark('dark:text-white dark:text-opacity-55')
    ),
    ...colorsProp,
  };

  $: c = useThemeClasses(
    { ios, material },
    ActionsLabelClasses(
      { fontSizeIos, fontSizeMaterial, hairlines },
      colors,
      dark
    ),
    className,
    (v) => (c = v)
  );
</script>

<div class={c.base} {...attrs}>
  <slot />
</div>
