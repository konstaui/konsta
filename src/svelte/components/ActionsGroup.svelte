<script>
  import { ActionsGroupClasses } from '../../shared/classes/ActionsGroupClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  export let ios = undefined;
  export let material = undefined;

  export let dividers = true;

  $: c = useThemeClasses(
    { ios, material },
    ActionsGroupClasses({ dividers }),
    className,
    (v) => (c = v)
  );
</script>

<div class={c.base} {...$$restProps}>
  <slot />
</div>
