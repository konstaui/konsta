<script>
  import { onMount, afterUpdate } from 'svelte';
  import { cls } from '../../shared/cls.js';
  import { SegmentedClasses } from '../../shared/classes/SegmentedClasses.js';
  import { SegmentedColors } from '../../shared/colors/SegmentedColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  // Style props
  export let raised = false;
  export let outline = false;
  export let strong = false;
  export let rounded = false;

  let highlightElRef = null;

  const dark = useDarkClasses();

  $: colors = SegmentedColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    SegmentedClasses({ outline, rounded }, colors, dark),
    '',
    (v) => (c = v)
  );

  let highlightStyle = {
    transform: '',
    width: '',
  };

  $: classes = cls(
    // base
    rounded ? c.base.rounded : c.base.square,
    raised && c.raised,
    outline && c.outline,
    strong && c.strong,

    className
  );

  const setHighlight = () => {
    if (strong && highlightElRef) {
      const buttonsEl = highlightElRef.parentElement;
      const buttonsLength = buttonsEl.children.length - 1;
      const activeIndex = [...buttonsEl.children].indexOf(
        buttonsEl.querySelector('.k-segmented-strong-button-active')
      );

      const between = '4px';
      const padding = '2px';

      const width = `calc((100% - ${padding} * 2 - ${between} * (${buttonsLength} - 1)) / ${buttonsLength})`;
      const transform = `translateX(calc((${activeIndex} * 100% + ${activeIndex} * ${between}) * var(--k-rtl-reverse)))`;

      if (
        width !== highlightStyle.width ||
        transform !== highlightStyle.transform
      ) {
        highlightStyle = {
          width,
          transform,
        };
      }
    }
  };
  onMount(() => setHighlight());
  afterUpdate(() => setHighlight());
</script>

<div class={classes} {...$$restProps}>
  {#if outline}
    <span class={c.outlineInner}>
      <slot />
    </span>
  {:else}
    <slot />
  {/if}
  {#if strong}
    <span
      bind:this={highlightElRef}
      class={c.strongHighlight}
      style={`
        width: ${highlightStyle.width};
        transform: ${highlightStyle.transform};
      `}
    />
  {/if}
</div>
