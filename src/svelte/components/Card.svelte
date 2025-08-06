<script>
  import { CardClasses } from '../../shared/classes/CardClasses.js';
  import { CardColors } from '../../shared/colors/CardColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let {
    component = 'div',
    class: className,
    colors: colorsProp,

    ios = undefined,
    material = undefined,

    header = '',
    footer = '',
    contentWrap = true,
    contentWrapPadding = 'p-4',
    raised = undefined,
    raisedIos = undefined,
    raisedMaterial = undefined,
    outline = undefined,
    outlineIos = undefined,
    outlineMaterial = undefined,
    headerDivider = false,
    footerDivider = false,

    children,

    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const dark = useDarkClasses();

  const theme = $derived(useTheme({ ios, material }));

  const isOutline = $derived(
    typeof outline === 'undefined'
      ? theme === 'ios'
        ? outlineIos
        : outlineMaterial
      : outline
  );

  const isRaised = $derived(
    typeof raised === 'undefined'
      ? theme === 'ios'
        ? raisedIos
        : raisedMaterial
      : raised
  );

  const colors = $derived(CardColors(colorsProp, dark));

  const style = $derived(isOutline ? 'outline' : isRaised ? 'raised' : 'plain');

  const c = $derived(
    useThemeClasses(
      { ios, material },
      CardClasses(
        {
          outline: isOutline,
          raised: isRaised,
          contentWrapPadding,
          headerDivider,
          footerDivider,
        },
        colors,
        dark
      ),
      className
    )
  );
</script>

{#if typeof component === 'string'}
  <svelte:element
    this={component}
    bind:this={el}
    class={c.base[style]}
    {...restProps}
  >
    {#if header}
      <div class={c.header}>{@render header()}</div>
    {/if}
    {#if contentWrap}
      <div class={c.content}>{@render children?.()}</div>
    {:else}
      {@render children?.()}
    {/if}
    {#if footer}
      <div class={c.footer}>{@render footer()}</div>
    {/if}
  </svelte:element>
{:else}
  {@const Component = component}
  <Component bind:this={el} class={c.base[style]} {...restProps}>
    {#if header}
      <div class={c.header}>{@render header()}</div>
    {/if}
    {#if contentWrap}
      <div class={c.content}>{@render children?.()}</div>
    {:else}
      {@render children?.()}
    {/if}
    {#if footer}
      <div class={c.footer}>{@render footer()}</div>
    {/if}
  </Component>
{/if}
