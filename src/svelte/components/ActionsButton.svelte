<script>
  import { ActionsButtonClasses } from '../../shared/classes/ActionsButtonClasses.js';
  import { ActionsButtonColors } from '../../shared/colors/ActionsButtonColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.svelte.js';
  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    component = 'button',
    href = undefined,
    bold = undefined,
    boldIos = false,
    boldMaterial = false,
    fontSizeIos = 'text-xl',
    fontSizeMaterial = 'text-base',
    dividers = undefined,

    onClick = undefined,
    onclick = undefined,

    children,
    ...restProps
  } = $props();

  let rippleEl = $state(null);

  const dark = useDarkClasses();

  useTouchRipple(
    () => rippleEl,
    () => true
  );

  const attrs = $derived({
    href,
    ...restProps,
  });

  let Component = $derived.by(() => {
    if (typeof component === 'undefined' && (href || href === '')) {
      Component = 'a';
    } else if (typeof component === 'undefined') {
      Component = 'button';
    }
    return component;
  });

  const colors = $derived(ActionsButtonColors(colorsProp, dark));

  const theme = $derived(useTheme({ ios, material }));

  const isDividers = $derived(
    typeof dividers === 'undefined' ? theme === 'ios' : dividers
  );

  const isBold = $derived(
    typeof bold === 'undefined'
      ? theme === 'ios'
        ? boldIos
        : boldMaterial
      : bold
  );

  const c = $derived(
    useThemeClasses(
      { ios, material },
      ActionsButtonClasses(
        { bold: isBold, fontSizeIos, fontSizeMaterial, dividers: isDividers },
        colors,
        dark
      ),
      className
    )
  );
</script>

<svelte:element
  this={Component}
  bind:this={rippleEl}
  class={c.base}
  role="button"
  tabindex="0"
  onclick={onClick || onclick}
  {...attrs}
>
  {@render children?.()}
</svelte:element>
