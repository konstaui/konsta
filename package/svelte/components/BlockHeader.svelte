<script>
  import { BlockHeaderClasses } from '../../shared/esm/classes/BlockHeaderClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  export let ios = undefined;
  export let material = undefined;

  $: c = useThemeClasses(
    { ios, material },
    BlockHeaderClasses(),
    className,
    (v) => (c = v)
  );
</script>

<div class={c.base} {...$$restProps}>
  <slot />
</div>
