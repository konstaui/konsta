<script>
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import DeleteIcon from './icons/DeleteIcon.svelte';
  import DropdownIcon from './icons/DropdownIcon.svelte';
  import ListItem from './ListItem.svelte';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { ListInputClasses } from '../../shared/esm/classes/ListInputClasses.js';
  import { cls } from '../../shared/esm/cls.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let component = 'li';

  export let label = '';
  export let inlineLabel = false;
  export let floatingLabel = false;
  export let info = undefined; // string
  export let error = undefined; // string or bool
  export let clearButton = false;
  export let dropdown = false;

  export let hairlines = true;

  // input props
  export let inputId = undefined;
  export let inputStyle = undefined;
  export let inputClass = '';

  export let name = undefined;
  export let value = undefined;
  export let type = 'text';
  export let inputmode = undefined;
  export let readonly = undefined;
  export let required = undefined;
  export let disabled = undefined;
  export let placeholder = undefined;
  export let size = undefined;
  export let accept = undefined;
  export let autocomplete = undefined;
  export let autocorrect = undefined;
  export let autocapitalize = undefined;
  export let spellcheck = undefined;
  export let autofocus = undefined;
  export let autosave = undefined;
  export let max = undefined;
  export let min = undefined;
  export let step = undefined;
  export let maxlength = undefined;
  export let minlength = undefined;
  export let multiple = undefined;
  export let pattern = undefined;
  export let tabindex = undefined;

  export let onInput = undefined;
  export let onChange = undefined;
  export let onFocus = undefined;
  export let onBlur = undefined;
  export let onClear = undefined;

  let inputEl = null;

  let isFocused = false;

  let theme;
  theme = useTheme({ ios, material }, (v) => (theme = v));

  const dark = useDarkClasses();

  $: colors = {
    labelFocus: 'text-primary',
    errorText: 'text-red-500',
    hairlineError: 'hairline-red-500',
    hairlineFocus: 'hairline-primary',
    ...colorsProp,
  };

  $: labelStyle =
    !label || inlineLabel
      ? 'inline'
      : label && floatingLabel
      ? 'floating'
      : 'stacked';
  $: labelStyleIsInline = labelStyle === 'inline' ? 'inline' : 'notInline';
  $: labelStyleIsFloating =
    labelStyle === 'floating' ? 'floating' : 'notFloating';

  const getDomValue = () => {
    if (!inputEl) return undefined;
    return inputEl.value;
  };

  const isInputHasValue = () => {
    const domValue = getDomValue();
    return typeof value === 'undefined'
      ? domValue || domValue === 0
      : value || value === 0;
  };
  $: isFloatingTransformed =
    (label || $$slots.label) &&
    floatingLabel &&
    !isInputHasValue() &&
    !isFocused;

  const getLabelColor = (force) => {
    if (labelStyle === 'inline' && !force) return '';
    if (error || $$slots.error) return colors.errorText;
    if (isFocused && theme === 'material') return colors.labelFocus;
    if (labelStyle === 'floating') return 'opacity-50';

    return '';
  };

  const getHairlineColor = () => {
    if (error || $$slots.error) return colors.hairlineError;
    if (isFocused) return colors.hairlineFocus;
    return '';
  };

  const onFocusInternal = (e) => {
    isFocused = true;
    if (onFocus) onFocus(e);
  };
  const onBlurInternal = (e) => {
    isFocused = false;
    if (onBlur) onBlur(e);
  };

  $: c = useThemeClasses(
    { ios, material },
    ListInputClasses(
      {
        hairlines,
        error,
        type,
        inputClass,
      },
      colors,
      {
        isFloatingTransformed,
        isFocused,
        darkClasses: dark,
        getLabelColor,
        getHairlineColor,
        hairlines,
        inputClass,
      }
    ),
    className,
    (v) => (c = v)
  );

  $: InputComponent = type === 'select' || type === 'textarea' ? type : 'input';
  $: needsType = InputComponent === 'input';
</script>

<ListItem
  {component}
  class={c.base}
  title={labelStyle === 'inline' ? label : undefined}
  mediaClass={c.media[labelStyleIsInline]}
  innerClass={c.inner[labelStyle]}
  contentClass={c.itemContent}
  titleWrapClass={c.titleWrap[labelStyleIsInline]}
  withMedia={!!$$slots.media}
  withTitle={!!$$slots.label || !!label}
  {...$$restProps}
>
  <svelte:fragment slot="media">
    {#if $$slots.media}
      <slot name="media" />
    {/if}
  </svelte:fragment>
  <svelte:fragment slot="title">
    {#if labelStyle === 'inline' && $$slots.label}
      <slot name="label" />
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="inner">
    {#if labelStyle !== 'inline' && (label || $$slots.label)}
      <div class={c.label[labelStyle]}>
        {label}
        <slot name="label" />
      </div>
    {/if}
    <div class={c.inputWrap[labelStyle]}>
      {#if $$slots.input}
        <slot name="input" />
      {:else}
        <!-- svelte-ignore a11y-autofocus -->
        <svelte:element
          this={InputComponent}
          id={inputId}
          bind:this={inputEl}
          class={c.input[labelStyleIsFloating]}
          style={inputStyle}
          {name}
          type={needsType ? type : undefined}
          {placeholder}
          {inputmode}
          {size}
          {accept}
          {autocomplete}
          {autocorrect}
          {autocapitalize}
          {spellcheck}
          {autofocus}
          {autosave}
          {disabled}
          {max}
          {maxlength}
          {min}
          {minlength}
          {step}
          {multiple}
          {readonly}
          {required}
          {pattern}
          {tabindex}
          {value}
          on:input={onInput}
          on:change={onChange}
          on:focus={onFocusInternal}
          on:blur={onBlurInternal}
        >
          {#if type === 'select'}
            <slot />
          {/if}
        </svelte:element>
      {/if}

      {#if clearButton}
        <DeleteIcon onClick={onClear} class={c.clearButton} />
      {/if}
      {#if dropdown}
        <DropdownIcon class={c.dropdown} />
      {/if}
      {#if labelStyle === 'inline'}
        <!-- error info content -->
        {#if (error && error !== true) || $$slots.error}
          <div class={cls(c.errorInfo[labelStyleIsInline], c.error)}>
            {#if error !== true}{error}{/if}
            <slot name="error" />
          </div>
        {/if}
        {#if (info || $$slots.info) && !error}
          <div class={cls(c.errorInfo[labelStyleIsInline], c.info)}>
            {info}
            <slot name="info" />
          </div>
        {/if}
        <!-- error info end -->
      {/if}
    </div>
    {#if labelStyle !== 'inline'}
      <!-- error info content -->
      {#if (error && error !== true) || $$slots.error}
        <div class={cls(c.errorInfo[labelStyleIsInline], c.error)}>
          {#if error !== true}{error}{/if}
          <slot name="error" />
        </div>
      {/if}
      {#if (info || $$slots.info) && !error}
        <div class={cls(c.errorInfo[labelStyleIsInline], c.info)}>
          {info}
          <slot name="info" />
        </div>
      {/if}
      <!-- error info end -->
    {/if}
  </svelte:fragment>

  {#if type !== 'select'}
    <slot />
  {/if}
</ListItem>
