<script>
  import { CardClasses } from '../../shared/classes/CardClasses.js';
  import { CardColors } from '../../shared/colors/CardColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let margin = 'm-4';
  export let header = '';
  export let footer = '';
  export let outline = false;

  const dark = useDarkClasses();

  $: colors = CardColors(colorsProp, dark);

  $: style = outline ? 'outline' : 'shadow';

  $: c = useThemeClasses(
    { ios, material },
    CardClasses({ margin, outline }, colors, dark),
    className,
    (v) => (c = v)
  );
</script>

<div class={c.base[style]} {...$$restProps}>
  {#if header || $$slots.header}
    <div class={c.header}>{header}<slot name="header" /></div>
  {/if}
  <div class={c.content}><slot /></div>
  {#if footer || $$slots.footer}
    <div class={c.footer}>{footer}<slot name="footer" /></div>
  {/if}
</div>
