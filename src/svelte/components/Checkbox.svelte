<script>
  import { CheckboxClasses } from '../../shared/classes/CheckboxClasses.js';
  import { CheckboxColors } from '../../shared/colors/CheckboxColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  import CheckboxIcon from './icons/CheckboxIcon.svelte';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let component = 'label';
  export let checked = false;
  export let indeterminate = false;
  export let name = undefined;
  export let value = undefined;
  export let disabled = false;
  export let readonly = false;
  export let onChange = undefined;

  let inputEl;

  const dark = useDarkClasses();

  $: colors = CheckboxColors(colorsProp, dark);

  $: state = checked || indeterminate ? 'checked' : 'notChecked';

  $: c = useThemeClasses(
    { ios, material },
    CheckboxClasses({}, colors, className, dark),
    className,
    (v) => (c = v)
  );

  function watchIndeterminate(indeterminatePassed) {
    if (inputEl) {
      inputEl.indeterminate = !!indeterminate;
    }
  }

  $: watchIndeterminate(indeterminate);
</script>

<svelte:element this={component} class={c.base} {...$$restProps}>
  <input
    bind:this={inputEl}
    type="checkbox"
    {name}
    {value}
    {disabled}
    {readonly}
    {checked}
    on:change={onChange}
    class={c.input}
  />
  <i class={c.iconWrap[state]}>
    {#if indeterminate}
      <span class={c.indeterminateIcon} />
    {:else}
      <CheckboxIcon {ios} {material} class={c.icon[state]} />
    {/if}
  </i>
  <slot />
</svelte:element>
