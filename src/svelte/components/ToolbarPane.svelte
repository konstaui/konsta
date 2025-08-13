<script>
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useTheme } from '../shared/use-theme.js';
  import { onMount, onDestroy, getContext, tick } from 'svelte';
  import { ToolbarPaneColors } from '../../shared/colors/ToolbarPaneColors.js';
  import { ToolbarPaneClasses } from '../../shared/classes/ToolbarPaneClasses.js';
  import { useIosTabbarHighlight } from '../../shared/use-ios-tabbar-highlight.js';
  import Glass from './Glass.svelte';

  let {
    component = 'div',
    class: className,
    ios = undefined,
    material = undefined,
    colors: colorsProp,
    children,
    ...restProps
  } = $props();

  let glassEl = $state(null);
  let el = $derived(glassEl?.el);
  export { el };
  let highlightElRef = $state(null);
  let highlightStyle = $state({
    transform: '',
    width: '',
  });
  const highlightData = {};
  let highlightInnerRef = $state(null);
  let highlightThumbRef = $state(null);
  let hasTabbarLinks = $state(false);

  const theme = $derived(useTheme({ ios, material }));

  let ToolbarContext =
    getContext('ToolbarContext') ||
    (() => ({
      value: {
        toolbar: false,
        tabbar: false,
        tabbarLabels: false,
        tabbarIcons: false,
        activeTabbarEl: undefined,
      },
    }));

  const { tabbar, activeTabbarEl } = $derived(
    ToolbarContext()?.value || {
      toolbar: false,
      tabbar: false,
      tabbarLabels: false,
      tabbarIcons: false,
      activeTabbarEl: undefined,
    }
  );
  const hasHighlight = $derived(theme === 'ios' && tabbar);

  const dark = useDarkClasses();

  const colors = $derived(ToolbarPaneColors(colorsProp, dark));
  const c = $derived(
    useThemeClasses(
      { ios, material },
      ToolbarPaneClasses({ tabbar }, colors, dark, className)
    )
  );

  // let eventsAttached = false;

  const { attachEvents, detachEvents, onUpdated } = useIosTabbarHighlight({
    getEl: () => {
      return glassEl?.el;
    },
    getHighlightEl: () => highlightElRef,
    getHighlightInnerEl: () => highlightInnerRef,
    getHighlightThumbEl: () => highlightThumbRef,
    getHasHighlight: () => hasHighlight,
    data: highlightData,
    getHasTabbarLinks: () => hasTabbarLinks,
    setHasTabbarLinks: (value) => {
      hasTabbarLinks = value;
    },
    // svelte-ignore state_referenced_locally
    classes: c,
    getHighlightStyle: () => highlightStyle,
    setHighlightStyle: ({ width, transform }) => {
      highlightStyle.width = width;
      highlightStyle.transform = transform;
    },
  });

  onMount(() => {
    requestAnimationFrame(() => {
      attachEvents();
    });
  });

  $effect(() => {
    activeTabbarEl;
    onUpdated();
  });

  onDestroy(() => {
    detachEvents();
  });
</script>

{#if theme === 'material'}
  {@render children?.()}
{:else}
  <Glass {component} bind:this={glassEl} class={c.base} {...restProps}>
    {@render children?.()}
    {#if hasHighlight}
      <span
        bind:this={highlightElRef}
        class={c.highlight}
        style:width={highlightStyle.width}
        style:transform={highlightStyle.transform}
      >
        <span bind:this={highlightInnerRef} class={c.highlightInner}></span>
        <span bind:this={highlightThumbRef} class={c.highlightThumb}></span>
      </span>
    {/if}
  </Glass>
{/if}
