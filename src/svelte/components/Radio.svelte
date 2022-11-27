<script>
  import { RadioClasses } from '../../shared/classes/RadioClasses.js';
  import { RadioColors } from '../../shared/colors/RadioColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import CheckboxIcon from './icons/CheckboxIcon.svelte';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let component = 'label';

  export let checked = false;
  export let name = undefined;
  export let value = undefined;
  export let disabled = false;
  export let readonly = false;
  export let touchRipple = true;

  const rippleEl = { current: null };

  let theme;
  theme = useTheme({ ios, material }, (v) => (theme = v));

  const dark = useDarkClasses();

  $: useTouchRipple(rippleEl, touchRipple);

  $: colors = RadioColors(colorsProp, dark);

  $: state = checked ? 'checked' : 'notChecked';

  $: c = useThemeClasses(
    { ios, material },
    RadioClasses({}, colors, className, dark),
    className,
    (v) => (c = v)
  );
</script>

<svelte:element
  this={component}
  bind:this={rippleEl.current}
  class={c.base}
  {...$$restProps}
>
  <input
    type="radio"
    {name}
    {value}
    {disabled}
    {readonly}
    {checked}
    on:change
    class={c.input}
  />

  <i class={c.iconWrap[state]}>
    {#if theme === 'ios'}
      <CheckboxIcon class={c.icon[state]} />
    {:else}
      <span class={c.icon[state]} />
    {/if}
  </i>
  <slot />
</svelte:element>
