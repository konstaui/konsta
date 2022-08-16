<script>
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { NavbarClasses } from '../../shared/classes/NavbarClasses.js';
  import { NavbarColors } from '../../shared/colors/NavbarColors.js';

  let className = undefined;
  export { className as class };

  export let bgClass = '';
  export let innerClass = '';
  export let leftClass = '';
  export let titleClass = '';
  export let subtitleClass = '';
  export let rightClass = '';
  export let subnavbarClass = '';

  let colorsProp = undefined;
  export { colorsProp as colors };
  export let translucent = true;
  export let hairlines = true;
  export let centerTitle = undefined;

  export let fontSizeIos = 'text-[17px]';
  export let fontSizeMaterial = 'text-[16px]';

  export let titleFontSizeIos = 'text-[17px]';
  export let titleFontSizeMaterial = 'text-[22px]';

  export let title = undefined;
  export let subtitle = undefined;
  export let ios = undefined;
  export let material = undefined;

  const dark = useDarkClasses();

  $: colors = NavbarColors(colorsProp, dark);

  let theme;
  theme = useTheme((v) => (theme = v));

  $: c = useThemeClasses(
    { ios, material },
    NavbarClasses(
      {
        bgClass,
        innerClass,
        leftClass,
        titleClass,
        subtitleClass,
        rightClass,
        subnavbarClass,
        translucent,
        hairlines,
        fontSizeIos,
        fontSizeMaterial,
        titleFontSizeIos,
        titleFontSizeMaterial,
        centerTitle:
          typeof centerTitle === 'undefined' ? theme === 'ios' : centerTitle,
      },
      colors,
      className
    ),
    className,
    (v) => (c = v)
  );
</script>

<div class={c.base} {...$$restProps}>
  <div class={c.bg} />
  <div class={c.inner}>
    {#if $$slots.left}
      <div class={c.left}><slot name="left" /></div>
    {/if}
    {#if $$slots.title || $$slots.subtitle || title || subtitle}
      <div class={c.title}>
        {title}
        <slot name="title" />
        {#if subtitle || $$slots.subtitle}
          <div class={c.subtitle}>
            {subtitle}<slot name="subtitle" />
          </div>
        {/if}
      </div>
    {/if}
    {#if $$slots.right}
      <div class={c.right}><slot name="right" /></div>
    {/if}
    <slot />
  </div>
  {#if $$slots.subnavbar}
    <div class={c.subnavbar}>
      <slot name="subnavbar" />
    </div>
  {/if}
</div>
