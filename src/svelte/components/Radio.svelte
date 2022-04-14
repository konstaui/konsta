<script>
  import { cls } from '../../shared/cls.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import CheckboxIcon from './icons/CheckboxIcon.svelte';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { RadioClasses } from '../../shared/classes/RadioClasses.js';

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

  let theme;
  theme = useTheme({ ios, material }, (v) => (theme = v));

  const dark = useDarkClasses();

  $: colors = {
    borderIos: cls(
      'border-black border-opacity-30',
      dark('dark:border-white dark:border-opacity-30')
    ),
    borderMaterial: cls(
      'border-black border-opacity-40',
      dark('dark:border-white dark:border-opacity-40')
    ),
    bgChecked: 'bg-primary',
    borderChecked: 'border-primary',
    ...colorsProp,
  };

  $: state = checked ? 'checked' : 'notChecked';

  $: c = useThemeClasses(
    { ios, material },
    RadioClasses({}, colors, className),
    className,
    (v) => (c = v)
  );
</script>

<label class={c.base} {...$$restProps}>
  <input
    type="radio"
    {name}
    {value}
    {disabled}
    {readonly}
    {checked}
    on:change={onChange}
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
</label>
