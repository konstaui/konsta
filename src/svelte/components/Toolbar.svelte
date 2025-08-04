<script>
  import { onMount, afterUpdate } from 'svelte';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { ToolbarClasses } from '../../shared/classes/ToolbarClasses.js';
  import { ToolbarColors } from '../../shared/colors/ToolbarColors.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;


  export let bgClass = '';
  export let innerClass = '';

  export let outline = undefined;

  export let tabbar = false;
  export let tabbarLabels = false;
  export let tabbarIcons = false;

  export let top = false;

  let highlightElRef = null;

  let theme;
  theme = useTheme({ ios, material }, (v) => (theme = v));

  let highlightStyle = {
    transform: '',
    width: '',
  };

  $: isOutline = typeof outline === 'undefined' ? theme === 'ios' : outline;

  $: hasHighlight = theme === 'material' && tabbar && !tabbarIcons;

  const setHighlight = () => {
    if (hasHighlight && highlightElRef) {
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
        highlightStyle = {
          ...highlightStyle,
          width,
          transform,
        };
      }
    }
  };
  onMount(() => setHighlight());
  afterUpdate(() => setHighlight());

  const dark = useDarkClasses();

  $: colors = ToolbarColors(colorsProp, dark);

  $: c = useThemeClasses(
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
      colors,
    ),
    className,
    (v) => (c = v)
  );
</script>

<div class={c.base} {...$$restProps}>
  <div class={c.bg}></div>
  <div class={c.inner}>
    <slot />
  </div>
  {#if hasHighlight}
    <span
      class={c.highlight}
      style={`width: ${highlightStyle.width} ; transform: ${highlightStyle.transform}`}
      bind:this={highlightElRef}
    ></span>
  {/if}
</div>
