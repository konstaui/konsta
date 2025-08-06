<script>
  import { cls } from '../../shared/cls.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.svelte.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';

  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { ButtonClasses } from '../../shared/classes/ButtonClasses.js';
  import { ButtonColors } from '../../shared/colors/ButtonColors.js';

  let {
    class: className,
    colors: colorsProp,

    ios = undefined,
    material = undefined,

    component = 'button', // or 'a'

    // Anchor props
    href = undefined,

    disabled = false,

    // Style props
    outline = undefined,
    outlineIos = undefined,
    outlineMaterial = undefined,
    clear = undefined,
    clearIos = undefined,
    clearMaterial = undefined,
    tonal = undefined,
    tonalIos = undefined,
    tonalMaterial = undefined,
    rounded = undefined,
    roundedIos = undefined,
    roundedMaterial = undefined,
    small = undefined,
    smallIos = undefined,
    smallMaterial = undefined,
    large = undefined,
    largeIos = undefined,
    largeMaterial = undefined,
    raised = undefined,
    raisedIos = undefined,
    raisedMaterial = undefined,

    inline = false,

    // Segmented
    segmented = false,
    segmentedStrong = false,
    segmentedActive = false,

    children,

    onClick = undefined,
    onclick = undefined,

    ...restProps
  } = $props();

  const theme = $derived(useTheme({ ios, material }));

  let el = $state(null);

  const attrs = $derived({
    href,
    ...restProps,
  });

  const dark = useDarkClasses();

  useTouchRipple(
    () => el,
    () => true
  );

  const isOutline = $derived(
    typeof outline === 'undefined'
      ? theme === 'ios'
        ? outlineIos
        : outlineMaterial
      : outline
  );
  const isClear = $derived(
    typeof clear === 'undefined'
      ? theme === 'ios'
        ? clearIos
        : clearMaterial
      : clear
  );
  const isTonal = $derived(
    typeof tonal === 'undefined'
      ? theme === 'ios'
        ? tonalIos
        : tonalMaterial
      : tonal
  );
  const isRounded = $derived(
    typeof rounded === 'undefined'
      ? theme === 'ios'
        ? roundedIos
        : roundedMaterial
      : rounded
  );
  const isSmall = $derived(
    typeof small === 'undefined'
      ? theme === 'ios'
        ? smallIos
        : smallMaterial
      : small
  );
  const isLarge = $derived(
    typeof large === 'undefined'
      ? theme === 'ios'
        ? largeIos
        : largeMaterial
      : large
  );
  const isRaised = $derived(
    typeof raised === 'undefined'
      ? theme === 'ios'
        ? raisedIos
        : raisedMaterial
      : raised
  );

  const size = $derived(isLarge ? 'large' : isSmall ? 'small' : 'medium');

  const style = $derived.by(() => {
    let s = isOutline
      ? 'outline'
      : isClear || (segmented && !segmentedActive)
        ? 'clear'
        : isTonal
          ? 'tonal'
          : 'fill';
    if (segmentedStrong) s = 'segmentedStrong';
    if (segmentedStrong && segmentedActive) s = 'segmentedStrongActive';
    return s;
  });

  const colors = $derived(ButtonColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      ButtonClasses(
        {
          inline,
          segmented,
          segmentedStrong,
          segmentedActive,
          disabled,
          outline: isOutline,
          clear: isClear,
          tonal: isTonal,
          rounded: isRounded,
          small: isSmall,
          large: isLarge,
          raised: isRaised,
        },
        colors,
        dark
      ),
      ''
    )
  );

  const classes = $derived(
    cls(
      c.base[isRounded ? 'rounded' : 'square'],

      // style
      c.style[style],

      // size
      c.size[size],

      isRaised && c.raised,

      className
    )
  );

  const Component = component === 'button' && href ? 'a' : component;
</script>

{#if typeof component === 'string'}
  <svelte:element
    this={Component}
    onclick={onClick || onclick}
    bind:this={el}
    class={classes}
    {disabled}
    {...attrs}
    role="button"
    tabindex="0"
  >
    {@render children?.()}
  </svelte:element>
{:else}
  <Component
    bind:this={el}
    class={classes}
    {disabled}
    {...attrs}
    onclick={onClick || onclick}
  >
    {@render children?.()}
  </Component>
{/if}
