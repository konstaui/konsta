<script>
  import { createEventDispatcher } from 'svelte';
  import { ListInputClasses } from '../../shared/classes/ListInputClasses.js';
  import { cls } from '../../shared/cls.js';
  import { ListInputColors } from '../../shared/colors/ListInputColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';
  import DeleteIcon from './icons/DeleteIcon.svelte';
  import DropdownIcon from './icons/DropdownIcon.svelte';
  import ListItem from './ListItem.svelte';

  const dispatch = createEventDispatcher();

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let component = 'li';

  export let label = '';
  export let outline = undefined;
  export let outlineIos = undefined;
  export let outlineMaterial = undefined;
  export let floatingLabel = false;
  export let info = undefined; // string
  export let error = undefined; // string or bool
  export let clearButton = false;
  export let dropdown = false;

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

  let theme;
  theme = useTheme({ ios, material }, (v) => (theme = v));

  $: isOutline =
    typeof outline === 'undefined'
      ? theme === 'ios'
        ? outlineIos
        : outlineMaterial
      : outline;

  let inputEl = null;

  let isFocused = false;

  const dark = useDarkClasses();

  $: colors = ListInputColors(colorsProp, dark);

  $: labelStyle = label && floatingLabel ? 'floating' : 'stacked';
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

  const getLabelColor = () => {
    if (error || $$slots.error) return colors.errorText;
    if (theme === 'material') {
      return isFocused
        ? colors.labelTextFocusMaterial
        : colors.labelTextMaterial;
    }
    if (theme === 'ios') {
      return isFocused ? colors.labelTextFocusIos : colors.labelTextIos;
    }

    return '';
  };

  $: c = useThemeClasses(
    { ios, material },
    ListInputClasses(
      {
        error,
        type,
        inputClass,
        outline: isOutline,
      },
      colors,
      {
        isFloatingTransformed,
        isFocused,
        darkClasses: dark,
        getLabelColor,
        inputClass,
        hasLabel: !!label || $$slots.label,
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
  title={undefined}
  mediaClass={c.media}
  innerClass={c.inner[labelStyle]}
  contentClass={c.itemContent}
  titleWrapClass={c.titleWrap}
  withMedia={!!$$slots.media}
  withTitle={!!$$slots.label || !!label}
  dividers={theme === 'material' || isOutline ? false : undefined}
  {...$$restProps}
>
  <svelte:fragment slot="content">
    {#if isOutline || theme === 'material'}
      <span class={c.border} />
    {/if}
  </svelte:fragment>
  <svelte:fragment slot="media">
    {#if $$slots.media}
      <slot name="media" />
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="inner">
    {#if label || $$slots.label}
      <div class={c.label[labelStyle]}>
        <div class={c.labelText}>
          {label}
          <slot name="label" />
        </div>
      </div>
    {/if}
    <div class={c.inputWrap[labelStyle]}>
      {#if $$slots.input}
        <slot name="input" />
      {:else}
        <!-- svelte-ignore a11y-autofocus -->
        {#if type === 'select'}
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
            on:input
            on:change
            on:focus
            on:blur
          >
            <slot />
          </svelte:element>
        {:else}
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
            on:input
            on:change
            on:focus
            on:blur
          />
        {/if}
      {/if}

      {#if clearButton}
        <DeleteIcon
          {theme}
          on:click={() => dispatch('clear')}
          class={c.clearButton}
        />
      {/if}
      {#if dropdown}
        <DropdownIcon class={c.dropdown} />
      {/if}
    </div>
    <!-- error info content -->
    {#if (error && error !== true) || $$slots.error}
      <div class={cls(c.errorInfo, c.error)}>
        {#if error !== true}{error}{/if}
        <slot name="error" />
      </div>
    {/if}
    {#if (info || $$slots.info) && !error}
      <div class={cls(c.errorInfo, c.info)}>
        {info}
        <slot name="info" />
      </div>
    {/if}
    <!-- error info end -->
  </svelte:fragment>

  {#if type !== 'select'}
    <slot />
  {/if}
</ListItem>
