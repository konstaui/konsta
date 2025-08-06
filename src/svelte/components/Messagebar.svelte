<script>
  import { MessagebarClasses } from '../../shared/classes/MessagebarClasses.js';
  import { MessagebarColors } from '../../shared/colors/MessagebarColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import Toolbar from './Toolbar.svelte';
  import Glass from './Glass.svelte';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,

    component = 'div',
    id = undefined,
    name = undefined,

    placeholder = 'Message',
    value = $bindable(undefined),
    outline = false,
    leftClass = '',
    rightClass = '',
    style = undefined,
    textareaId = undefined,
    disabled = undefined,
    size = undefined,

    onInput = undefined,
    oninput = undefined,
    onChange = undefined,
    onchange = undefined,
    onFocus = undefined,
    onfocus = undefined,

    left,
    right,

    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  let areaEl = null;
  let isFocused = false;

  const dark = useDarkClasses();

  const colors = $derived(MessagebarColors(colorsProp, dark));

  const onFocusInternal = (e) => {
    isFocused = true;
    if (onFocus) onFocus(e);
    if (onfocus) onfocus(e);
  };

  const onInputInternal = (e) => {
    if (onInput) onInput(e);
    if (oninput) oninput(e);
  };

  const onChangeInternal = (e) => {
    if (onChange) onChange(e);
    if (onchange) onchange(e);
  };

  const c = $derived(
    useThemeClasses(
      { ios, material },
      MessagebarClasses(
        {
          leftClass,
          rightClass,
        },
        colors,
        { isFocused }
      ),
      className
    )
  );
</script>

<svelte:element
  this={component}
  {id}
  {style}
  bind:this={el}
  class={c.base}
  {...restProps}
>
  <Toolbar {colors} {outline} innerClass={c.toolbarInner}>
    {#if left}
      <div class={c.left}>
        {@render left?.()}
      </div>
    {/if}
    <Glass class={c.messagebarArea}>
      <textarea
        id={textareaId}
        bind:this={areaEl}
        type="textarea"
        class={c.messagebarInput}
        {placeholder}
        {name}
        bind:value
        {size}
        {disabled}
        oninput={onInputInternal}
        onchange={onChangeInternal}
        onfocus={onFocusInternal}
      ></textarea>
    </Glass>
    {#if right}
      <div class={c.right}>
        {@render right?.()}
      </div>
    {/if}
  </Toolbar>
</svelte:element>
