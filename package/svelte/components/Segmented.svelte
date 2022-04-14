<script>
  import { cls } from '../../shared/esm/cls.js';
  import { SegmentedClasses } from '../../shared/classes/SegmentedClasses.js';
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

  export let activeButtonIndex = undefined;
  export let childButtonsLength = undefined;

  const dark = useDarkClasses();

  $: colors = {
    border: 'border-primary',
    divide: 'divide-primary',
    ...colorsProp,
  };

  $: c = useThemeClasses(
    { ios, material },
    SegmentedClasses({ outline, rounded }, colors, dark),
    '',
    (v) => (c = v)
  );

  let highlightWidth;
  let highlightTranslate;

  $: if (strong) {
    let buttonsLength = childButtonsLength;
    let activeIndex = activeButtonIndex;
    /*
    if (
      typeof activeIndex === 'undefined' &&
      children &&
      (children.length || children.type === React.Fragment)
    ) {
      const elements =
        children.type === React.Fragment ? children.props.children : children;
      if (typeof buttonsLength === 'undefined') {
        buttonsLength = elements.length || 0;
      }
      const activeButton = elements.filter(
        (child) =>
          child.props && (child.props.active || child.props.segmentedActive)
      )[0];
      activeIndex = elements.indexOf(activeButton);
    }
    */

    const between = '4px';
    const padding = '2px';
    highlightWidth = `calc((100% - ${padding} * 2 - ${between} * (${
      buttonsLength - 1
    })) / ${buttonsLength})`;
    highlightTranslate = `calc(${
      activeIndex * 100
    }% + ${activeIndex} * ${between})`;
  }

  $: classes = cls(
    // base
    rounded ? c.base.rounded : c.base.square,
    raised && c.raised,
    outline && c.outline,
    strong && c.strong,

    className
  );
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
      class={c.strongHighlight}
      style={`
        width: ${highlightWidth};
        transform: translateX(${highlightTranslate});
      `}
    />
  {/if}
</div>
