<script>
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import Badge from './Badge.svelte';
  import { IconClasses } from '../../shared/classes/IconClasses.js';
  import { printText } from '../shared/print-text.js';

  let {
    class: className,
    badge = '',
    badgeColors = undefined,
    children,
    ios = undefined,
    material = undefined,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const theme = $derived(useTheme({}));

  const c = $derived(useThemeClasses({}, IconClasses(), className));
</script>

<i bind:this={el} class={c.base} {...restProps}>
  {#if theme === 'ios' && ios}
    {@render ios()}
  {:else if theme === 'material' && material}
    {@render material()}
  {/if}

  {#if typeof badge !== 'undefined' && badge !== null && badge !== ''}
    <Badge small class={c.badge} colors={badgeColors}>
      {printText(badge)}
    </Badge>
  {/if}
  {@render children?.()}
</i>
