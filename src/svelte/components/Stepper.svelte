<script>
  import { cls } from '../../shared/cls.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import { StepperClasses } from '../../shared/classes/StepperClasses.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let component = 'span';

  export let value = 0;
  export let input = false;
  export let inputType = 'text';
  export let inputPlaceholder = undefined;
  export let inputDisabled = false;
  export let inputReadonly = false;

  export let buttonsOnly = false;

  export let rounded = false;
  export let small = false;
  export let large = false;
  export let raised = false;
  export let outline = false;

  export let onInput = undefined;
  export let onChange = undefined;
  export let onFocus = undefined;
  export let onBlur = undefined;
  export let onMinus = undefined;
  export let onPlus = undefined;

  export let touchRipple = true;

  const buttonLeftEl = { current: null };
  const buttonRightEl = { current: null };

  useTouchRipple(buttonLeftEl, touchRipple);
  useTouchRipple(buttonRightEl, touchRipple);

  $: colors = {
    text: 'text-primary',
    border: 'border-primary',
    bg: 'bg-primary',
    activeBg: 'active:bg-primary',
    activeBgDark: 'active:bg-primary-dark',
    touchRipple: 'touch-ripple-primary',
    ...colorsProp,
  };

  $: size = large ? 'large' : small ? 'small' : 'medium';
  $: style = outline && raised ? 'clear' : outline ? 'outline' : 'fill';
  $: shape = rounded ? 'rounded' : 'square';

  $: c = useThemeClasses(
    { ios, material },
    StepperClasses({ buttonsOnly }, colors),
    '',
    (v) => (c = v)
  );

  $: classes = cls(
    c.base,
    raised && c.raised,
    c.size[size],
    c.shape[shape],
    className
  );
  $: buttonLeftClasses = cls(
    c.button,
    c.buttonStyle[style],
    c.buttonLeftShape[shape]
  );
  $: buttonRightClasses = cls(
    c.button,
    c.buttonStyle[style],
    c.buttonRightShape[shape]
  );

  $: valueClasses = cls(input && c.input, c.value[style]);
</script>

<svelte:component this={component} class={classes} {...$$restProps}>
  <span ref={buttonLeftEl.current} class={buttonLeftClasses} on:click={onMinus}>
    <span class={c.hBar} />
  </span>
  {#if input && !buttonsOnly}
    <input
      class={valueClasses}
      placeholder={inputPlaceholder}
      type={inputType}
      {value}
      disabled={inputDisabled}
      readonly={inputReadonly}
      on:input={onInput}
      on:change={onChange}
      on:focus={onFocus}
      on:blur={onBlur}
    />
  {/if}
  {#if !input && !buttonsOnly}
    <span class={valueClasses}>{value}</span>
  {/if}

  <span
    ref={buttonRightEl.current}
    class={buttonRightClasses}
    on:click={onPlus}
  >
    <span class={c.hBar} />
    <span class={c.vBar} />
  </span>
</svelte:component>
