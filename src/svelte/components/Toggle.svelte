<script>
  import { ToggleClasses } from '../../shared/classes/ToggleClasses.js';
  import { ToggleColors } from '../../shared/colors/ToggleColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';

  export let component = 'label';
  export let elRef = { current: null };
  export let rippleTargetElRef = { current: null };

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let checked = false;
  export let name = undefined;
  export let value = undefined;
  export let disabled = false;
  export let readonly = false;
  export let onChange = undefined;

  export let touchRipple = true;

  const dark = useDarkClasses();

  useTouchRipple(rippleTargetElRef, touchRipple, elRef);

  $: colors = ToggleColors(colorsProp, dark);

  $: state = checked ? 'checked' : 'notChecked';

  $: c = useThemeClasses(
    { ios, material },
    ToggleClasses({}, colors, dark),
    className,
    (v) => (c = v)
  );
</script>

<svelte:element
  this={component}
  bind:this={elRef.current}
  class={c.base[state]}
  {...$$restProps}
>
  <input
    type="checkbox"
    {name}
    {value}
    {disabled}
    {readonly}
    {checked}
    on:change={onChange}
    class={c.input}
  />
  <span class={c.inner[state]}></span>
  <span bind:this={rippleTargetElRef.current} class={c.thumbWrap[state]}>
    <span class={c.thumb[state]}></span>
  </span>
  <slot />
</svelte:element>
