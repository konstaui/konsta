<script>
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import { FabClasses } from '../../shared/classes/FabClasses.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let href = undefined;
  export let text = undefined;
  export let textPosition = 'after';
  export let touchRipple = true;

  export let onClick = undefined;

  const rippleEl = { current: null };

  $: useTouchRipple(rippleEl, touchRipple);

  $: colors = {
    bg: 'bg-primary',
    activeBg: 'active:bg-primary-dark',
    text: 'text-white',
    ...colorsProp,
  };

  $: c = useThemeClasses(
    { ios, material },
    FabClasses({}, colors),
    className,
    (v) => (c = v)
  );
</script>

<a
  class={text ? c.base.withText : c.base.iconOnly}
  {href}
  bind:this={rippleEl.current}
  on:click={onClick}
  {...$$restProps}
>
  {#if (text || $$slots.text) && textPosition === 'before'}
    <span class={c.text}>{text}<slot name="text" /></span>
  {/if}
  {#if $$slots.icon}
    <span class={c.icon}><slot name="icon" /></span>
  {/if}
  {#if (text || $$slots.text) && textPosition === 'after'}
    <span class={c.text}>{text}<slot name="text" /></span>
  {/if}
  <slot />
</a>
