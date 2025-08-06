<script>
  import { getContext, onMount, setContext } from 'svelte';
  import { cls } from '../../shared/cls.js';
  import { SegmentedClasses } from '../../shared/classes/SegmentedClasses.js';
  import { SegmentedColors } from '../../shared/colors/SegmentedColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';
  import Glass from './Glass.svelte';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,

    raised = false,
    raisedIos = false,
    raisedMaterial = false,
    outline = false,
    outlineIos = false,
    outlineMaterial = false,
    strong = false,
    strongIos = false,
    strongMaterial = false,
    rounded = false,
    roundedIos = false,
    roundedMaterial = false,

    children,
    ...restProps
  } = $props();

  const theme = $derived(useTheme({ ios, material }));

  let el = $state(null);
  export { el };

  let highlightElRef = $state(null);

  const dark = useDarkClasses();

  const colors = $derived(SegmentedColors(colorsProp, dark));

  let highlightStyle = $state({
    transform: '',
    width: '',
  });

  const isStrong = $derived(
    typeof strong === 'undefined'
      ? theme === 'ios'
        ? strongIos
        : strongMaterial
      : strong
  );

  const isOutline = $derived(
    typeof outline === 'undefined'
      ? theme === 'ios'
        ? outlineIos
        : outlineMaterial
      : outline
  );
  const isRounded = $derived(
    typeof rounded === 'undefined'
      ? theme === 'ios'
        ? roundedIos
        : roundedMaterial
      : rounded
  );
  const isRaised = $derived(
    typeof raised === 'undefined'
      ? theme === 'ios'
        ? raisedIos
        : raisedMaterial
      : raised
  );

  let NavbarContext =
    getContext('NavbarContext') || (() => ({ value: { navbar: false } }));
  const { navbar } = $derived(NavbarContext()?.value || { navbar: false });

  const c = $derived(
    useThemeClasses(
      { ios, material },
      SegmentedClasses(
        { outline: isOutline, rounded: isRounded, navbar },
        colors,
        dark
      ),
      ''
    )
  );
  let activeEl = $state(null);

  setContext('SegmentedContext', () => ({
    value: {
      strong: isStrong,
      outline: isOutline,
      rounded: isRounded,
      raised: isRaised,
      setActiveEl: (el) => {
        activeEl = el;
      },
    },
  }));

  const classes = $derived(
    cls(
      // base
      isRounded ? c.base.rounded : c.base.square,
      isRaised && c.raised,
      isOutline && c.outline,
      isStrong && c.strong,

      className
    )
  );

  const setHighlight = () => {
    if (isStrong && highlightElRef) {
      const buttonsEl = highlightElRef.parentElement;
      const buttonsLength = buttonsEl.children.length - 1;
      const activeIndex = [...buttonsEl.children].indexOf(
        buttonsEl.querySelector('.k-segmented-strong-button-active')
      );

      const between = '4px';
      const padding = theme === 'ios' && navbar ? '4px' : '2px';

      const width = `calc((100% - ${padding} * 2 - ${between} * (${buttonsLength} - 1)) / ${buttonsLength})`;
      const transform = `translateX(calc((${activeIndex} * 100% + ${activeIndex} * ${between}) * var(--k-rtl-reverse)))`;

      if (
        width !== highlightStyle.width ||
        transform !== highlightStyle.transform
      ) {
        highlightStyle.width = width;
        highlightStyle.transform = transform;
      }
    }
  };

  onMount(() => setHighlight());

  $effect(() => {
    activeEl;
    setHighlight();
  });
</script>

{#if theme === 'ios' && navbar}
  <Glass bind:this={el} class={classes} {...restProps}>
    {#if isOutline}
      <span class={c.outlineInner}>
        {@render children?.()}
      </span>
    {:else}
      {@render children?.()}
    {/if}
    {#if isStrong}
      <span
        bind:this={highlightElRef}
        class={c.strongHighlight}
        style={`
        width: ${highlightStyle.width};
        transform: ${highlightStyle.transform};
      `}
      ></span>
    {/if}
  </Glass>
{:else}
  <div bind:this={el} class={classes} {...restProps}>
    {#if isOutline}
      <span class={c.outlineInner}>
        {@render children?.()}
      </span>
    {:else}
      {@render children?.()}
    {/if}
    {#if isStrong}
      <span
        bind:this={highlightElRef}
        class={c.strongHighlight}
        style={`
        width: ${highlightStyle.width};
        transform: ${highlightStyle.transform};
      `}
      ></span>
    {/if}
  </div>
{/if}
