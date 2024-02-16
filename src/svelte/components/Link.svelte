<script>
  import { cls } from '../../shared/cls.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { LinkClasses } from '../../shared/classes/LinkClasses.js';
  import { LinkColors } from '../../shared/colors/LinkColors.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let component = 'a';
  export let linkProps = {};

  // Toolbar/navbar link
  export let navbar = false;
  export let toolbar = false;

  export let iconOnly = false;

  export let tabbar = false;
  export let tabbarActive = false;

  export let touchRipple = false;

  export let onClick = undefined;

  const rippleEl = { current: null };

  let theme;
  theme = useTheme({ ios, material }, (v) => (theme = v));

  const dark = useDarkClasses();

  $: needsTouchRipple =
    theme === 'material' &&
    (touchRipple ||
      (typeof touchRipple === 'undefined' && (toolbar || tabbar || navbar)));

  $: useTouchRipple(rippleEl, needsTouchRipple);

  $: colors = LinkColors(colorsProp, dark);

  // prettier-ignore
  $: themeTextColor = navbar ?
    (
      theme === 'material' ? colors.navbarTextMaterial : colors.navbarTextIos
    ) :
    (
      theme === 'material' ? colors.textMaterial : colors.textIos
    );

  $: textColor =
    tabbar && !tabbarActive ? colors.tabbarInactive : themeTextColor;
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
<svelte:element
  this={component}
  bind:this={rippleEl.current}
  class={classes}
  {...$$restProps}
  {...linkProps}
  role="link"
  tabindex="0"
  on:click={onClick}
>
  <slot />
</svelte:element>
