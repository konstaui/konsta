<script>
  import { MessageClasses } from '../../shared/classes/MessageClasses.js';
  import { MessageColors } from '../../shared/colors/MessageColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { printText } from '../shared/print-text.js';
  import { cls } from '../../shared/cls.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let component = 'div';
  export let id = undefined;
  export let text = '';
  export let name = undefined;
  export let type = 'sent';
  export let header = '';
  export let footer = '';
  export let textHeader = '';
  export let textFooter = '';
  export let avatar = undefined;

  const rippleEl = { current: null };

  const dark = useDarkClasses();

  $: colors = MessageColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    MessageClasses({type}, colors),
    className,
    (v) => (c = v)
  );

  $: classes = cls(
    c.message,

    type === 'sent' && c.messageSent,

    type === 'received' && c.messageReceived,

    className
  );
</script>

<svelte:element
  this={component}
  id={id}
  bind:this={rippleEl.current}
  class={classes}
  {...$$restProps}
>
  {#if avatar || $$slots.avatar}
    <div class={c.messageAvatar}>{printText(avatar)}<slot name="avatar" /></div>
  {/if}
  <div class={c.messageContent}>
    {#if name || $$slots.name}
      <div class={c.messageName}>{printText(name)}<slot name="name"/></div>
    {/if}
    {#if header || $$slots.header}
      <div class={c.messageHeader}>{printText(header)}<slot name="header"/></div>
    {/if}
    <div class={c.messageBubble}>
      {#if textHeader || $$slots.textHeader}
        <div class={c.messageTextHeader}>{printText(textHeader)}<slot name="textHeader"/></div>
      {/if}
      {#if text || $$slots.text}
        <div class={c.messageText}>{printText(text)}<slot name="text"/></div>
      {/if}
      {#if textFooter || $$slots.textFooter}
        <div class={c.messageTextFooter}>{printText(textFooter)}<slot name="textFooter"/></div>
      {/if}
    </div>
    {#if footer || $$slots.footer}
      <div class={c.messageFooter}>{printText(footer)}<slot name="footer"/></div>
    {/if}
  </div>
</svelte:element>
