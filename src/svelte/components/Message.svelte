<script>
  import { MessageClasses } from '../../shared/classes/MessageClasses.js';
  import { MessageColors } from '../../shared/colors/MessageColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { printText } from '../shared/print-text.js';
  import { cls } from '../../shared/cls.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    component = 'div',
    id = undefined,
    text = '',
    name = undefined,
    type = 'sent',
    header = '',
    footer = '',
    textHeader = '',
    textFooter = '',
    avatar = undefined,
    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const dark = useDarkClasses();

  const colors = $derived(MessageColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      MessageClasses({ type }, colors),
      className
    )
  );

  const classes = $derived(
    cls(
      c.message,

      type === 'sent' && c.messageSent,

      type === 'received' && c.messageReceived,

      className
    )
  );
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<svelte:element
  this={component}
  {id}
  bind:this={el}
  class={classes}
  {...restProps}
>
  {#if avatar}
    <div class={c.messageAvatar}>
      {#if typeof avatar === 'function'}
        {@render avatar?.()}
      {:else}
        {printText(avatar)}
      {/if}
    </div>
  {/if}
  <div class={c.messageContent}>
    {#if name}
      <div class={c.messageName}>
        {#if typeof name === 'function'}
          {@render name?.()}
        {:else}
          {printText(name)}
        {/if}
      </div>
    {/if}
    {#if header}
      <div class={c.messageHeader}>
        {#if typeof header === 'function'}
          {@render header?.()}
        {:else}
          {printText(header)}
        {/if}
      </div>
    {/if}
    <div class={c.messageBubble}>
      {#if textHeader}
        <div class={c.messageTextHeader}>
          {#if typeof textHeader === 'function'}
            {@render textHeader?.()}
          {:else}
            {printText(textHeader)}
          {/if}
        </div>
      {/if}
      {#if text}
        <div class={c.messageText}>
          {#if typeof text === 'function'}
            {@render text?.()}
          {:else}
            {printText(text)}
          {/if}
        </div>
      {/if}
      {#if textFooter}
        <div class={c.messageTextFooter}>
          {#if typeof textFooter === 'function'}
            {@render textFooter?.()}
          {:else}
            {printText(textFooter)}
          {/if}
        </div>
      {/if}
    </div>
    {#if footer}
      <div class={c.messageFooter}>
        {#if typeof footer === 'function'}
          {@render footer?.()}
        {:else}
          {printText(footer)}
        {/if}
      </div>
    {/if}
  </div>
</svelte:element>
