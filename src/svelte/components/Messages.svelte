<script>
  import { MessagesClasses } from '../../shared/classes/MessagesClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let {
    class: className,
    ios = undefined,
    material = undefined,
    component = 'div',
    id = undefined,
    children,
    ...restProps
  } = $props();

  const rippleEl = { current: null };

  const c = $derived(
    useThemeClasses(
      { ios, material },
      MessagesClasses({}, className),
      className
    )
  );
</script>

<svelte:element
  this={component}
  {id}
  bind:this={rippleEl.current}
  class={c.base}
  {...restProps}
>
  {@render children?.()}
</svelte:element>
