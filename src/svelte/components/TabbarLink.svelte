<script>
  import { TabbarLinkClasses } from '../../shared/classes/TabbarLinkClasses.js';
  import { TabbarLinkColors } from '../../shared/colors/TabbarLinkColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  import Link from './Link.svelte';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

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

<Link tabbar tabbarActive={active} class={className} {...$$restProps}>
  <span class={c.content}>
    {#if hasIcon}
      <span class={c.iconContainer}>
        <span class={c.iconBg} />
        <slot name="icon" />
      </span>
    {/if}
    {#if hasLabel}
      <span class={c.label}>
        {label}
        <slot name="label" />
        <slot />
      </span>
    {/if}
  </span>
</Link>
