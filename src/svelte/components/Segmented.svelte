<script>
  import { onMount } from 'svelte';
  import { cls } from '../../shared/cls.js';
  import { SegmentedClasses } from '../../shared/classes/SegmentedClasses.js';
  import { SegmentedColors } from '../../shared/colors/SegmentedColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,

    raised = false,
    outline = false,
    strong = false,
    rounded = false,

    children,
    ...restProps
  } = $props();

  let highlightElRef = $state(null);

  const dark = useDarkClasses();

  const colors = $derived(SegmentedColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      SegmentedClasses({ outline, rounded }, colors, dark),
      ''
    )
  );

  let highlightStyle = $state({
    transform: '',
    width: '',
  });

  const classes = $derived(
    cls(
      // base
      rounded ? c.base.rounded : c.base.square,
      raised && c.raised,
      outline && c.outline,
      strong && c.strong,

      className
    )
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
        highlightStyle.width = width;
        highlightStyle.transform = transform;
      }
    }
  };

  onMount(() => setHighlight());

  $effect(() => {
    setHighlight();
  });
</script>

<div class={classes} {...restProps}>
  {#if outline}
    <span class={c.outlineInner}>
      {@render children?.()}
    </span>
  {:else}
    {@render children?.()}
  {/if}
  {#if strong}
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
