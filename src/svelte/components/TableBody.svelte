<script>
  import { TableBodyClasses } from '../../shared/classes/TableBodyClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };

  export let ios = undefined;
  export let material = undefined;

  const rippleEl = { current: null };

  $: c = useThemeClasses(
    { ios, material },
    TableBodyClasses({}),
    className,
    (v) => (c = v)
  );
</script>

<tbody bind:this={rippleEl.current} class={c.base} {...$$restProps}>
  <slot />
</tbody>
