<script>
  import { ActionsButtonClasses } from '../../shared/classes/ActionsButtonClasses.js';
  import { ActionsButtonColors } from '../../shared/colors/ActionsButtonColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let component = 'button';
  export let href = undefined;

  export let bold = false;
  export let fontSizeIos = 'text-xl';
  export let fontSizeMaterial = 'text-base';
  export let touchRipple = true;
  export let hairlines = true;

  export let onClick = undefined;

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

  $: c = useThemeClasses(
    { ios, material },
    ActionsButtonClasses(
      { bold, fontSizeIos, fontSizeMaterial, hairlines },
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
  on:click={onClick}
  {...attrs}
>
  <slot />
</svelte:element>
