<script>
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { FabClasses } from '../../shared/classes/FabClasses.js';
  import { FabColors } from '../../shared/colors/FabColors.js';
  import { printText } from '../shared/print-text.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let component = 'a'; // or 'button'

  export let href = undefined;
  export let text = undefined;
  export let textPosition = 'after';
  export let touchRipple = true;

  export let onClick = undefined;

  const rippleEl = { current: null };

  const dark = useDarkClasses();

  $: useTouchRipple(rippleEl, touchRipple);

  $: colors = FabColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    FabClasses({}, colors),
    className,
    (v) => (c = v)
  );
</script>

{#if typeof component === 'string'}
  <svelte:element
    this={component}
    class={text ? c.base.withText : c.base.iconOnly}
    {href}
    bind:this={rippleEl.current}
    role="button"
    tabindex="0"
    on:click={onClick}
    {...$$restProps}
  >
    {#if (text || $$slots.text) && textPosition === 'before'}
      <span class={c.text}>{printText(text)}<slot name="text" /></span>
    {/if}
    {#if $$slots.icon}
      <span class={c.icon}><slot name="icon" /></span>
    {/if}
    {#if (text || $$slots.text) && textPosition === 'after'}
      <span class={c.text}>{printText(text)}<slot name="text" /></span>
    {/if}
    <slot />
  </svelte:element>
{:else}
  <svelte:component
    this={component}
    class={text ? c.base.withText : c.base.iconOnly}
    {href}
    bind:this={rippleEl.current}
    on:click={onClick}
    {...$$restProps}
  >
    {#if (text || $$slots.text) && textPosition === 'before'}
      <span class={c.text}>{printText(text)}<slot name="text" /></span>
    {/if}
    {#if $$slots.icon}
      <span class={c.icon}><slot name="icon" /></span>
    {/if}
    {#if (text || $$slots.text) && textPosition === 'after'}
      <span class={c.text}>{printText(text)}<slot name="text" /></span>
    {/if}
    <slot />
  </svelte:component>
{/if}
