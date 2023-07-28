<script>
  import { NotificationsClasses } from '../../shared/classes/NotificationsClasses.js';
  import { NotificationsColors } from '../../shared/colors/NotificationsColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { printText } from '../shared/print-text.js';
  import { useTheme } from '../shared/use-theme.js';

  import DeleteIcon from './icons/DeleteIcon.svelte';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;
  export let onClick = undefined;
  export let onClose = undefined;

  export let button = undefined;
  export let title = '';
  export let titleRightText = '';
  export let subtitle = '';
  export let text = '';

  export let opened = false;
  export let iconSize = undefined;

  const dark = useDarkClasses();
  let theme;
  theme = useTheme({}, (v) => (theme = v));

  $: colors = NotificationsColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    NotificationsClasses({ opened, iconSize }, colors, className),
    className,
    (v) => (c = v)
  );
</script>

<div class={c.base} {...$$restProps} on:click={onClick}>
  <div class={c.header}>
    {#if $$slots.icon}
      <div class={c.icon}><slot name="icon" /></div>
    {/if}
    {#if title || $$slots.title}
      <div class={c.title}>{printText(title)}<slot name="title" /></div>
    {/if}
    {#if titleRightText || $$slots.titleRightText}
      <div class={c.titleRightText}>{printText(titleRightText)}<slot name="titleRightText" /></div>
    {/if}
    {#if button || $$slots.button}
      <div class={c.button} on:click={onClose}>
        <DeleteIcon {theme} class={c.deleteIcon}/>
        <slot name="button" /></div>
    {/if}
  </div>
  <div class={c.content}>
    {#if subtitle || $$slots.subtitle}
    <div class={c.subtitle}>{printText(subtitle)}<slot name="subtitle" /></div>
    {/if}
    {#if text || $$slots.text}
    <div class={c.text}>{printText(text)}<slot name="text" /></div>
    {/if}
    <slot />
  </div>
</div>

