<script>
  import { TabbarLinkClasses } from '../../shared/classes/TabbarLinkClasses.js';
  import { TabbarLinkColors } from '../../shared/colors/TabbarLinkColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { printText } from '../shared/print-text.js';

  import Link from './Link.svelte';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;
  export let linkProps = {};

  export let active = false;
  export let label = undefined;

  const dark = useDarkClasses();

  $: colors = TabbarLinkColors(colorsProp, dark);

  $: hasIcon = $$slots.icon;
  $: hasLabel = label || $$slots.label || $$slots.default;

  $: c = useThemeClasses(
    { ios, material },
    TabbarLinkClasses({ hasLabel, hasIcon, active }, colors),
    '',
    (v) => (c = v)
  );
</script>

<Link
  tabbar
  tabbarActive={active}
  class={className}
  {...$$restProps}
  {...linkProps}
>
  <span class={c.content}>
    {#if hasIcon}
      <span class={c.iconContainer}>
        <span class={c.iconBg} />
        <slot name="icon" />
      </span>
    {/if}
    {#if hasLabel}
      <span class={c.label}>
        {#if $$slots.label}
          <slot name="label" />
        {:else}
          {printText(label)}
          <slot />
        {/if}
      </span>
    {/if}
  </span>
</Link>
