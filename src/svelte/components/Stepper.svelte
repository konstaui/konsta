<script>
  import { cls } from '../../shared/cls.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import { StepperClasses } from '../../shared/classes/StepperClasses.js';
  import { StepperColors } from '../../shared/colors/StepperColors.js';

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

  export let rounded = undefined;
  export let roundedIos = undefined;
  export let roundedMaterial = undefined;
  export let small = undefined;
  export let smallIos = undefined;
  export let smallMaterial = undefined;
  export let large = undefined;
  export let largeIos = undefined;
  export let largeMaterial = undefined;
  export let raised = undefined;
  export let raisedIos = undefined;
  export let raisedMaterial = undefined;
  export let outline = undefined;
  export let outlineIos = undefined;
  export let outlineMaterial = undefined;

  export let onInput = undefined;
  export let onChange = undefined;
  export let onFocus = undefined;
  export let onBlur = undefined;
  export let onMinus = undefined;
  export let onPlus = undefined;

  export let touchRipple = true;

  let theme;
  theme = useTheme({}, (v) => (theme = v));

  $: isRounded =
    typeof rounded === 'undefined'
      ? theme === 'ios'
        ? roundedIos
        : roundedMaterial
      : rounded;
  $: isSmall =
    typeof small === 'undefined'
      ? theme === 'ios'
        ? smallIos
        : smallMaterial
      : small;
  $: isLarge =
    typeof large === 'undefined'
      ? theme === 'ios'
        ? largeIos
        : largeMaterial
      : large;
  $: isRaised =
    typeof raised === 'undefined'
      ? theme === 'ios'
        ? raisedIos
        : raisedMaterial
      : raised;
  $: isOutline =
    typeof outline === 'undefined'
      ? theme === 'ios'
        ? outlineIos
        : outlineMaterial
      : outline;

  const buttonLeftEl = { current: null };
  const buttonRightEl = { current: null };

  useTouchRipple(buttonLeftEl, touchRipple);
  useTouchRipple(buttonRightEl, touchRipple);

  const dark = useDarkClasses();

  $: colors = StepperColors(colorsProp, dark);

  $: size = isLarge ? 'large' : isSmall ? 'small' : 'medium';
  $: style = isOutline && isRaised ? 'clear' : isOutline ? 'outline' : 'fill';
  $: shape = isRounded ? 'rounded' : 'square';

  $: c = useThemeClasses(
    { ios, material },
    StepperClasses({ buttonsOnly }, colors),
    '',
    (v) => (c = v)
  );

  $: classes = cls(
    c.base,
    isRaised && c.raised,
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

<svelte:element this={component} class={classes} {...$$restProps}>
  <span
    bind:this={buttonLeftEl.current}
    class={buttonLeftClasses}
    on:click={onMinus}
  >
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
    bind:this={buttonRightEl.current}
    class={buttonRightClasses}
    on:click={onPlus}
  >
    <span class={c.hBar} />
    <span class={c.vBar} />
  </span>
</svelte:element>
