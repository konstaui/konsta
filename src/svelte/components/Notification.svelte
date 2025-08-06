<script>
  import { NotificationsClasses } from '../../shared/classes/NotificationsClasses.js';
  import { NotificationsColors } from '../../shared/colors/NotificationsColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { printText } from '../shared/print-text.js';
  import { useTheme } from '../shared/use-theme.js';
  import Glass from './Glass.svelte';

  import DeleteIcon from './icons/DeleteIcon.svelte';

  let {
    component = 'div',
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    onClose = undefined,
    onclose = undefined,
    button = undefined,
    title = '',
    titleRightText = '',
    subtitle = '',
    text = '',
    opened = false,

    onclick = undefined,
    onClick = undefined,

    icon,

    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const dark = useDarkClasses();
  const theme = $derived(useTheme({ ios, material }));

  const colors = $derived(NotificationsColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      NotificationsClasses({ opened }, colors, className)
    )
  );
</script>

{#if theme === 'ios'}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <Glass
    bind:this={el}
    {component}
    class={c.base}
    {...restProps}
    onclick={onClick || onclick}
  >
    {#if icon}
      <div class={c.icon}>{@render icon()}</div>
    {/if}
    <div class={c.content}>
      <div class={c.header}>
        {#if title}
          <div class={c.title}>
            {#if typeof title !== 'function'}
              {printText(title)}
            {:else}
              {@render title()}
            {/if}
          </div>
        {/if}
        {#if titleRightText}
          <div class={c.titleRightText}>
            {#if typeof titleRightText !== 'function'}
              {printText(titleRightText)}
            {:else}
              {@render titleRightText()}
            {/if}
          </div>
        {/if}
        {#if button}
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <div
            class={c.button}
            role="button"
            tabindex="0"
            onclick={onClose || onclose}
          >
            <DeleteIcon {theme} class={c.deleteIcon} />
            {#if typeof button === 'function'}
              {@render button()}
            {/if}
          </div>
        {/if}
      </div>
      {#if subtitle}
        <div class={c.subtitle}>
          {#if typeof subtitle !== 'function'}
            {printText(subtitle)}
          {:else}
            {@render subtitle()}
          {/if}
        </div>
      {/if}
      {#if text}
        <div class={c.text}>
          {#if typeof text !== 'function'}
            {printText(text)}
          {:else}
            {@render text()}
          {/if}
        </div>
      {/if}
      {@render children?.()}
    </div>
  </Glass>
{:else}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    bind:this={el}
    class={c.base}
    {...restProps}
    onclick={onClick || onclick}
  >
    <div class={c.header}>
      {#if icon}
        <div class={c.icon}>{@render icon()}</div>
      {/if}
      <div class={c.contentWrapper}>
        <div class={c.contentTitle}>
          {#if title}
            <div class={c.title}>
              {#if typeof title !== 'function'}
                {printText(title)}
              {:else}
                {@render title()}
              {/if}
            </div>
          {/if}
          {#if titleRightText}
            <div class={c.titleRightText}>
              {#if typeof titleRightText !== 'function'}
                {printText(titleRightText)}
              {:else}
                {@render titleRightText()}
              {/if}
            </div>
          {/if}
        </div>
        <div class={c.content}>
          {#if subtitle}
            <div class={c.subtitle}>
              {#if typeof subtitle !== 'function'}
                {printText(subtitle)}
              {:else}
                {@render subtitle()}
              {/if}
            </div>
          {/if}
          {#if text}
            <div class={c.text}>
              {#if typeof text !== 'function'}
                {printText(text)}
              {:else}
                {@render text()}
              {/if}
            </div>
          {/if}
          {@render children?.()}
        </div>
      </div>
      {#if button}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <div
          class={c.button}
          role="button"
          tabindex="0"
          onclick={onclose || onClose}
        >
          <DeleteIcon {theme} class={c.deleteIcon} />
          {#if typeof button === 'function'}
            {@render button()}
          {/if}
        </div>
      {/if}
    </div>
  </div>
{/if}
