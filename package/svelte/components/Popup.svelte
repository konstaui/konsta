<script>
  import { cls } from '../../shared/esm/cls.js';
  import { PopupClasses } from '../../shared/esm/classes/PopupClasses.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let size = 'w-screen h-screen md:w-160 md:h-160';
  export let opened = false;
  export let backdrop = true;
  export let onBackdropClick = undefined;

  $: state = opened ? 'opened' : 'closed';

  const dark = useDarkClasses();

  $: colors = {
    bg: cls('bg-white', dark('dark:bg-black')),
    ...colorsProp,
  };

  $: c = useThemeClasses(
    { ios, material },
    PopupClasses({ size }, colors, className),
    className,
    (v) => (c = v)
  );
</script>

{#if backdrop}
  <div class={c.backdrop[state]} on:click={onBackdropClick} />
{/if}
<div class={c.base[state]} {...$$restProps}>
  <slot />
</div>
