<script>
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import { ListButtonClasses } from '../../shared/classes/ListButtonClasses.js';
  import { ListButtonColors } from '../../shared/colors/ListButtonColors.js';
  import { useTheme } from '../shared/use-theme.js';

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

  export let linkComponent = 'a';

  const rippleEl = { current: null };

  let theme;
  theme = useTheme({ ios, material }, (v) => (theme = v));

  $: useTouchRipple(rippleEl, touchRipple);

  const dark = useDarkClasses();

  $: colors = ListButtonColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    ListButtonClasses({ hairlines }, colors, className, theme),
    className,
    (v) => (c = v)
  );

  $: isLink = !!href || href === '';
  $: hrefComputed =
    !isLink || href === true || href === false ? undefined : href || '';
  $: buttonAttrs = { href: hrefComputed, target, type, value, ...linkProps };

  const ButtonComponent = isLink ? linkComponent : 'button';
</script>

<li class={c.base} {...$$restProps}>
  {#if typeof ButtonComponent === 'string'}
    <!-- svelte-ignore a11y-missing-attribute -->
    <svelte:element
      this={ButtonComponent}
      bind:this={rippleEl.current}
      class={c.button}
      {...buttonAttrs}
    >
      <slot />
    </svelte:element>
  {:else}
    <svelte:component
      this={ButtonComponent}
      bind:this={rippleEl.current}
      class={c.button}
      {...buttonAttrs}
    >
      <slot />
    </svelte:component>
  {/if}
</li>
