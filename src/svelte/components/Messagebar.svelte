<script>
  import { MessagebarClasses } from '../../shared/classes/MessagebarClasses.js';
  import { MessagebarColors } from '../../shared/colors/MessagebarColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import Toolbar from './Toolbar.svelte';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let component = 'div';
  export let id = undefined;
  export let name = undefined;
  export let placeholder = 'Message';
  export let value = undefined;
  export let outline = false;
  export let leftClass = '';
  export let rightClass = '';
  export let style = undefined;
  export let textareaId = undefined;
  export let disabled = undefined;
  export let size = undefined;

  export let onInput = undefined;
  export let onChange = undefined;
  export let onFocus = undefined;

  const rippleEl = { current: null };
  let areaEl = null;
  let isFocused = false;

  const dark = useDarkClasses();

  $: colors = MessagebarColors(colorsProp, dark);

  const onFocusInternal = (e) => {
    isFocused = true;
    if (onFocus) onFocus(e);
  };

  $: c = useThemeClasses(
    { ios, material },
    MessagebarClasses(
      {
        leftClass,
        rightClass,
      },
      colors,
      { isFocused }
    ),
    className,
    (v) => (c = v)
  );
</script>

<svelte:element
  this={component}
  {id}
  {style}
  bind:this={rippleEl.current}
  class={c.base}
  {...$$restProps}
>
  <Toolbar {colors} {outline}>
    {#if $$slots.left}
      <div class={c.left}><slot name="left" /></div>
    {/if}
    <div class={c.messagebarArea}>
      <textarea
        id={textareaId}
        bind:this={areaEl}
        type="textarea"
        class={c.messagebarInput}
        {placeholder}
        {name}
        {value}
        {size}
        {disabled}
        on:input={onInput}
        on:change={onChange}
        on:focus={onFocusInternal}
      ></textarea>
    </div>
    {#if $$slots.right}
      <div class={c.right}><slot name="right" /></div>
    {/if}
  </Toolbar>
</svelte:element>
