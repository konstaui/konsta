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
  export let translucent = true;
  export let onClick = undefined;
  export let onClose = undefined;

  export let button = undefined;
  export let title = '';
  export let titleRightText = '';
  export let subtitle = '';
  export let text = '';

  export let opened = false;

  const dark = useDarkClasses();
  let theme;
  theme = useTheme({}, (v) => (theme = v));

  $: colors = NotificationsColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    NotificationsClasses({ opened, translucent }, colors, className),
    className,
    (v) => (c = v)
  );
</script>

{#if theme === 'ios'}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class={c.base} {...$$restProps} on:click={onClick}>
    <div class={c.header}>
      {#if $$slots.icon}
        <div class={c.icon}><slot name="icon" /></div>
      {/if}
      {#if title || $$slots.title}
        <div class={c.title}>{printText(title)}<slot name="title" /></div>
      {/if}
      {#if titleRightText || $$slots.titleRightText}
        <div class={c.titleRightText}>
          {printText(titleRightText)}<slot name="titleRightText" />
        </div>
      {/if}
      {#if button || $$slots.button}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class={c.button} role="button" tabindex="0" on:click={onClose}>
          <DeleteIcon {theme} class={c.deleteIcon} />
          <slot name="button" />
        </div>
      {/if}
    </div>
    <div class={c.content}>
      {#if subtitle || $$slots.subtitle}
        <div class={c.subtitle}>
          {printText(subtitle)}<slot name="subtitle" />
        </div>
      {/if}
      {#if text || $$slots.text}
        <div class={c.text}>{printText(text)}<slot name="text" /></div>
      {/if}
      <slot />
    </div>
  </div>
{:else}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class={c.base} {...$$restProps} on:click={onClick}>
    <div class={c.header}>
      {#if $$slots.icon}
        <div class={c.icon}><slot name="icon" /></div>
      {/if}
      <div class={c.contentWrapper}>
        <div class={c.contentTitle}>
          {#if title || $$slots.title}
            <div class={c.title}>{printText(title)}<slot name="title" /></div>
          {/if}
          {#if titleRightText || $$slots.titleRightText}
            <div class={c.titleRightText}>
              {printText(titleRightText)}<slot name="titleRightText" />
            </div>
          {/if}
        </div>
        <div class={c.content}>
          {#if subtitle || $$slots.subtitle}
            <div class={c.subtitle}>
              {printText(subtitle)}<slot name="subtitle" />
            </div>
          {/if}
          {#if text || $$slots.text}
            <div class={c.text}>{printText(text)}<slot name="text" /></div>
          {/if}
          <slot />
        </div>
      </div>
      {#if button || $$slots.button}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class={c.button} role="button" tabindex="0" on:click={onClose}>
          <DeleteIcon {theme} class={c.deleteIcon} />
          <slot name="button" />
        </div>
      {/if}
    </div>
  </div>
{/if}
