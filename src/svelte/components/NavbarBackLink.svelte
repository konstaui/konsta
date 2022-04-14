<script>
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import BackIcon from './icons/BackIcon.jsx';
  import Link from './Link.svelte';
  import { NavbarBackLinkClasses } from '../../shared/classes/NavbarBackLinkClasses.js';

  let className = undefined;
  export { className as class };
  export let ios = undefined;
  export let material = undefined;

  export let text = 'Back';
  export let showText = 'auto';
  export let onClick = undefined;

  $: theme = useTheme({ ios, material }, (v) => (theme = v));

  $: shouldShowText =
    (showText === 'auto' && theme === 'ios') || showText === true;

  $: c = useThemeClasses(
    { ios, material },
    NavbarBackLinkClasses(),
    className,
    (v) => (c = v)
  );
</script>

<!-- todo component -->
<Link {component} class={c.base} navbar {...$$restProps} {onClick}>
  <span class={c.icon}>
    <BackIcon {theme} />
  </span>
  {#if shouldShowText}
    <span>{text}</span>
  {/if}
  <slot />
</Link>
