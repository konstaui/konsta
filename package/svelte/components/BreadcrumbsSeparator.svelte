<script>
  import { BreadcrumbsSeparatorClasses } from '../../shared/esm/classes/BreadcrumbsSeparatorClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  import ChevronIcon from './icons/ChevronIcon.svelte';

  let className = undefined;
  export { className as class };
  export let ios = undefined;
  export let material = undefined;

  $: c = useThemeClasses(
    { ios, material },
    BreadcrumbsSeparatorClasses({}),
    className,
    (v) => (c = v)
  );
</script>

<div class={c.base} {...$$restProps}>
  <ChevronIcon class={c.icon} />
  <slot />
</div>
