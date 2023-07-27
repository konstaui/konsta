<script>
  import { MessagebarClasses } from '../../shared/classes/MessagebarClasses.js';
  import { MessagebarColors } from '../../shared/colors/MessagebarColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
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

  export let onInput = undefined;
  export let onChange = undefined;
  export let touchRipple = true;

  const rippleEl = { current: null };
  let areaEl = null ;
  $: useTouchRipple(rippleEl, touchRipple);



  const dark = useDarkClasses();

  $: colors = MessagebarColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    MessagebarClasses(
      {
        leftClass,
        rightClass,
      },
      colors,
      className,
      dark,
    ),
    className,
    (v) => (c = v)
  );
</script>

<svelte:element
  this={component}
  id={id}
  style={style}
  bind:this={rippleEl.current}
  class={c.base}
  {...$$restProps}
>
  <Toolbar
    colors={{
      ...colors,
      bgMaterial: 'bg-inherit',
      bgIos: 'inherit dark:bg-ios-dark-surface-3',
    }}
    outline={outline}
  >
    {#if $$slots.left}
      <div class={c.left}><slot name="left"/></div>
    {/if}
    <div class={c.messagebarArea}>
      <textarea
        bind:this={areaEl}
        type="textarea"
        class={c.messagebarInput}
        {placeholder}
        {name}
        {value}
        on:input={onInput}
        on:change={onChange}
      />
    </div>
    {#if $$slots.right}
      <div class={c.right}><slot name="right"/></div>
    {/if}
  </Toolbar>
</svelte:element>
