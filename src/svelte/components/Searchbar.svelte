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
  import { useTouchRipple } from '../shared/use-touch-ripple.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let component = 'div';

  export let placeholder = 'Search';
  export let value = undefined;
  export let inputId = undefined;
  export let inputStyle = undefined;

  export let disableButton = false;
  export let disableButtonText = 'Cancel';
  export let clearButton = true;

  export let onInput = undefined;
  export let onChange = undefined;
  export let onFocus = undefined;
  export let onBlur = undefined;
  export let onClear = undefined;
  export let onDisable = undefined;
  export let touchRipple = true;

  let theme;
  theme = useTheme({ ios, material }, (v) => (theme = v));

  let searchEl = null;
  const rippleEl = { current: null };
  $: useTouchRipple(rippleEl, touchRipple);

  let isEnabled = false;
  let disableButtonRef = null;
  let disableButtonWidth = 0;
  let disableTimeout = null;
  let allowTransition = false;

  const dark = useDarkClasses();

  $: colors = SearchbarColors(colorsProp, dark);

  const handleInput = (e) => {
    if (onInput) onInput(e);
  };

  const handleChange = (e) => {
    if (onChange) onChange(e);
  };

  const handleFocus = (e) => {
    isEnabled = true;
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e) => {
    if (onBlur) onBlur(e);
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

  $: c = useThemeClasses(
    { ios, material },
    SearchbarClasses({}, colors, {
      isEnabled,
      darkClasses: dark,
    }),
    className,
    (v) => (c = v)
  );
</script>

<svelte:element
  this={component}
  bind:this={rippleEl.current}
  class={c.base}
  on:blurCapture={onGlobalBlur}
  on:focusCapture={onGlobalFocus}
  {...$$restProps}
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
      on:input={handleInput}
      on:change={handleChange}
      on:focus={handleFocus}
      on:blur={handleBlur}
    />
    {#if value && clearButton}
      <button class={c.clearButton} on:click={onClear} type="button">
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
        on:click={handleDisableButton}
        on:pointerdown|preventDefault
      >
        {disableButtonText}
      </button>
    {:else}
      <button
        type="button"
        on:click={handleDisableButton}
        on:pointerdown|preventDefault
        class={cls(c.cancelButton)}
      >
        <BackIcon {theme} on:click={handleDisableButton} />
      </button>
    {/if}
  {/if}
</svelte:element>
