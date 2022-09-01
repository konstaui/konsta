<script>
  import { CardClasses } from '../../shared/classes/CardClasses.js';
  import { CardColors } from '../../shared/colors/CardColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export let component = 'div';
  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let margin = 'm-4';
  export let header = '';
  export let footer = '';
  export let contentWrap = true;
  export let contentWrapPadding = 'p-4';
  export let raised = undefined;
  export let raisedIos = undefined;
  export let raisedMaterial = undefined;
  export let outline = undefined;
  export let outlineIos = undefined;
  export let outlineMaterial = undefined;
  export let headerDivider = false;
  export let footerDivider = false;

  const dark = useDarkClasses();

  let theme;
  theme = useTheme({}, (v) => (theme = v));

  $: isOutline =
    typeof outline === 'undefined'
      ? theme === 'ios'
        ? outlineIos
        : outlineMaterial
      : outline;

  $: isRaised =
    typeof raised === 'undefined'
      ? theme === 'ios'
        ? raisedIos
        : raisedMaterial
      : raised;

  $: colors = CardColors(colorsProp, dark);

  $: style = isOutline ? 'outline' : isRaised ? 'raised' : 'plain';

  $: c = useThemeClasses(
    { ios, material },
    CardClasses(
      {
        margin,
        outline: isOutline,
        raised: isRaised,
        contentWrapPadding,
        headerDivider,
        footerDivider,
      },
      colors,
      dark
    ),
    className,
    (v) => (c = v)
  );
</script>

{#if typeof component === 'string'}
  <svelte:element this={component} class={c.base[style]} {...$$restProps}>
    {#if header || $$slots.header}
      <div class={c.header}>{header}<slot name="header" /></div>
    {/if}
    {#if contentWrap}
      <div class={c.content}><slot /></div>
    {:else}
      <slot />
    {/if}
    {#if footer || $$slots.footer}
      <div class={c.footer}>{footer}<slot name="footer" /></div>
    {/if}
  </svelte:element>
{:else}
  <svelte:component this={component} class={c.base[style]} {...$$restProps}>
    {#if header || $$slots.header}
      <div class={c.header}>{header}<slot name="header" /></div>
    {/if}
    {#if contentWrap}
      <div class={c.content}><slot /></div>
    {:else}
      <slot />
    {/if}
    {#if footer || $$slots.footer}
      <div class={c.footer}>{footer}<slot name="footer" /></div>
    {/if}
  </svelte:component>
{/if}
