<script>
  import { cls } from '../../shared/cls.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';

  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { ButtonClasses } from '../../shared/classes/ButtonClasses.js';
  import { ButtonColors } from '../../shared/colors/ButtonColors.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let component = 'button'; // or 'a'

  // Anchor props
  export let href = undefined;

  export let disabled = false;

  // Style props
  export let outline = undefined;
  export let outlineIos = undefined;
  export let outlineMaterial = undefined;
  export let clear = undefined;
  export let clearIos = undefined;
  export let clearMaterial = undefined;
  export let tonal = undefined;
  export let tonalIos = undefined;
  export let tonalMaterial = undefined;
  export let rounded = undefined;
  export let roundedIos = undefined;
  export let roundedMaterial = undefined;
  export let small = undefined;
  export let smallIos = undefined;
  export let smallMaterial = undefined;
  export let large = undefined;
  export let largeIos = undefined;
  export let largeMaterial = undefined;
  export let raised = undefined;
  export let raisedIos = undefined;
  export let raisedMaterial = undefined;

  export let inline = false;

  // Segmented
  export let segmented = false;
  export let segmentedStrong = false;
  export let segmentedActive = false;

  export let touchRipple = true;

  export let onClick = undefined;

  let theme;
  theme = useTheme({}, (v) => (theme = v));

  const rippleEl = { current: null };

  $: attrs = {
    href,
    ...$$restProps,
  };

  const dark = useDarkClasses();

  $: useTouchRipple(rippleEl, touchRipple);

  $: isOutline =
    typeof outline === 'undefined'
      ? theme === 'ios'
        ? outlineIos
        : outlineMaterial
      : outline;
  $: isClear =
    typeof clear === 'undefined'
      ? theme === 'ios'
        ? clearIos
        : clearMaterial
      : clear;
  $: isTonal =
    typeof tonal === 'undefined'
      ? theme === 'ios'
        ? tonalIos
        : tonalMaterial
      : tonal;
  $: isRounded =
    typeof rounded === 'undefined'
      ? theme === 'ios'
        ? roundedIos
        : roundedMaterial
      : rounded;
  $: isSmall =
    typeof small === 'undefined'
      ? theme === 'ios'
        ? smallIos
        : smallMaterial
      : small;
  $: isLarge =
    typeof large === 'undefined'
      ? theme === 'ios'
        ? largeIos
        : largeMaterial
      : large;
  $: isRaised =
    typeof raised === 'undefined'
      ? theme === 'ios'
        ? raisedIos
        : raisedMaterial
      : raised;

  $: size = isLarge ? 'large' : isSmall ? 'small' : 'medium';

  const getStyle = (
    isOutline,
    isClear,
    isTonal,
    segmented,
    segmentedActive,
    segmentedStrong
  ) => {
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
  };

  $: style = getStyle(
    isOutline,
    isClear,
    isTonal,
    segmented,
    segmentedActive,
    segmentedStrong
  );

  $: colors = ButtonColors(colorsProp, dark);

  $: c = useThemeClasses(
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
      className,
      dark
    ),
    '',
    (v) => (c = v)
  );

  $: classes = cls(
    c.base[isRounded ? 'rounded' : 'square'],

    // style
    c.style[style],

    // size
    c.size[size],

    isRaised && c.raised,

    className
  );

  const Component = component === 'button' && href ? 'a' : component;
</script>

{#if typeof component === 'string'}
  <svelte:element
    this={Component}
    bind:this={rippleEl.current}
    class={classes}
    {disabled}
    {...attrs}
    role="button"
    tabindex="0"
    on:click={onClick}
  >
    <slot />
  </svelte:element>
{:else}
  <svelte:component
    this={component}
    bind:this={rippleEl.current}
    class={classes}
    {disabled}
    {...attrs}
    on:click={onClick}
  >
    <slot />
  </svelte:component>
{/if}
