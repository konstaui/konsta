<script>
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.svelte.js';
  import CheckboxIcon from './icons/CheckboxIcon.svelte';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { RadioClasses } from '../../shared/classes/RadioClasses.js';
  import { RadioColors } from '../../shared/colors/RadioColors.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    component = 'label',
    checked = false,
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

  const theme = $derived(useTheme({ ios, material }));

  const dark = useDarkClasses();

  useTouchRipple(
    () => el,
    () => true
  );

  const colors = $derived(RadioColors(colorsProp, dark));

  const state = $derived(checked ? 'checked' : 'notChecked');

  const c = $derived(
    useThemeClasses(
      { ios, material },
      RadioClasses({}, colors, dark),
      className
    )
  );
</script>

<svelte:element this={component} bind:this={el} class={c.base} {...restProps}>
  <input
    type="radio"
    {name}
    {value}
    {disabled}
    {readonly}
    {checked}
    onchange={onChange || onchange}
    class={c.input}
  />

  <i class={c.iconWrap[state]}>
    {#if theme === 'ios'}
      <CheckboxIcon class={c.icon[state]} />
    {:else}
      <span class={c.icon[state]}></span>
    {/if}
  </i>
  {@render children?.()}
</svelte:element>
