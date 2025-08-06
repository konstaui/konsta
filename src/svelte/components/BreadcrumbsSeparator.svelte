<script>
  import { BreadcrumbsSeparatorClasses } from '../../shared/classes/BreadcrumbsSeparatorClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  import ChevronIcon from './icons/ChevronIcon.svelte';

  let {
    class: className,
    ios = undefined,
    material = undefined,
    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const c = $derived(
    useThemeClasses(
      { ios, material },
      BreadcrumbsSeparatorClasses({}),
      className
    )
  );
</script>

<div bind:this={el} class={c.base} {...restProps}>
  <ChevronIcon class={c.icon} />
  {@render children?.()}
</div>
