<script>
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import Badge from './Badge.svelte';
  import { IconClasses } from '../../shared/classes/IconClasses.js';
  import { printText } from '../shared/print-text.js';

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
    IconClasses(),
    className,
    (v) => (c = v)
  );
</script>

<i class={c.base} {...$$restProps}>
  {#if theme === 'ios'}
    {printText(ios || '')}
    <slot name="ios" />
  {:else}
    {printText(material || '')}
    <slot name="material" />
  {/if}

  {#if typeof badge !== 'undefined' && badge !== null && badge !== ''}
    <Badge small class={c.badge} colors={badgeColors}>
      {printText(badge)}
    </Badge>
  {/if}
  <slot />
</i>
