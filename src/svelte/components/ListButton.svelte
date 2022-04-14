<script>
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import { ListButtonClasses } from '../../shared/classes/ListButtonClasses.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let hairlines = true;

  // Link props
  export let href = undefined;
  export let target = undefined;

  // Button props
  export let type = undefined;
  export let value = undefined;

  export let linkProps = {};

  export let touchRipple = true;

  const rippleEl = { current: null };

  useTouchRipple(rippleElRef, touchRipple);

  $: colors = {
    text: 'text-primary',
    activeBg: 'active:bg-primary',
    touchRipple: 'touch-ripple-primary',
    ...colorsProp,
  };

  $: c = useThemeClasses(
    { ios, material },
    ListButtonClasses({ hairlines }, colors, className),
    className,
    (v) => (c = v)
  );

  $: isLink = !!href || href === '';
  $: hrefComputed =
    !isLink || href === true || href === false ? undefined : href || '';
  $: buttonAttrs = { href: hrefComputed, target, type, value, ...linkProps };

  const ButtonComponent = isLink ? 'a' : 'button';
</script>

<li class={c.base} {...$$restProps}>
  {#if ButtonComponent === 'a'}
    <!-- svelte-ignore a11y-missing-attribute -->
    <a bind:this={rippleEl.current} class={c.button} {...buttonAttrs}>
      <slot />
    </a>
  {:else}
    <button bind:this={rippleEl.current} class={c.button} {...buttonAttrs}>
      <slot />
    </button>
  {/if}
</li>
