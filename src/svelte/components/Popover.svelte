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
  import Glass from './Glass.svelte';

  let {
    class: className,
    colors: colorsProp,

    ios = undefined,
    material = undefined,
    style = '',

    angle = false,
    angleClass = '',
    opened = false,
    backdrop = true,
    onBackdropClick = undefined,
    target = undefined,
    targetX = undefined,
    targetY = undefined,
    targetWidth = undefined,
    targetHeight = undefined,

    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  let angleEl = $state(null);

  let positions = $state({
    set: false,
    angleTop: 0,
    angleLeft: 0,
    anglePosition: 'bottom',
    popoverTop: 0,
    popoverLeft: 0,
    popoverPosition: 'top-left',
  });

  const state = $derived(opened ? 'opened' : 'closed');

  const theme = $derived(useTheme({ ios, material }));

  const dark = useDarkClasses();

  const colors = $derived(PopoverColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      PopoverClasses({ angleClass }, colors, dark),
      className
    )
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

  $effect(() => watchOpened(opened));

  const popoverStyle = $derived(
    positions.set
      ? `
        ${style || ''};
        left: ${positions.popoverLeft};
        top: ${positions.popoverTop};
      `
      : style || ''
  );

  const angleStyle = $derived(
    positions.set
      ? `
        left: ${positions.angleLeft};
        top: ${positions.angleTop};
      `
      : undefined
  );

  const originClasses = {
    'top-right': 'origin-bottom-left',
    'top-left': 'origin-bottom-right',
    'middle-left': 'origin-right',
    'middle-right': 'origin-left',
    'bottom-right': 'origin-top-left',
    'bottom-left': 'origin-top-right',
  };
  const classes = $derived(
    cls(
      c.base[state],
      theme === 'material' && originClasses[positions.popoverPosition]
    )
  );
</script>

{#if backdrop}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class={c.backdrop[state]} onclick={onBackdropClick}></div>
{/if}
<div bind:this={el} class={classes} style={popoverStyle} {...restProps}>
  {#if angle}
    <div
      bind:this={angleEl}
      style={angleStyle}
      class={c.angleWrap[positions.anglePosition]}
    >
      <div class={c.angleArrow[positions.anglePosition]}></div>
    </div>
  {/if}
  <Glass class={c.inner[state]}>
    {@render children?.()}
  </Glass>
</div>
