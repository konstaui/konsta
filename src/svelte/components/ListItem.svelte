<script>
  import { cls } from '../../shared/cls.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import ChevronIcon from './icons/ChevronIcon.svelte';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { ListItemClasses } from '../../shared/classes/ListItemClasses.js';
  import { ListItemColors } from '../../shared/colors/ListItemColors.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let component = 'li';
  export let mediaClass = '';
  export let innerClass = '';
  export let contentClass = '';
  export let titleWrapClass = '';

  export let titleFontSizeIos = 'text-[17px]';
  export let titleFontSizeMaterial = 'text-[16px]';

  export let withMedia = undefined;
  export let withTitle = undefined;

  // Content props
  export let title = '';
  export let subtitle = '';
  export let text = '';
  export let after = '';
  export let header = '';
  export let footer = '';

  export let menuListItem = false;
  export let menuListItemActive = false;

  export let hairlines = true;

  // Enable divider
  export let divider = false;
  export let groupTitle = false;

  // Title
  export let strongTitle = 'auto';

  // Label props
  export let label = false;

  // Link props
  export let chevron = true;
  export let href = undefined;
  export let target = undefined;

  export let link = false;
  export let linkComponent = 'a';
  export let linkProps = {};

  export let touchRipple = true;

  export let onClick = undefined;

  const rippleEl = { current: null };

  let theme;
  theme = useTheme({ ios, material }, (v) => (theme = v));

  const dark = useDarkClasses();

  $: colors = ListItemColors(colorsProp, dark);

  $: isMenuListItemActive = menuListItem && menuListItemActive;

  $: textColor =
    colors[
      `${
        isMenuListItemActive
          ? 'menuListItemActiveText'
          : menuListItem
          ? 'menuListItemText'
          : 'text'
      }${theme === 'ios' ? 'Ios' : 'Material'}`
    ];

  $: isLink = !!href || href === '' || menuListItem || link;
  $: isLabel = !!label;

  $: needsTouchRipple =
    theme === 'material' && (isLabel || isLink) && touchRipple;

  $: useTouchRipple(rippleEl, needsTouchRipple);

  $: hrefComputed =
    href === true || href === false || typeof href === 'undefined'
      ? undefined
      : href || '';
  $: ItemContentComponent = isLink ? linkComponent : isLabel ? 'label' : 'div';
  $: linkPropsComputed = isLink
    ? { href: hrefComputed, target, ...linkProps }
    : {};

  $: autoStrongTitle =
    strongTitle === 'auto' &&
    (title || $$slots.title) &&
    withTitle !== false &&
    (subtitle || text || $$slots.subtitle || $$slots.text);

  $: c = useThemeClasses(
    { ios, material },
    ListItemClasses(
      {
        menuListItem,
        hairlines,
        mediaClass,
        innerClass,
        contentClass,
        titleWrapClass,
        titleFontSizeIos,
        titleFontSizeMaterial,
        strongTitle,
        divider,
      },
      colors,
      {
        theme,
        textColor,
        needsTouchRipple,
        isMenuListItemActive,
        darkClasses: dark,
        autoStrongTitle,
      }
    ),
    className,
    (v) => (c = v)
  );

  $: itemContentClasses =
    isLink || isLabel ? c.itemContent.link : c.itemContent.default;

  $: titleClasses = menuListItem
    ? c.title.menuListItem
    : strongTitle === true || autoStrongTitle
    ? c.title.strong
    : c.title.default;
</script>

{#if divider || groupTitle}
  <svelte:element
    this={component}
    class={cls(c.divider, className)}
    on:click={onClick}
  >
    {title}
    <slot name="title" />
    <slot />
  </svelte:element>
{:else}
  <svelte:element
    this={component}
    class={c.base}
    {...$$restProps}
    on:click={onClick}
  >
    {#if typeof ItemContentComponent === 'string'}
      <svelte:element
        this={ItemContentComponent}
        bind:this={rippleEl.current}
        class={itemContentClasses}
        {...linkPropsComputed}
      >
        {#if $$slots.media && withMedia !== false}
          <div class={c.media}><slot name="media" /></div>
        {/if}
        <div class={c.inner}>
          {#if header || $$slots.header}
            <div class={c.header}>{header}<slot name="header" /></div>
          {/if}
          {#if ((title || $$slots.title) && withTitle !== false) || after || $$slots.after}
            <div class={c.titleWrap}>
              {#if (title || $$slots.title) && withTitle !== false}
                <div class={titleClasses}>
                  {title}
                  <slot name="title" />
                </div>
              {/if}
              {#if after || $$slots.after}
                <div class={c.after}>
                  {after}
                  <slot name="after" />
                </div>
              {/if}
              {#if isLink && chevron && !menuListItem}
                <ChevronIcon class={c.chevron} />
              {/if}
            </div>
          {/if}
          {#if subtitle || $$slots.subtitle}
            <div class={c.subtitle}>{subtitle}<slot name="subtitle" /></div>
          {/if}
          {#if text || $$slots.text}
            <div class={c.text}>{text}<slot name="text" /></div>
          {/if}
          {#if footer || $$slots.footer}
            <div class={c.footer}>{footer}<slot name="footer" /></div>
          {/if}
          <slot name="inner" />
        </div>
        <slot name="content" />
      </svelte:element>
    {:else}
      <svelte:component
        this={ItemContentComponent}
        bind:this={rippleEl.current}
        class={itemContentClasses}
        {...linkPropsComputed}
      >
        {#if $$slots.media}
          <div class={c.media}><slot name="media" /></div>
        {/if}
        <div class={c.inner}>
          {#if header || $$slots.header}
            <div class={c.header}>{header}<slot name="header" /></div>
          {/if}
          {#if ((title || $$slots.title) && withTitle !== false) || after || $$slots.after}
            <div class={c.titleWrap}>
              {#if (title || $$slots.title) && withTitle !== false}
                <div class={titleClasses}>
                  {title}
                  <slot name="title" />
                </div>
              {/if}
              {#if after || $$slots.after}
                <div class={c.after}>
                  {after}
                  <slot name="after" />
                </div>
              {/if}
              {#if isLink && chevron && !menuListItem}
                <ChevronIcon class={c.chevron} />
              {/if}
            </div>
          {/if}
          {#if subtitle || $$slots.subtitle}
            <div class={c.subtitle}>{subtitle}<slot name="subtitle" /></div>
          {/if}
          {#if text || $$slots.text}
            <div class={c.text}>{text}<slot name="text" /></div>
          {/if}
          {#if footer || $$slots.footer}
            <div class={c.footer}>{footer}<slot name="footer" /></div>
          {/if}
          <slot name="inner" />
        </div>
        <slot name="content" />
      </svelte:component>
    {/if}
    <slot />
  </svelte:element>
{/if}
