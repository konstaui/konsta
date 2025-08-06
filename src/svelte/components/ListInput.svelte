<script>
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import DeleteIcon from './icons/DeleteIcon.svelte';
  import DropdownIcon from './icons/DropdownIcon.svelte';
  import ListItem from './ListItem.svelte';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { ListInputClasses } from '../../shared/classes/ListInputClasses.js';
  import { ListInputColors } from '../../shared/colors/ListInputColors.js';
  import { cls } from '../../shared/cls.js';
  import { printText } from '../shared/print-text.js';
  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,

    component = 'li',

    label = '',
    outline = undefined,
    outlineIos = undefined,
    outlineMaterial = undefined,
    floatingLabel = false,
    info = undefined, // string
    error = undefined, // string or bool
    clearButton = false,
    dropdown = false,

    // input props
    inputId = undefined,
    inputStyle = undefined,
    inputClass = '',

    name = undefined,
    value = $bindable(undefined),
    type = 'text',
    inputmode = undefined,
    readonly = undefined,
    required = undefined,
    disabled = undefined,
    placeholder = undefined,
    size = undefined,
    accept = undefined,
    autocomplete = undefined,
    autocorrect = undefined,
    autocapitalize = undefined,
    spellcheck = undefined,
    autofocus = undefined,
    autosave = undefined,
    max = undefined,
    min = undefined,
    step = undefined,
    maxlength = undefined,
    minlength = undefined,
    multiple = undefined,
    pattern = undefined,
    tabindex = undefined,

    onInput = undefined,
    oninput = undefined,
    onChange = undefined,
    onchange = undefined,
    onFocus = undefined,
    onfocus = undefined,
    onBlur = undefined,
    onblur = undefined,
    onClear = undefined,
    onclear = undefined,

    input,
    media,

    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const theme = $derived(useTheme({ ios, material }));

  const isOutline = $derived(
    typeof outline === 'undefined'
      ? theme === 'ios'
        ? outlineIos
        : outlineMaterial
      : outline
  );

  let inputEl = $state(null);

  let isFocused = $state(false);

  const dark = useDarkClasses();

  const colors = $derived(ListInputColors(colorsProp, dark));

  const labelStyle = $derived(label && floatingLabel ? 'floating' : 'stacked');
  const labelStyleIsFloating = $derived(
    labelStyle === 'floating' ? 'floating' : 'notFloating'
  );

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
  const isFloatingTransformed = $derived(
    label && floatingLabel && !isInputHasValue() && !isFocused
  );

  const getLabelColor = () => {
    if (error) return colors.errorText;
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

  const onInputInternal = (e) => {
    value = e.target.value;
    if (onInput) onInput(e);
    if (oninput) oninput(e);
  };

  const onChangeInternal = (e) => {
    if (onChange) onChange(e);
    if (onchange) onchange(e);
  };

  const onFocusInternal = (e) => {
    isFocused = true;

    if (onFocus) onFocus(e);
    if (onfocus) onfocus(e);
  };
  const onBlurInternal = (e) => {
    isFocused = false;
    if (onBlur) onBlur(e);
    if (onblur) onblur(e);
  };

  const c = $derived(
    useThemeClasses(
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
          hasLabel: !!label,
        }
      ),
      className
    )
  );

  const InputComponent = $derived(
    type === 'select' || type === 'textarea' ? type : 'input'
  );
  const needsType = $derived(InputComponent === 'input');
</script>

<ListItem
  bind:this={el}
  {component}
  class={c.base}
  title={undefined}
  mediaClass={c.media}
  innerClass={c.inner[labelStyle]}
  contentClass={c.itemContent}
  titleWrapClass={c.titleWrap}
  withMedia={!!media}
  withTitle={!!label}
  dividers={theme === 'material' || isOutline ? false : undefined}
  {...restProps}
>
  {#snippet content()}
    {#if isOutline || theme === 'material'}
      <span class={c.border}></span>
    {/if}
  {/snippet}

  {#snippet media()}
    {#if media}
      {@render media()}
    {/if}
  {/snippet}

  {#snippet inner()}
    {#if label}
      <div class={c.label[labelStyle]}>
        <div class={c.labelText}>
          {#if typeof label === 'function'}
            {@render label()}
          {:else}
            {printText(label)}
          {/if}
        </div>
      </div>
    {/if}
    <div class={c.inputWrap[labelStyle]}>
      {#if typeof input === 'function'}
        {@render input()}
      {:else}
        <!-- svelte-ignore a11y_autofocus -->
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
            oninput={onInputInternal}
            onchange={onChangeInternal}
            onfocus={onFocusInternal}
            onblur={onBlurInternal}
          >
            {@render children?.()}
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
            oninput={onInputInternal}
            onchange={onChangeInternal}
            onfocus={onFocusInternal}
            onblur={onBlurInternal}
          />
        {/if}
      {/if}

      {#if clearButton}
        <DeleteIcon {theme} onClick={onClear} class={c.clearButton} />
      {/if}
      {#if dropdown}
        <DropdownIcon class={c.dropdown} />
      {/if}
    </div>
    <!-- error info content -->
    {#if error && error !== true}
      <div class={cls(c.errorInfo, c.error)}>
        {#if typeof error !== 'function'}
          {error}
        {:else}
          {@render error()}
        {/if}
      </div>
    {/if}
    {#if info && !error}
      <div class={cls(c.errorInfo, c.info)}>
        {#if typeof info === 'function'}
          {@render info()}
        {:else}
          {info}
        {/if}
      </div>
    {/if}
    <!-- error info end -->
  {/snippet}

  {#if type !== 'select'}
    {@render children?.()}
  {/if}
</ListItem>
