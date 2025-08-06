<script>
  import { onMount, setContext, onDestroy } from 'svelte';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { ToolbarClasses } from '../../shared/classes/ToolbarClasses.js';
  import { ToolbarColors } from '../../shared/colors/ToolbarColors.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,

    bgClass = '',
    innerClass = '',

    outline = undefined,

    tabbar = false,
    tabbarLabels = false,
    tabbarIcons = false,

    top = false,

    children,
    ...restProps
  } = $props();

  let highlightElRef = $state(null);
  let innerEl = $state(null);
  let observer = null;

  const theme = $derived(useTheme({ ios, material }));

  let activeTabbarEl = $state(null);

  setContext('ToolbarContext', () => ({
    value: {
      toolbar: true,
      tabbar,
      tabbarLabels,
      tabbarIcons,
      activeTabbarEl,
      setActiveTabbarEl: (el) => {
        activeTabbarEl = el;
      },
    },
  }));

  let highlightStyle = $state({
    transform: '',
    width: '',
  });

  const isOutline = $derived(
    typeof outline === 'undefined' ? theme === 'ios' : outline
  );

  const hasHighlight = $derived(theme === 'material' && tabbar && !tabbarIcons);

  const setHighlight = () => {
    if (hasHighlight && highlightElRef && theme === 'material') {
      const linksEl = highlightElRef.previousElementSibling;
      const activeIndex = [...linksEl.children].indexOf(
        linksEl.querySelector('.k-tabbar-link-active')
      );
      const width = `${(1 / linksEl.children.length) * 100}%`;
      const transform = `translateX(${activeIndex * 100}%)`;

      if (
        width !== highlightStyle.width ||
        transform !== highlightStyle.transform
      ) {
        highlightStyle.width = width;
        highlightStyle.transform = transform;
      }
    }
  };

  $effect(() => {
    activeTabbarEl;
    setHighlight();
  });

  onMount(() => {
    setHighlight();
  });

  const dark = useDarkClasses();

  const colors = $derived(ToolbarColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      ToolbarClasses(
        {
          outline: isOutline,
          bgClass,
          innerClass,
          tabbar,
          top,
          tabbarIcons,
          tabbarLabels,
        },
        colors
      ),
      className
    )
  );
</script>

<div class={c.base} {...restProps}>
  <div class={c.bg}></div>
  <div class={c.inner} bind:this={innerEl}>
    {@render children?.()}
  </div>
  {#if hasHighlight}
    <span
      class={c.highlight}
      style={`width: ${highlightStyle.width} ; transform: ${highlightStyle.transform}`}
      bind:this={highlightElRef}
    ></span>
  {/if}
</div>
