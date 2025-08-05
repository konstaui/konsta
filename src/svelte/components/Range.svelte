<script>
  import { cls } from '../../shared/cls.js';
  import { RangeClasses } from '../../shared/classes/RangeClasses.js';
  import { RangeColors } from '../../shared/colors/RangeColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,

    inputId = undefined,
    name = undefined,
    value = undefined,
    readonly = undefined,
    disabled = undefined,
    step = 1,
    min = 0,
    max = 100,
    onInput = undefined,
    onChange = undefined,
    onFocus = undefined,
    onBlur = undefined,
    oninput = undefined,
    onchange = undefined,
    onfocus = undefined,
    onblur = undefined,

    children,
    ...restProps
  } = $props();

  const dark = useDarkClasses();

  const colors = $derived(RangeColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      RangeClasses({}, colors, dark),
      className
    )
  );

  const valueWidth = $derived((((value || 0) - min) / (max - min)) * 100);
</script>

<div class={c.base} {...restProps}>
  <span class={c.trackBg}></span>
  <span class={c.trackValue} style={`width: ${valueWidth}%`}></span>
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
    oninput={onInput || oninput}
    onchange={onChange || onchange}
    onfocus={onFocus || onfocus}
    onblur={onBlur || onblur}
  />
</div>
