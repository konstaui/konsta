<script>
  import { ActionsGroupClasses } from '../../shared/classes/ActionsGroupClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  export let ios = undefined;
  export let material = undefined;

  export let hairlines = true;

  $: c = useThemeClasses(
    { ios, material },
    ActionsGroupClasses({ hairlines }),
    className,
    (v) => (c = v)
  );
</script>

<div class={c.base} {...$$restProps}>
  <slot />
</div>
