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
  import Glass from './Glass.svelte';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,

    component = 'div',

    placeholder = 'Search',
    value = $bindable(undefined),
    inputId = undefined,
    inputStyle = undefined,

    disableButton = false,
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

    children,
    ...restProps
  } = $props();

  let theme = $state(useTheme({ ios, material }));
  let disableTimeout = null;

  let el = $state(null);
  export { el };

  let searchEl = $state(null);
  useTouchRipple(
    () => el,
    () => true
  );

  let isEnabled = $state(false);

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
  bind:this={el}
  class={c.base}
  onblurcapture={onGlobalBlur}
  onfocuscapture={onGlobalFocus}
  {...restProps}
>
  <Glass class={c.inner}>
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
      bind:value
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
  </Glass>
  {#if disableButton}
    {#if theme === 'ios'}
      <Glass
        component="button"
        type="button"
        style={`margin-right: ${isEnabled ? 0 : `-${48 + 16}px`}; margin-left: ${isEnabled ? '16px' : 0};`}
        class={c.cancelButton}
        onclick={handleDisableButton}
        onpointerdown={(e) => e.preventDefault()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 56 56"
          fill="currentcolor"
        >
          <path
            d="M 10.0234 43.0234 C 9.2266 43.8203 9.2031 45.1797 10.0234 45.9766 C 10.8438 46.7734 12.1797 46.7734 13.0000 45.9766 L 28.0000 30.9766 L 43.0000 45.9766 C 43.7969 46.7734 45.1563 46.7969 45.9766 45.9766 C 46.7734 45.1562 46.7734 43.8203 45.9766 43.0234 L 30.9531 28.0000 L 45.9766 13.0000 C 46.7734 12.2031 46.7969 10.8437 45.9766 10.0469 C 45.1328 9.2266 43.7969 9.2266 43.0000 10.0469 L 28.0000 25.0469 L 13.0000 10.0469 C 12.1797 9.2266 10.8203 9.2031 10.0234 10.0469 C 9.2266 10.8672 9.2266 12.2031 10.0234 13.0000 L 25.0234 28.0000 Z"
          ></path>
        </svg>
      </Glass>
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
