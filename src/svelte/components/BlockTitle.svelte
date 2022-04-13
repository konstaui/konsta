<script>
  import { BlockTitleClasses } from '../../shared/classes/BlockTitleClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  export let ios = undefined;
  export let material = undefined;

  export let withBlock = true;

  $: c = useThemeClasses(
    { ios, material },
    BlockTitleClasses({ withBlock }),
    className,
    (v) => (c = v)
  );
</script>

<div class={c.base} {...$$restProps}>
  <slot />
</div>
