<script>
  import { ToggleClasses } from '../../shared/classes/ToggleClasses.js';
  import { ToggleColors } from '../../shared/colors/ToggleColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.svelte.js';
  import { useTheme } from '../shared/use-theme.js';

  let {
    component = 'label',
    class: className = undefined,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    checked = $bindable(false),
    name = undefined,
    value = undefined,
    disabled = false,
    readonly = false,
    onChange = undefined,
    onchange = undefined,

    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  let rippleTargetElRef = $state(null);

  const theme = $derived(useTheme({ ios, material }));
  const dark = useDarkClasses();

  useTouchRipple(
    () => rippleTargetElRef,
    () => true,
    () => el
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
  bind:this={el}
  class={c.base[state]}
  {...restProps}
>
  <input
    type="checkbox"
    {name}
    {value}
    {disabled}
    {readonly}
    bind:checked
    onchange={onChange || onchange}
    class={c.input}
  />
  {#if theme === 'ios'}
    <span class={c.thumbSide[state]}></span>
    <span class={c.thumbBg[state]}></span>
    <span class={c.thumbShadow[state]}></span>
    <span ref={rippleTargetElRef} class={c.thumbWrap[state]}>
      <span class={c.thumb[state]}></span>
    </span>{:else}
    <span bind:this={rippleTargetElRef} class={c.thumbWrap[state]}>
      <span class={c.thumb[state]}></span>
    </span>
  {/if}

  {@render children?.()}
</svelte:element>
