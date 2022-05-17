<script>
  import { cls } from '../../shared/cls.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { ButtonClasses } from '../../shared/classes/ButtonClasses.js';

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
  export let outline = false;
  export let clear = false;
  export let rounded = false;
  export let small = false;
  export let large = false;
  export let raised = false;
  export let inline = false;

  // Segmented
  export let segmented = false;
  export let segmentedStrong = false;
  export let segmentedActive = false;

  export let touchRipple = true;

  export let onClick = undefined;

  const rippleEl = { current: null };

  $: attrs = {
    href,
    ...$$restProps,
  };

  const dark = useDarkClasses();

  $: useTouchRipple(rippleEl, touchRipple);

  $: size = large ? 'large' : small ? 'small' : 'medium';

  const getStyle = (
    outline,
    clear,
    segmented,
    segmentedActive,
    segmentedStrong
  ) => {
    let s = outline
      ? 'outline'
      : clear || (segmented && !segmentedActive)
      ? 'clear'
      : 'fill';
    if (segmentedStrong) s = 'segmentedStrong';
    if (segmentedStrong && segmentedActive) s = 'segmentedStrongActive';
    return s;
  };

  $: style = getStyle(
    outline,
    clear,
    segmented,
    segmentedActive,
    segmentedStrong
  );

  $: colors = {
    text: 'text-primary',
    border: 'border-primary',
    bg: 'bg-primary',
    activeBg: 'active:bg-primary',
    activeBgDark: 'active:bg-primary-dark',
    touchRipple: 'touch-ripple-primary',
    disabledText: cls(
      'text-black text-opacity-30',
      dark('dark:text-white dark:text-opacity-30')
    ),
    disabledBg: cls(
      'bg-black bg-opacity-10',
      dark('dark:bg-white dark:bg-opacity-10')
    ),
    disabledBorder: cls(
      'border-black border-opacity-10',
      dark('dark:border-white dark:border-opacity-10')
    ),
    ...colorsProp,
  };

  $: c = useThemeClasses(
    { ios, material },
    ButtonClasses(
      { inline, segmented, segmentedStrong, disabled },
      colors,
      className,
      dark
    ),
    '',
    (v) => (c = v)
  );

  $: classes = cls(
    c.base[rounded ? 'rounded' : 'square'],

    // style
    c.style[style],

    // size
    c.size[size],

    raised && c.raised,

    className
  );
</script>

{#if typeof component === 'string'}
  <svelte:element
    this={component}
    bind:this={rippleEl.current}
    class={classes}
    {disabled}
    {...attrs}
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
