<script>
  import { PageClasses } from '../../shared/classes/PageClasses.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };

  export let ios = undefined;
  export let material = undefined;

  const dark = useDarkClasses();

  $: c = useThemeClasses(
    { ios, material },
    PageClasses({}, className, dark),
    className,
    (v) => (c = v)
  );
</script>

<div class={c.base} {...$$restProps}>
  <slot />
</div>
