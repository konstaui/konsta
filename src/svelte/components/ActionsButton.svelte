<script>
  import { ActionsButtonClasses } from '../../shared/classes/ActionsButtonClasses.js';
  import { ActionsButtonColors } from '../../shared/colors/ActionsButtonColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let component = 'button';
  export let href = undefined;

  export let bold = undefined;
  export let boldIos = false;
  export let boldMaterial = false;
  export let fontSizeIos = 'text-xl';
  export let fontSizeMaterial = 'text-base';
  export let touchRipple = true;
  export let dividers = true;

  const rippleEl = { current: null };

  const dark = useDarkClasses();

  $: useTouchRipple(rippleEl, touchRipple);

  $: attrs = {
    href,
    ...$$restProps,
  };

  let Component = component;
  if (typeof component === 'undefined' && (href || href === '')) {
    Component = 'a';
  } else if (typeof component === 'undefined') {
    Component = 'button';
  }

  $: colors = ActionsButtonColors(colorsProp, dark);

  let theme;
  theme = useTheme({}, (v) => (theme = v));

  $: isDividers = typeof dividers === 'undefined' ? theme === 'ios' : dividers;

  $: isBold =
    typeof bold === 'undefined'
      ? theme === 'ios'
        ? boldIos
        : boldMaterial
      : bold;

  $: c = useThemeClasses(
    { ios, material },
    ActionsButtonClasses(
      { bold: isBold, fontSizeIos, fontSizeMaterial, dividers: isDividers },
      colors,
      dark
    ),
    className,
    (v) => (c = v)
  );
</script>

<svelte:element
  this={Component}
  bind:this={rippleEl.current}
  class={c.base}
  on:click
  {...attrs}
>
  <slot />
</svelte:element>
