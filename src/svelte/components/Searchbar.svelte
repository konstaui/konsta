<script>
  import { onMount } from 'svelte';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import DeleteIcon from './icons/DeleteIcon.svelte';
  import SearchIcon from './icons/SearchIcon.svelte';
  import BackIcon from './icons/BackIcon.svelte';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { SearchbarClasses } from '../../shared/classes/SearchbarClasses.js';
  import { SearchbarColors } from '../../shared/colors/SearchbarColors.js';
  import { cls } from '../../shared/cls.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.svelte.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,

    component = 'div',

    placeholder = 'Search',
    value = undefined,
    inputId = undefined,
    inputStyle = undefined,

    disableButton = false,
    disableButtonText = 'Cancel',
    clearButton = true,

    onInput = undefined,
    onChange = undefined,
    onFocus = undefined,
    onBlur = undefined,
    onClear = undefined,
    onDisable = undefined,

    oninput = undefined,
    onchange = undefined,
    onfocus = undefined,
    onblur = undefined,
    onclear = undefined,
    ondisable = undefined,

    touchRipple = true,
    children,
    ...restProps
  } = $props();

  let theme = $state(useTheme({ ios, material }));

  let searchEl = $state(null);
  let rippleEl = $state(null);
  useTouchRipple(
    () => rippleEl,
    () => touchRipple
  );

  let isEnabled = $state(false);
  let disableButtonRef = $state(null);
  let disableButtonWidth = $state(0);
  let disableTimeout = $state(null);
  let allowTransition = $state(false);

  const dark = useDarkClasses();

  const colors = $derived(SearchbarColors(colorsProp, dark));

  const handleInput = (e) => {
    if (onInput) onInput(e);
    if (oninput) oninput(e);
  };

  const handleChange = (e) => {
    if (onChange) onChange(e);
    if (onchange) onchange(e);
  };

  const handleFocus = (e) => {
    isEnabled = true;
    if (onFocus) onFocus(e);
    if (onfocus) onfocus(e);
  };

  const handleBlur = (e) => {
    if (onBlur) onBlur(e);
    if (onblur) onblur(e);
  };

  const onGlobalBlur = () => {
    if (!value) {
      disableTimeout = setTimeout(() => {
        isEnabled = false;
      });
    }
  };

  const onGlobalFocus = () => {
    clearTimeout(disableTimeout);
  };

  const handleDisableButton = (e) => {
    e.preventDefault();
    isEnabled = false;
    if (searchEl) {
      searchEl.blur();
    }
    if (onDisable) onDisable();
    if (onClear) onClear();
    if (onclear) onclear();
    if (ondisable) ondisable();
  };

  onMount(() => {
    if (disableButtonRef) {
      disableButtonWidth = disableButtonRef.offsetWidth;
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        allowTransition = true;
      });
    });
  });

  const c = $derived(
    useThemeClasses(
      { ios, material },
      SearchbarClasses({}, colors, {
        isEnabled,
        darkClasses: dark,
      }),
      className
    )
  );
</script>

<svelte:element
  this={component}
  bind:this={rippleEl}
  class={c.base}
  onblurcapture={onGlobalBlur}
  onfocuscapture={onGlobalFocus}
  {...restProps}
>
  <div class={c.inner}>
    <span class={c.searchIconWrap}>
      <SearchIcon {theme} class={c.searchIcon} />
    </span>
    <input
      id={inputId}
      bind:this={searchEl}
      class={cls(c.input)}
      style={inputStyle}
      type="text"
      name="search"
      {placeholder}
      {value}
      oninput={handleInput}
      onchange={handleChange}
      onfocus={handleFocus}
      onblur={handleBlur}
    />
    {#if value && clearButton}
      <button class={c.clearButton} onclick={onClear || onclear} type="button">
        <DeleteIcon {theme} class={c.deleteIcon} />
      </button>
    {/if}
  </div>
  {#if disableButton}
    {#if theme === 'ios'}
      <button
        type="button"
        bind:this={disableButtonRef}
        style="margin-right: {isEnabled
          ? 0
          : `-${disableButtonWidth}px`}; transition-duration: {!allowTransition
          ? '0ms'
          : ''};"
        class={c.cancelButton}
        onclick={handleDisableButton || ondisable}
        onpointerdown={(e) => e.preventDefault()}
      >
        {disableButtonText}
      </button>
    {:else}
      <button
        type="button"
        onclick={handleDisableButton}
        onpointerdown={(e) => e.preventDefault()}
        class={cls(c.cancelButton)}
      >
        <BackIcon {theme} />
      </button>
    {/if}
  {/if}
</svelte:element>
