<script>
  import { ToggleClasses } from '../../shared/classes/ToggleClasses.js';
  import { ToggleColors } from '../../shared/colors/ToggleColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.svelte.js';

  let {
    component = 'label',
    class: className = undefined,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    checked = false,
    name = undefined,
    value = undefined,
    disabled = false,
    readonly = false,
    onChange = undefined,
    onchange = undefined,
    touchRipple = true,

    children,
    ...restProps
  } = $props();

  let elRef = $state(null);
  let rippleTargetElRef = $state(null);

  const dark = useDarkClasses();

  useTouchRipple(
    () => rippleTargetElRef,
    () => touchRipple,
    () => elRef
  );

  const colors = $derived(ToggleColors(colorsProp, dark));

  const state = $derived(checked ? 'checked' : 'notChecked');

  const c = $derived(
    useThemeClasses(
      { ios, material },
      ToggleClasses({}, colors, dark, className)
    )
  );
</script>

<svelte:element
  this={component}
  bind:this={elRef}
  class={c.base[state]}
  {...restProps}
>
  <input
    type="checkbox"
    {name}
    {value}
    {disabled}
    {readonly}
    {checked}
    onchange={onChange || onchange}
    class={c.input}
  />
  <span bind:this={rippleTargetElRef} class={c.thumbWrap[state]}>
    <span class={c.thumb[state]}></span>
  </span>
  {@render children?.()}
</svelte:element>
