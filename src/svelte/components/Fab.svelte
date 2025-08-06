<script>
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.svelte.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { FabClasses } from '../../shared/classes/FabClasses.js';
  import { FabColors } from '../../shared/colors/FabColors.js';
  import { printText } from '../shared/print-text.js';
  import Glass from './Glass.svelte';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    component = 'a',
    href = undefined,
    text = undefined,
    textPosition = 'after',
    children,
    icon,
    onClick = undefined,
    onclick = undefined,
    ...restProps
  } = $props();

  let el = $state(null);

  const dark = useDarkClasses();

  useTouchRipple(
    () => el,
    () => true
  );

  const colors = $derived(FabColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses({ ios, material }, FabClasses({}, colors, dark), className)
  );
</script>

<Glass
  {component}
  class={text ? c.base.withText : c.base.iconOnly}
  {href}
  bind:this={el}
  role="button"
  tabindex="0"
  onclick={onClick || onclick}
  {...restProps}
>
  {#if text && textPosition === 'before'}
    <span class={c.text}>
      {#if typeof text !== 'function'}
        {printText(text)}
      {:else}
        {@render text?.()}
      {/if}
    </span>
  {/if}
  {#if icon}
    <span class={c.icon}>
      {@render icon?.()}
    </span>
  {/if}
  {#if text && textPosition === 'after'}
    <span class={c.text}>
      {#if typeof text !== 'function'}
        {printText(text)}
      {:else}
        {@render text?.()}
      {/if}
    </span>
  {/if}
  {@render children?.()}
</Glass>
