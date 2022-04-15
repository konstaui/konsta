<script>
  import { cls } from '../../shared/esm/cls.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { LinkClasses } from '../../shared/esm/classes/LinkClasses.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  // Toolbar/navbar link
  export let navbar = false;
  export let toolbar = false;

  export let iconOnly = false;

  export let tabbar = false;
  export let tabbarActive = false;

  export let touchRipple = true;

  export let onClick = undefined;

  const rippleEl = { current: null };

  let theme;
  theme = useTheme({ ios, material }, (v) => (theme = v));

  const dark = useDarkClasses();

  $: needsTouchRipple =
    theme === 'material' && (toolbar || tabbar || navbar) && touchRipple;

  $: useTouchRipple(rippleEl, needsTouchRipple);

  $: colors = {
    text: 'text-primary',
    tabbarInactive: cls(
      'text-black',
      dark('dark:text-white dark:text-opacity-55')
    ),
    ...colorsProp,
  };

  $: textColor = tabbar && !tabbarActive ? colors.tabbarInactive : colors.text;
  $: tabbarState = tabbarActive ? 'active' : 'inactive';

  $: c = useThemeClasses(
    { ios, material },
    LinkClasses({ iconOnly }, { textColor, needsTouchRipple }, className),
    '',
    (v) => (c = v)
  );

  $: classes = cls(
    // base
    c.base[tabbar ? 'default' : 'notTabbar'],

    toolbar && c.toolbar,

    navbar && c.navbar,

    tabbar && c.tabbar[tabbarState],

    className
  );
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a
  bind:this={rippleEl.current}
  class={classes}
  {...$$restProps}
  on:click={onClick}
>
  {#if theme === 'material' && tabbar}
    <span class={c.tabbarHighlight[tabbarState]} />
  {/if}
  <slot />
</a>
