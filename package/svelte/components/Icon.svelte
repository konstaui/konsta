<script>
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import Badge from './Badge.svelte';
  import { IconClasses } from '../../shared/esm/classes/IconClasses.js';

  let className = undefined;
  export { className as class };
  export let ios = undefined;
  export let material = undefined;

  export let badge = '';
  export let badgeColors = undefined;

  let theme;
  theme = useTheme({}, (v) => (theme = v));

  $: c = useThemeClasses(
    {},
    IconClasses({}, className),
    className,
    (v) => (c = v)
  );
</script>

<i class={c.base} {...$$restProps}>
  {#if theme === 'ios'}
    {ios || ''}
    <slot name="ios" />
  {:else}
    {material || ''}
    <slot name="material" />
  {/if}

  {#if typeof badge !== 'undefined' && badge !== null && badge !== ''}
    <Badge small class={c.badge} colors={badgeColors}>
      {badge}
    </Badge>
  {/if}
  <slot />
</i>
