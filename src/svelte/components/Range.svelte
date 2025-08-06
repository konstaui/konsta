<script>
  import { onDestroy, onMount } from 'svelte';
  import { cls } from '../../shared/cls.js';
  import { RangeClasses } from '../../shared/classes/RangeClasses.js';
  import { RangeColors } from '../../shared/colors/RangeColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,

    inputId = undefined,
    name = undefined,
    value = $bindable(undefined),
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

  let el = $state(null);
  export { el };

  let thumbWrapEl = $state(null);
  let trackBgEl = $state(null);
  let thumbOffset = $state(0);
  let thumbPercentOffset = $state(0);

  const valueWidth = $derived((((value || 0) - min) / (max - min)) * 100);

  const dark = useDarkClasses();

  const colors = $derived(RangeColors(colorsProp, dark));
  const theme = $derived(useTheme({ ios, material }));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      RangeClasses({}, colors, dark),
      className
    )
  );

  const calcThumbOffset = () => {
    if (!thumbWrapEl) return;
    const thumbWidth = thumbWrapEl.offsetWidth;
    const trackWidth = trackBgEl.offsetWidth;
    thumbPercentOffset = thumbWidth / trackWidth;
  };
  const updateThumbOffset = () => {
    const percent = (value - min) / (max - min);
    thumbOffset = percent * (1 - thumbPercentOffset);
  };
  const onResize = () => {
    calcThumbOffset();
    updateThumbOffset();
  };

  onMount(() => {
    window.addEventListener('resize', onResize);
    calcThumbOffset();
    updateThumbOffset();
  });
  onDestroy(() => {
    window.removeEventListener('resize', onResize);
  });
  $effect(() => {
    updateThumbOffset();
  });
</script>

<div bind:this={el} class={c.base} {...restProps}>
  <span class={c.trackBg} bind:this={trackBgEl}></span>
  <span
    class={c.trackValue}
    style={`width: ${theme === 'ios' ? `${valueWidth}%` : `calc(${thumbOffset * 100}%)`}`}
  ></span>
  {#if theme === 'material'}
    <span
      class={c.trackEmpty}
      style={`width: calc(${100 - thumbOffset * 100}% - 16px)`}
    ></span>
    <span class={c.stop}></span>
  {/if}
  <input
    class={cls(c.input, c.inputThumb, c.inputTrack)}
    type="range"
    id={inputId}
    {name}
    {min}
    {max}
    {step}
    bind:value
    {readonly}
    {disabled}
    oninput={onInput || oninput}
    onchange={onChange || onchange}
    onfocus={onFocus || onfocus}
    onblur={onBlur || onblur}
  />
  <span
    style={`inset-inline-start: ${thumbOffset * 100}%;`}
    class={c.thumbWrap}
    bind:this={thumbWrapEl}
  >
    {#if theme === 'ios'}<span class={c.thumbShadow}></span>{/if}
    <span class={c.thumb}></span>
  </span>
</div>
