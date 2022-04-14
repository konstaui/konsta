<script>
  import { cls } from '../../shared/cls.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { ToolbarClasses } from '../../shared/classes/ToolbarClasses.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let translucent = true;

  export let bgClass = '';
  export let innerClass = '';

  export let hairlines = true;

  export let tabbar = false;
  export let tabbarLabels = false;

  export let top = false;

  const dark = useDarkClasses();

  $: colors = {
    bgIos: cls('bg-bars-ios-light', dark('dark:bg-bars-ios-dark')),
    bgMaterial: cls(
      'bg-bars-material-light',
      dark('dark:bg-bars-material-dark')
    ),
    ...colorsProp,
  };

  $: c = useThemeClasses(
    { ios, material },
    ToolbarClasses(
      { hairlines, translucent, bgClass, innerClass, tabbar, top },
      colors,
      className
    ),
    className,
    (v) => (c = v)
  );
</script>

<div class={c.base} {...$$restProps}>
  <div class={c.bg} />
  <div class={c.inner[tabbar && tabbarLabels ? 'tabbarLabels' : 'toolbar']}>
    <slot />
  </div>
</div>
