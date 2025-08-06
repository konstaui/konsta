<script>
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import BackIcon from './icons/BackIcon.svelte';
  import Link from './Link.svelte';
  import { NavbarBackLinkClasses } from '../../shared/classes/NavbarBackLinkClasses.js';
  import { printText } from '../shared/print-text.js';

  let {
    class: className,
    ios = undefined,
    material = undefined,
    component = 'a',
    text = 'Back',
    showText = false,
    onClick = undefined,
    onclick = undefined,

    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const theme = $derived(useTheme({ ios, material }));

  const c = $derived(
    useThemeClasses({ ios, material }, NavbarBackLinkClasses(), className)
  );
</script>

<Link
  bind:this={el}
  class={c.base}
  navbar
  {component}
  {...restProps}
  onclick={onClick || onclick}
>
  <span class={c.icon}>
    <BackIcon {theme} />
  </span>
  {#if showText}
    <span>{printText(text)}</span>
  {/if}
  {@render children?.()}
</Link>
