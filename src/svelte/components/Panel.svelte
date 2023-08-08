<script>
  import { cls } from '../../shared/cls.js';
  import { PanelClasses } from '../../shared/classes/PanelClasses.js';
  import { PanelColors } from '../../shared/colors/PanelColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let size = 'w-72 h-screen';
  export let side = 'left';
  export let opened = false;
  export let backdrop = true;
  export let floating = false;
  export let onBackdropClick = undefined;

  $: state = opened ? 'opened' : 'closed';

  const dark = useDarkClasses();

  $: colors = PanelColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    PanelClasses({ size, floating }, colors, className),
    className,
    (v) => (c = v)
  );

  $: classes = cls(c.base, c[side][state]);
</script>

{#if backdrop}
  <div class={c.backdrop[state]} role="none" on:click={onBackdropClick} />
{/if}
<div class={classes} {...$$restProps}>
  <slot />
</div>
