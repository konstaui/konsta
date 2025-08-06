<script>
  import { cls } from '../../shared/cls.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.svelte.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { LinkClasses } from '../../shared/classes/LinkClasses.js';
  import { LinkColors } from '../../shared/colors/LinkColors.js';
  import { getReactiveContext } from '../shared/get-reactive-context.js';
  import { getContext } from 'svelte';

  let {
    class: className,
    colors: colorsProp,

    ios = undefined,
    material = undefined,

    component = 'a',
    linkProps = {},

    // Toolbar/navbar link
    iconOnly = false,
    tabbarActive = false,

    onClick = undefined,
    onclick = undefined,

    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const theme = $derived(useTheme({ ios, material }));

  let NavbarContext =
    getContext('NavbarContext') || (() => ({ value: { navbar: false } }));

  let ToolbarContext =
    getContext('ToolbarContext') ||
    (() => ({
      value: {
        toolbar: false,
        tabbar: false,
        tabbarLabels: false,
        tabbarIcons: false,
      },
    }));

  const { navbar } = $derived(NavbarContext()?.value || { navbar: false });
  const { toolbar, tabbar, tabbarLabels, tabbarIcons, setActiveTabbarEl } =
    $derived(
      ToolbarContext()?.value || {
        toolbar: false,
        tabbar: false,
        tabbarLabels: false,
        tabbarIcons: false,
        setActiveTabbarEl: undefined,
      }
    );

  const dark = useDarkClasses();

  const needsTouchRipple = $derived(
    theme === 'material' && (toolbar || tabbar || navbar)
  );

  useTouchRipple(
    () => el,
    () => toolbar || tabbar || navbar
  );

  const colors = $derived(LinkColors(colorsProp, dark));

  // prettier-ignore
  const themeTextColor = $derived(navbar ?
    (
      theme === 'material' ? colors.navbarTextMaterial : colors.navbarTextIos
    ) :
    toolbar ? (theme === 'material' ? colors.toolbarTextMaterial : colors.toolbarTextIos) :
    (
      theme === 'material' ? colors.textMaterial : colors.textIos
    )
  );

  const textColor = $derived(
    tabbar && !tabbarActive ? colors.tabbarInactive : themeTextColor
  );
  const tabbarState = $derived(tabbarActive ? 'active' : 'inactive');

  const c = $derived(
    useThemeClasses(
      { ios, material },
      LinkClasses({ iconOnly }, { textColor, needsTouchRipple })
    )
  );

  const classes = $derived(
    cls(
      // base
      c.base,

      toolbar && c.toolbar,

      navbar && c.navbar,

      tabbar && c.tabbar[tabbarState],

      className
    )
  );

  $effect(() => {
    if (tabbar && tabbarActive) {
      setActiveTabbarEl?.(el);
    }
  });
</script>

<svelte:element
  this={component}
  bind:this={el}
  class={classes}
  {...restProps}
  {...linkProps}
  role="link"
  tabindex="0"
  onclick={onClick || onclick}
>
  {@render children?.()}
</svelte:element>
