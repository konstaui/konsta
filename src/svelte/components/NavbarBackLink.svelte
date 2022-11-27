<script>
  import { NavbarBackLinkClasses } from '../../shared/classes/NavbarBackLinkClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';
  import BackIcon from './icons/BackIcon.svelte';
  import Link from './Link.svelte';

  let className = undefined;
  export { className as class };
  export let ios = undefined;
  export let material = undefined;

  export let component = 'a';
  export let text = 'Back';
  export let showText = 'auto';

  let theme;
  theme = useTheme({ ios, material }, (v) => (theme = v));

  $: shouldShowText =
    (showText === 'auto' && theme === 'ios') || showText === true;

  $: c = useThemeClasses(
    { ios, material },
    NavbarBackLinkClasses(),
    className,
    (v) => (c = v)
  );
</script>

<Link class={c.base} navbar {component} {...$$restProps} on:click>
  <span class={c.icon}>
    <BackIcon {theme} />
  </span>
  {#if shouldShowText}
    <span>{text}</span>
  {/if}
  <slot />
</Link>
