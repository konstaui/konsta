<script>
  import { cls } from '../../shared/cls.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.svelte.js';
  import { StepperClasses } from '../../shared/classes/StepperClasses.js';
  import { StepperColors } from '../../shared/colors/StepperColors.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,

    component = 'span',

    value = 0,
    input = false,
    inputType = 'text',
    inputPlaceholder = undefined,
    inputDisabled = false,
    inputReadonly = false,

    buttonsOnly = false,

    rounded = undefined,
    roundedIos = undefined,
    roundedMaterial = undefined,
    small = undefined,
    smallIos = undefined,
    smallMaterial = undefined,
    large = undefined,
    largeIos = undefined,
    largeMaterial = undefined,
    raised = undefined,
    raisedIos = undefined,
    raisedMaterial = undefined,
    outline = undefined,
    outlineIos = undefined,
    outlineMaterial = undefined,

    onInput = undefined,
    onChange = undefined,
    onFocus = undefined,
    onBlur = undefined,

    oninput = undefined,
    onchange = undefined,
    onfocus = undefined,
    onblur = undefined,

    onMinus = undefined,
    onPlus = undefined,
    onminus = undefined,
    onplus = undefined,

    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  let theme = $state(useTheme({ ios, material }));

  const isRounded = $derived(
    typeof rounded === 'undefined'
      ? theme === 'ios'
        ? roundedIos
        : roundedMaterial
      : rounded
  );
  const isSmall = $derived(
    typeof small === 'undefined'
      ? theme === 'ios'
        ? smallIos
        : smallMaterial
      : small
  );
  const isLarge = $derived(
    typeof large === 'undefined'
      ? theme === 'ios'
        ? largeIos
        : largeMaterial
      : large
  );
  const isRaised = $derived(
    typeof raised === 'undefined'
      ? theme === 'ios'
        ? raisedIos
        : raisedMaterial
      : raised
  );
  const isOutline = $derived(
    typeof outline === 'undefined'
      ? theme === 'ios'
        ? outlineIos
        : outlineMaterial
      : outline
  );

  let buttonLeftEl = $state(null);
  let buttonRightEl = $state(null);

  useTouchRipple(
    () => buttonLeftEl,
    () => true
  );
  useTouchRipple(
    () => buttonRightEl,
    () => true
  );

  const dark = useDarkClasses();

  const colors = $derived(StepperColors(colorsProp, dark));

  const size = $derived(isLarge ? 'large' : isSmall ? 'small' : 'medium');
  const style = $derived(
    isOutline && isRaised ? 'clear' : isOutline ? 'outline' : 'fill'
  );
  const shape = $derived(isRounded ? 'rounded' : 'square');

  const c = $derived(
    useThemeClasses(
      { ios, material },
      StepperClasses({ buttonsOnly }, colors),
      '',
      className
    )
  );

  const classes = $derived(
    cls(c.base, isRaised && c.raised, c.size[size], c.shape[shape], className)
  );
  const buttonLeftClasses = $derived(
    cls(c.button, c.buttonStyle[style], c.buttonLeftShape[shape])
  );
  const buttonRightClasses = $derived(
    cls(c.button, c.buttonStyle[style], c.buttonRightShape[shape])
  );

  const valueClasses = $derived(cls(input && c.input, c.value[style]));
</script>

<svelte:element this={component} bind:this={el} class={classes} {...restProps}>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <span
    bind:this={buttonLeftEl}
    class={buttonLeftClasses}
    role="button"
    tabindex="0"
    onclick={onMinus || onminus}
  >
    <span class={c.hBar}></span>
  </span>
  {#if input && !buttonsOnly}
    <input
      class={valueClasses}
      placeholder={inputPlaceholder}
      type={inputType}
      {value}
      disabled={inputDisabled}
      readonly={inputReadonly}
      oninput={onInput || oninput}
      onchange={onChange || onchange}
      onfocus={onFocus || onfocus}
      onblur={onBlur || onblur}
    />
  {/if}
  {#if !input && !buttonsOnly}
    <span class={valueClasses}>{value}</span>
  {/if}

  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <span
    bind:this={buttonRightEl}
    class={buttonRightClasses}
    role="button"
    tabindex="0"
    onclick={onPlus || onplus}
  >
    <span class={c.hBar}></span>
    <span class={c.vBar}></span>
  </span>
</svelte:element>
