<script>
  import { ToggleClasses } from '../../shared/classes/ToggleClasses.js';
  import { ToggleColors } from '../../shared/colors/ToggleColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

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

  const dark = useDarkClasses();

  $: colors = ToggleColors(colorsProp, dark);

  $: state = checked ? 'checked' : 'notChecked';

  $: c = useThemeClasses(
    { ios, material },
    ToggleClasses({}, colors, className, dark),
    className,
    (v) => (c = v)
  );
</script>

<label class={c.base[state]} {...$$restProps}>
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
  <span class={c.inner[state]} />
  <span class={c.knob[state]} />
  <slot />
</label>
