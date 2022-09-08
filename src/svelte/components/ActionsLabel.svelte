<script>
  import { ActionsLabelClasses } from '../../shared/classes/ActionsLabelClasses.js';
  import { ActionsLabelColors } from '../../shared/colors/ActionsLabelColors.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let fontSizeIos = 'text-sm';
  export let fontSizeMaterial = 'text-sm';
  export let dividers = undefined;

  const dark = useDarkClasses();

  let theme;
  theme = useTheme({}, (v) => (theme = v));

  $: attrs = {
    ...$$restProps,
  };

  $: colors = ActionsLabelColors(colorsProp, dark);

  $: isDividers = typeof dividers === 'undefined' ? theme === 'ios' : dividers;

  $: c = useThemeClasses(
    { ios, material },
    ActionsLabelClasses(
      { fontSizeIos, fontSizeMaterial, dividers: isDividers },
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
