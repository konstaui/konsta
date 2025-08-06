<script>
  import { TabbarLinkClasses } from '../../shared/classes/TabbarLinkClasses.js';
  import { TabbarLinkColors } from '../../shared/colors/TabbarLinkColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { printText } from '../shared/print-text.js';

  import Link from './Link.svelte';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    linkProps = {},
    active = false,
    label = undefined,

    children,
    icon,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const dark = useDarkClasses();
  const colors = $derived(TabbarLinkColors(colorsProp, dark));

  const hasIcon = $derived(!!icon);
  const hasLabel = $derived(label || label || children);

  const c = $derived(
    useThemeClasses(
      { ios, material },
      TabbarLinkClasses({ hasLabel, hasIcon, active }, colors),
      ''
    )
  );
</script>

<Link
  bind:this={el}
  tabbar
  tabbarActive={active}
  class={className}
  {...restProps}
  {...linkProps}
>
  <span class={c.content}>
    {#if hasIcon}
      <span class={c.iconContainer}>
        <span class={c.iconBg}></span>
        {@render icon()}
      </span>
    {/if}
    {#if hasLabel}
      <span class={c.label}>
        {#if label}
          {#if typeof label !== 'function'}
            {printText(label)}
          {:else}
            {@render label()}
          {/if}
        {:else}
          {@render children?.()}
        {/if}
      </span>
    {/if}
  </span>
</Link>
