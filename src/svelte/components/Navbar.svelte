<script>
  import { onMount, onDestroy, setContext } from 'svelte';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { NavbarClasses } from '../../shared/classes/NavbarClasses.js';
  import { NavbarColors } from '../../shared/colors/NavbarColors.js';
  import { printText } from '../shared/print-text.js';
  import Glass from './Glass.svelte';

  let {
    class: className,
    color: colorsProp,

    bgClass = '',
    innerClass = '',
    leftClass = '',
    titleClass = '',
    subtitleClass = '',
    rightClass = '',
    subnavbarClass = '',

    outline = undefined,
    centerTitle = undefined,

    medium = false,
    large = false,
    transparent = false,

    fontSizeIos = 'text-[17px]',
    fontSizeMaterial = 'text-[16px]',

    titleFontSizeIos = 'text-[17px]',
    titleFontSizeMaterial = 'text-[22px]',

    titleMediumFontSizeIos = 'text-[24px]',
    titleMediumFontSizeMaterial = 'text-[24px]',

    titleLargeFontSizeIos = 'text-[34px]',
    titleLargeFontSizeMaterial = 'text-[28px]',

    scrollEl = undefined,

    title = undefined,
    subtitle = undefined,
    ios = undefined,
    material = undefined,

    left,
    right,
    subnavbar,

    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  let titleContainerHeight = 0;
  let bgElRef = $state(null);
  let innerElRef = $state(null);
  let titleContainerElRef = $state(null);
  let titleElRef = $state(null);
  let subnavbarElRef = $state(null);

  const isScrollable = $derived(medium || large || transparent);
  // svelte-ignore state_referenced_locally
  let wasScrollable = $state(isScrollable);

  const dark = useDarkClasses();

  const theme = $derived(useTheme({ ios, material }));

  setContext('NavbarContext', () => ({ value: { navbar: true } }));

  const colors = $derived(NavbarColors(colorsProp, dark));

  const isOutline = $derived(
    typeof outline === 'undefined' ? theme === 'ios' : outline
  );

  const c = $derived(
    useThemeClasses(
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
          left,
          right,
          subnavbar,
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
        className
      )
    )
  );

  const getScrollEl = () => {
    if (typeof scrollEl === 'undefined') {
      return el && el.parentNode;
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
    if (theme === 'material') {
      bgElRef.style.opacity = transparent ? -0.5 + scrollProgress * 1.5 : '';
      if (medium || large) {
        bgElRef.style.transform = `translateY(-${
          scrollProgress * maxTranslate
        }px)`;
      }
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

  $effect(() => {
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

<div class={c.base} bind:this={el} {...restProps}>
  {#if theme === 'ios'}
    <div class={c.bgBlur}></div>
  {/if}
  <div class={c.bg} bind:this={bgElRef}></div>
  <div class={c.inner} bind:this={innerElRef}>
    {#if left}
      <Glass class={c.left}>
        {@render left?.()}
      </Glass>
    {/if}
    {#if title || subtitle}
      <div class={c.title} bind:this={titleElRef}>
        {#if typeof title !== 'function'}
          {printText(title)}
        {:else}
          {@render title?.()}
        {/if}
        {#if subtitle}
          <div class={c.subtitle}>
            {#if typeof subtitle !== 'function'}
              {printText(subtitle)}
            {:else}
              {@render subtitle?.()}
            {/if}
          </div>
        {/if}
      </div>
    {/if}
    {#if right}
      <Glass class={c.right}>
        {@render right?.()}
      </Glass>
    {/if}
    {@render children?.()}
  </div>
  {#if large || medium}
    <div class={c.titleContainer} bind:this={titleContainerElRef}>
      {#if typeof title !== 'function'}
        {printText(title)}
      {:else}
        {@render title?.()}
      {/if}
    </div>
  {/if}
  {#if subnavbar}
    <div class={c.subnavbar} bind:this={subnavbarElRef}>
      {@render subnavbar?.()}
    </div>
  {/if}
</div>
