<script>
  import { cls } from '../../shared/esm/cls.js';
  import { RangeClasses } from '../../shared/esm/classes/RangeClasses.js';
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
  export let onInput = undefined;
  export let onChange = undefined;
  export let onFocus = undefined;
  export let onBlur = undefined;

  const dark = useDarkClasses();

  $: colors = {
    valueBg: 'bg-primary',
    thumbBgIos: 'range-thumb:bg-white',
    thumbBgMaterial: 'range-thumb:bg-primary',
    ...colorsProp,
  };

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
    on:input={onInput}
    on:change={onChange}
    on:focus={onFocus}
    on:blur={onBlur}
  />
</div>
