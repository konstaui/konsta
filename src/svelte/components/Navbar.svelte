<script>
  import { onMount, onDestroy, afterUpdate } from 'svelte';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { NavbarClasses } from '../../shared/classes/NavbarClasses.js';
  import { NavbarColors } from '../../shared/colors/NavbarColors.js';
  import { printText } from '../shared/print-text.js';

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
  export let outline = undefined;
  export let centerTitle = undefined;

  export let medium = false;
  export let large = false;
  export let transparent = false;

  export let fontSizeIos = 'text-[17px]';
  export let fontSizeMaterial = 'text-[16px]';

  export let titleFontSizeIos = 'text-[17px]';
  export let titleFontSizeMaterial = 'text-[22px]';

  export let titleMediumFontSizeIos = 'text-[24px]';
  export let titleMediumFontSizeMaterial = 'text-[24px]';

  export let titleLargeFontSizeIos = 'text-[34px]';
  export let titleLargeFontSizeMaterial = 'text-[28px]';

  export let scrollEl = undefined;

  export let title = undefined;
  export let subtitle = undefined;
  export let ios = undefined;
  export let material = undefined;

  let elRef = 0;
  let titleContainerHeight = 0;
  let bgElRef = null;
  let innerElRef = null;
  let titleContainerElRef = null;
  let titleElRef = null;
  let subnavbarElRef = null;

  $: isScrollable = medium || large || transparent;
  let wasScrollable = isScrollable;

  const dark = useDarkClasses();

  let theme;
  theme = useTheme((v) => (theme = v));

  $: colors = NavbarColors(colorsProp, dark);

  $: isOutline = typeof outline === 'undefined' ? theme === 'ios' : outline;

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
        transparent,
        outline: isOutline,
        fontSizeIos,
        fontSizeMaterial,
        titleFontSizeIos,
        titleFontSizeMaterial,
        medium,
        large,
        titleMediumFontSizeIos,
        titleMediumFontSizeMaterial,
        titleLargeFontSizeIos,
        titleLargeFontSizeMaterial,
        centerTitle:
          typeof centerTitle === 'undefined' ? theme === 'ios' : centerTitle,
      },
      colors,
    ),
    className,
    (v) => (c = v)
  );

  const getScrollEl = () => {
    if (typeof scrollEl === 'undefined') {
      return elRef && elRef.parentNode;
    }
    return scrollEl || scrollEl;
  };

  const onScroll = (e) => {
    if (!e) {
      e = {
        target: getScrollEl(),
      };
    }
    const { scrollTop } = e.target;
    if (!isScrollable) {
      if (wasScrollable) {
        if (titleElRef) {
          titleElRef.style.opacity = '';
        }
        if (bgElRef) {
          bgElRef.style.opacity = '';
        }
      }
      return;
    }

    const maxTranslate = titleContainerHeight;
    const scrollProgress = Math.max(Math.min(scrollTop / maxTranslate, 1), 0);

    bgElRef.style.opacity = transparent ? -0.5 + scrollProgress * 1.5 : '';
    if (medium || large) {
      bgElRef.style.transform = `translateY(-${
        scrollProgress * maxTranslate
      }px)`;
    }

    if (titleContainerElRef) {
      titleContainerElRef.style.transform = `translateY(-${
        scrollProgress * maxTranslate
      }px)`;
      titleContainerElRef.style.opacity = 1 - scrollProgress * 2;
    }
    if (titleElRef) {
      titleElRef.style.opacity = -0.5 + scrollProgress * 1.5;
    }
    if ((medium || large) && subnavbarElRef) {
      subnavbarElRef.style.transform = `translateY(-${
        scrollProgress * maxTranslate
      }px)`;
    }
  };

  const calcSize = () => {
    if (titleContainerElRef) {
      titleContainerHeight = titleContainerElRef.offsetHeight;
    } else {
      titleContainerHeight = innerElRef.offsetHeight;
    }
  };

  const initScroll = () => {
    if (!isScrollable) {
      if (wasScrollable) {
        onScroll({ target: { scrollTop: 0 } });
        wasScrollable = isScrollable;
      }
      return;
    }
    wasScrollable = isScrollable;

    const scrollElLocal = getScrollEl();
    if (scrollElLocal) {
      scrollElLocal.addEventListener('scroll', onScroll);
      onScroll({ target: scrollElLocal });
    } else {
      onScroll({ target: { scrollTop: 0 } });
    }
  };

  const destroyScroll = () => {
    const scrollElLocal = getScrollEl();
    if (scrollElLocal) {
      scrollElLocal.removeEventListener('scroll', onScroll);
    }
  };

  afterUpdate(() => {
    calcSize();
    if (!wasScrollable && isScrollable) {
      initScroll();
    } else if (wasScrollable && !isScrollable) {
      onScroll();
      wasScrollable = isScrollable;
      destroyScroll();
    } else if (wasScrollable && isScrollable) {
      onScroll();
    }
  });
  onMount(() => {
    calcSize();
    initScroll();
  });
  onDestroy(() => {
    destroyScroll();
  });
</script>

<div class={c.base} bind:this={elRef} {...$$restProps}>
  <div class={c.bg} bind:this={bgElRef}></div>
  <div class={c.inner} bind:this={innerElRef}>
    {#if $$slots.left}
      <div class={c.left}><slot name="left" /></div>
    {/if}
    {#if $$slots.title || $$slots.subtitle || title || subtitle}
      <div class={c.title} bind:this={titleElRef}>
        {printText(title)}
        <slot name="title" />
        {#if subtitle || $$slots.subtitle}
          <div class={c.subtitle}>
            {printText(subtitle)}<slot name="subtitle" />
          </div>
        {/if}
      </div>
    {/if}
    {#if $$slots.right}
      <div class={c.right}><slot name="right" /></div>
    {/if}
    <slot />
  </div>
  {#if large || medium}
    <div class={c.titleContainer} bind:this={titleContainerElRef}>
      {printText(title)}
      <slot name="title" />
    </div>
  {/if}
  {#if $$slots.subnavbar}
    <div class={c.subnavbar} bind:this={subnavbarElRef}>
      <slot name="subnavbar" />
    </div>
  {/if}
</div>
