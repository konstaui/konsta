<script>
  import { RangeClasses } from '../../shared/classes/RangeClasses.js';
  import { cls } from '../../shared/cls.js';
  import { RangeColors } from '../../shared/colors/RangeColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let inputId = undefined;
  export let name = undefined;
  export let value = undefined;
  export let readonly = undefined;
  export let disabled = undefined;
  export let step = 1;
  export let min = 0;
  export let max = 100;

  const dark = useDarkClasses();

  $: colors = RangeColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    RangeClasses({}, colors, dark),
    className,
    (v) => (c = v)
  );

  $: valueWidth = (((value || 0) - min) / (max - min)) * 100;
</script>

<div class={c.base} {...$$restProps}>
  <span class={c.trackBg} />
  <span class={c.trackValue} style={`width: ${valueWidth}%`} />
  <input
    class={cls(c.input, c.inputThumb, c.inputTrack)}
    type="range"
    id={inputId}
    {name}
    {min}
    {max}
    {step}
    {value}
    {readonly}
    {disabled}
    on:input
    on:change
    on:focus
    on:blur
  />
</div>
