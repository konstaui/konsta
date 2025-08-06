<script>
  import { CheckboxClasses } from '../../shared/classes/CheckboxClasses.js';
  import { CheckboxColors } from '../../shared/colors/CheckboxColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.svelte.js';

  import CheckboxIcon from './icons/CheckboxIcon.svelte';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,

    component = 'label',
    checked = $bindable(false),
    indeterminate = false,
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

  let inputEl = $state(null);

  const dark = useDarkClasses();

  useTouchRipple(
    () => el,
    () => true
  );

  const colors = $derived(CheckboxColors(colorsProp, dark));

  const state = $derived(checked || indeterminate ? 'checked' : 'notChecked');

  const c = $derived(
    useThemeClasses(
      { ios, material },
      CheckboxClasses({}, colors, dark),
      className
    )
  );

  function watchIndeterminate(indeterminatePassed) {
    if (inputEl) {
      inputEl.indeterminate = !!indeterminate;
    }
  }

  $effect(() => watchIndeterminate(indeterminate));
</script>

<svelte:element this={component} bind:this={el} class={c.base} {...restProps}>
  <input
    bind:this={inputEl}
    type="checkbox"
    {name}
    {value}
    {disabled}
    {readonly}
    bind:checked
    onchange={onChange || onchange}
    class={c.input}
  />
  <i class={c.iconWrap[state]}>
    {#if indeterminate}
      <span class={c.indeterminateIcon}></span>
    {:else}
      <CheckboxIcon {ios} {material} class={c.icon[state]} />
    {/if}
  </i>
  {@render children?.()}
</svelte:element>
