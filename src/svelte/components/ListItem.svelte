<script>
  import { cls } from '../../shared/cls.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.svelte.js';
  import ChevronIcon from './icons/ChevronIcon.svelte';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { ListItemClasses } from '../../shared/classes/ListItemClasses.js';
  import { ListItemColors } from '../../shared/colors/ListItemColors.js';
  import { printText } from '../shared/print-text.js';
  import { getContext } from 'svelte';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,

    component = 'li',
    mediaClass = '',
    innerClass = '',
    contentClass = '',
    titleWrapClass = '',

    titleFontSizeIos = 'text-[17px]',
    titleFontSizeMaterial = 'text-[16px]',

    withMedia = undefined,
    withTitle = undefined,

    // Content props
    title = '',
    subtitle = '',
    text = '',
    after = '',
    header = '',
    footer = '',

    menuListItem = false,
    menuListItemActive = false,

    groupTitle = false,

    // Title
    strongTitle = 'auto',

    // Label props
    label = false,

    // Link props
    chevron = undefined,
    chevronIos = true,
    chevronMaterial = true,
    href = undefined,
    target = undefined,
    dividers = undefined,
    contacts = false,

    link = false,
    linkComponent = 'a',
    linkProps = {},

    onClick = undefined,
    onclick = undefined,

    children,

    inner,
    content,
    media,

    ...restProps
  } = $props();

  const onClickInternal = (e) => {
    if (onClick) onClick(e);
    if (onclick) onclick(e);
  };

  const ListContext =
    getContext('ListContext') ||
    (() => ({
      value: { dividers: false, nested: false },
    }));

  let el = $state(null);
  export { el };

  const theme = $derived(useTheme({ ios, material }));

  const dark = useDarkClasses();

  const hasChevron = $derived(
    typeof chevron === 'undefined'
      ? theme === 'ios'
        ? chevronIos
        : chevronMaterial
      : chevron
  );

  const colors = $derived(ListItemColors(colorsProp, dark));

  const isMenuListItemActive = $derived(menuListItem && menuListItemActive);

  const textColor = $derived(
    colors[
      `${
        isMenuListItemActive
          ? 'menuListItemActiveText'
          : menuListItem
            ? 'menuListItemText'
            : 'text'
      }${theme === 'ios' ? 'Ios' : 'Material'}`
    ]
  );

  const isLink = $derived(!!href || href === '' || menuListItem || link);
  const isLabel = $derived(!!label);

  const needsTouchRipple = $derived(
    theme === 'material' && (isLabel || isLink)
  );

  useTouchRipple(
    () => el,
    () => needsTouchRipple
  );

  const hrefComputed = $derived(
    href === true || href === false || typeof href === 'undefined'
      ? undefined
      : href || ''
  );
  const ItemContentComponent = $derived(
    isLink ? linkComponent : isLabel ? 'label' : 'div'
  );
  const linkPropsComputed = $derived(
    isLink ? { href: hrefComputed, target, ...linkProps } : {}
  );

  const isMediaItem = $derived(
    title && withTitle !== false && (subtitle || text)
  );

  const autoStrongTitle = $derived(
    strongTitle === 'auto' && title && withTitle !== false && (subtitle || text)
  );

  const c = $derived(
    useThemeClasses(
      { ios, material },
      ListItemClasses(
        {
          menuListItem,
          dividers:
            typeof dividers === 'undefined'
              ? ListContext().value.dividers
              : dividers,
          mediaClass,
          innerClass,
          contentClass,
          titleWrapClass,
          titleFontSizeIos,
          titleFontSizeMaterial,
          strongTitle,
          contacts: contacts === 'false' ? '' : contacts,
        },
        colors,
        {
          isMediaItem,
          theme,
          textColor,
          needsTouchRipple,
          isMenuListItemActive,
          darkClasses: dark,
          autoStrongTitle,
          nested: ListContext().value.nested,
        }
      ),
      className
    )
  );

  const itemContentClasses = $derived(
    isLink || isLabel ? c.itemContent.link : c.itemContent.default
  );

  const titleClasses = $derived(
    menuListItem
      ? c.title.menuListItem
      : strongTitle === true || autoStrongTitle
        ? c.title.strong
        : c.title.default
  );
</script>

{#if groupTitle}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <svelte:element
    this={component}
    class={cls(c.groupTitle, className)}
    onclick={onClickInternal}
    {...restProps}
  >
    {#if typeof title === 'function'}
      {@render title()}
    {:else}
      {title}
    {/if}
    {@render children?.()}
  </svelte:element>
{:else}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <svelte:element
    this={component}
    class={c.base}
    {...restProps}
    onclick={onClickInternal}
  >
    {#if typeof ItemContentComponent === 'string'}
      <svelte:element
        this={ItemContentComponent}
        bind:this={el}
        class={itemContentClasses}
        {...linkPropsComputed}
      >
        {#if media && withMedia !== false}
          <div class={c.media}>{@render media()}</div>
        {/if}
        <div class={c.inner}>
          {#if header}
            <div class={c.header}>
              {#if typeof header === 'function'}
                {@render header()}
              {:else}
                {printText(header)}
              {/if}
            </div>
          {/if}
          {#if (title && withTitle !== false) || after}
            <div class={c.titleWrap}>
              {#if title && withTitle !== false}
                <div class={titleClasses}>
                  {#if typeof title === 'function'}
                    {@render title()}
                  {:else}
                    {printText(title)}
                  {/if}
                </div>
              {/if}
              {#if after}
                <div class={c.after}>
                  {#if typeof after === 'function'}
                    {@render after()}
                  {:else}
                    {printText(after)}
                  {/if}
                </div>
              {/if}
              {#if isLink && hasChevron && !menuListItem}
                <ChevronIcon class={c.chevron} />
              {/if}
            </div>
          {/if}
          {#if subtitle}
            <div class={c.subtitle}>
              {#if typeof subtitle === 'function'}
                {@render subtitle()}
              {:else}
                {printText(subtitle)}
              {/if}
            </div>
          {/if}
          {#if text}
            <div class={c.text}>
              {#if typeof text === 'function'}
                {@render text()}
              {:else}
                {printText(text)}
              {/if}
            </div>
          {/if}
          {#if footer}
            <div class={c.footer}>
              {#if typeof footer === 'function'}
                {@render footer()}
              {:else}
                {printText(footer)}
              {/if}
            </div>
          {/if}
          {@render inner?.()}
        </div>
        {@render content?.()}
      </svelte:element>
    {:else}
      <ItemContentComponent
        bind:this={el}
        class={itemContentClasses}
        {...linkPropsComputed}
      >
        {#if media}
          <div class={c.media}>{@render media()}</div>
        {/if}
        <div class={c.inner}>
          {#if header}
            <div class={c.header}>
              {#if typeof header === 'function'}
                {@render header()}
              {:else}
                {printText(header)}
              {/if}
            </div>
          {/if}
          {#if (title && withTitle !== false) || after}
            <div class={c.titleWrap}>
              {#if title && withTitle !== false}
                <div class={titleClasses}>
                  {#if typeof title === 'function'}
                    {@render title()}
                  {:else}
                    {printText(title)}
                  {/if}
                </div>
              {/if}
              {#if after}
                <div class={c.after}>
                  {#if typeof after === 'function'}
                    {@render after()}
                  {:else}
                    {printText(after)}
                  {/if}
                </div>
              {/if}
              {#if isLink && hasChevron && !menuListItem}
                <ChevronIcon class={c.chevron} />
              {/if}
            </div>
          {/if}
          {#if subtitle}
            <div class={c.subtitle}>
              {#if typeof subtitle === 'function'}
                {@render subtitle()}
              {:else}
                {printText(subtitle)}
              {/if}
            </div>
          {/if}
          {#if text}
            <div class={c.text}>
              {#if typeof text === 'function'}
                {@render text()}
              {:else}
                {printText(text)}
              {/if}
            </div>
          {/if}
          {#if footer}
            <div class={c.footer}>
              {#if typeof footer === 'function'}
                {@render footer()}
              {:else}
                {printText(footer)}
              {/if}
            </div>
          {/if}
          {@render inner?.()}
        </div>
        {@render content?.()}
      </ItemContentComponent>
    {/if}
    {@render children?.()}
  </svelte:element>
{/if}
