<script>
  /* eslint-disable no-restricted-globals */
  import { onDestroy, onMount } from 'svelte';
  import { cls } from '../../shared/cls.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';
  import { calcPopoverPosition } from '../../shared/calc-popover-position.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { PopoverClasses } from '../../shared/classes/PopoverClasses.js';
  import { PopoverColors } from '../../shared/colors/PopoverColors.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;
  export let style = '';

  export let angle = true;
  export let angleClass = '';
  export let size = 'w-64';
  export let opened = false;
  export let backdrop = true;
  export let onBackdropClick = undefined;
  export let target = undefined;
  export let targetX = undefined;
  export let targetY = undefined;
  export let targetWidth = undefined;
  export let targetHeight = undefined;
  export let translucent = true;

  let el;
  let angleEl;

  let positions = {
    set: false,
    angleTop: 0,
    angleLeft: 0,
    anglePosition: 'bottom',
    popoverTop: 0,
    popoverLeft: 0,
    popoverPosition: 'top-left',
  };

  $: state = opened ? 'opened' : 'closed';

  let theme;
  theme = useTheme({ ios, material }, (v) => (theme = v));

  const dark = useDarkClasses();

  $: colors = PopoverColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    PopoverClasses({ size, angleClass, translucent }, colors, className),
    className,
    (v) => (c = v)
  );

  const setPopover = () => {
    if (!target || !el || !opened) return;
    positions = calcPopoverPosition({
      popoverEl: el,
      targetEl: target,
      angleEl: angleEl,
      needsAngle: angle,
      targetX,
      targetY,
      targetWidth,
      targetHeight,
      theme,
    });
  };

  const attachEvents = () => {
    if (typeof window === 'undefined') return;
    window.addEventListener('resize', setPopover);
  };

  const detachEvents = () => {
    if (typeof window === 'undefined') return;
    window.removeEventListener('resize', setPopover);
  };

  onMount(() => {
    attachEvents();
  });
  onDestroy(() => {
    detachEvents();
  });

  function watchOpened(openedPassed) {
    setPopover();
  }

  $: watchOpened(opened);

  $: popoverStyle = positions.set
    ? `
        ${style || ''};
        left: ${positions.popoverLeft};
        top: ${positions.popoverTop};
      `
    : style || '';

  $: angleStyle = positions.set
    ? `
        left: ${positions.angleLeft};
        top: ${positions.angleTop};
      `
    : undefined;

  const originClasses = {
    'top-right': 'origin-bottom-left',
    'top-left': 'origin-bottom-right',
    'middle-left': 'origin-right',
    'middle-right': 'origin-left',
    'bottom-right': 'origin-top-left',
    'bottom-left': 'origin-top-right',
  };
  $: classes = cls(
    c.base[state],
    theme === 'material' && originClasses[positions.popoverPosition]
  );
</script>

{#if backdrop}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class={c.backdrop[state]} on:click={onBackdropClick}></div>
{/if}
<div bind:this={el} class={classes} style={popoverStyle} {...$$restProps}>
  {#if angle}
    <div
      bind:this={angleEl}
      style={angleStyle}
      class={c.angleWrap[positions.anglePosition]}
    >
      <div class={c.angleArrow[positions.anglePosition]}></div>
    </div>
  {/if}
  <div class={c.inner}>
    <slot />
  </div>
</div>
