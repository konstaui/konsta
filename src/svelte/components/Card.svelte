<script>
  import { CardClasses } from '../../shared/classes/CardClasses.js';
  import { cls } from '../../shared/cls.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let margin = 'm-4';
  export let header = undefined;
  export let footer = undefined;
  export let outline = false;

  const dark = useDarkClasses();

  $: colors = {
    bg: cls(`bg-block-strong-light`, dark('dark:bg-block-strong-dark')),
    footerText: cls(`text-black`, dark('dark:text-white')),
    ...colorsProp,
  };

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
