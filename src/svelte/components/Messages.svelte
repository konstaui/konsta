<script>
  import { MessagesClasses } from '../../shared/classes/MessagesClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  export let ios = undefined;
  export let material = undefined;

  export let component = 'div';
  export let id = undefined;
  const rippleEl = { current: null };

  $: c = useThemeClasses(
    { ios, material },
    MessagesClasses({}, className),
    className,
    (v) => (c = v)
  );
</script>

<svelte:element
  this={component}
  {id}
  bind:this={rippleEl.current}
  class={c.base}
  {...$$restProps}
>
  <slot />
</svelte:element>
