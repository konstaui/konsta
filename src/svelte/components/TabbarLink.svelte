<script>
  import { TabbarLinkClasses } from '../../shared/classes/TabbarLinkClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  import Link from './Link.svelte';

  let className = undefined;
  export { className as class };
  export let ios = undefined;
  export let material = undefined;

  export let active = false;
  export let label = undefined;

  export let withIcon = false;

  $: c = useThemeClasses(
    { ios, material },
    TabbarLinkClasses(),
    '',
    (v) => (c = v)
  );
</script>

<Link tabbar tabbarActive={active} class={className} {...$$restProps}>
  {#if withIcon}
    <span class={c.content}>
      <span class={c.icon}><slot name="icon" /></span>
      {#if label}
        <span class={c.label}>{label}</span>
      {/if}
    </span>
  {:else}
    {label}
    <slot />
  {/if}
</Link>
