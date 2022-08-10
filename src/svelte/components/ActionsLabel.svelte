<script>
  import { ActionsLabelClasses } from '../../shared/classes/ActionsLabelClasses.js';
  import { ActionsLabelColors } from '../../shared/colors/ActionsLabelColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

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

  $: colors = ActionsLabelColors(colorsProp, dark);

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
