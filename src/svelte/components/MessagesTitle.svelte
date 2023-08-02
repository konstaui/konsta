<script>
  import { MessagesTitleClasses } from '../../shared/classes/MessagesTitleClasses.js';
  import { MessagesTitleColors } from '../../shared/colors/MessagesTitleColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let component = 'div';
  export let id = undefined;

  const rippleEl = { current: null };

  const dark = useDarkClasses();

  $: colors = MessagesTitleColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    MessagesTitleClasses({}, colors, className),
    className,
    (v) => (c = v)
  );
</script>

<svelte:element
  this={component}
  id={id}
  bind:this={rippleEl.current}
  class={c.base}
  {...$$restProps}
>
  <slot />
</svelte:element>
