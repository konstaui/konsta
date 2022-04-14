<script>
  import ListItem from './ListItem.svelte';

  export let active = false;
  export let href = undefined;
</script>

<ListItem
  menuListItem
  menuListItemActive={active}
  href={href || false}
  {...$$restProps}
>
  <svelte:fragment slot="title">
    {#if $$slots.title}
      <slot name="title" />
    {/if}
  </svelte:fragment>
  <svelte:fragment slot="media">
    {#if $$slots.media}
      <slot name="media" />
    {/if}
  </svelte:fragment>
  <svelte:fragment slot="header">
    {#if $$slots.header}
      <slot name="header" />
    {/if}
  </svelte:fragment>
  <!-- <slot name="header" slot="header" /> -->
  <svelte:fragment slot="after">
    {#if $$slots.after}
      <slot name="after" />
    {/if}
  </svelte:fragment>
  <svelte:fragment slot="subtitle">
    {#if $$slots.subtitle}
      <slot name="subtitle" />
    {/if}
  </svelte:fragment>
  <svelte:fragment slot="text">
    {#if $$slots.text}
      <slot name="text" />
    {/if}
  </svelte:fragment>
  <svelte:fragment slot="footer">
    {#if $$slots.footer}
      <slot name="footer" />
    {/if}
  </svelte:fragment>
  <svelte:fragment slot="inner">
    {#if $$slots.inner}
      <slot name="inner" />
    {/if}
  </svelte:fragment>
  <svelte:fragment slot="content">
    {#if $$slots.content}
      <slot name="content" />
    {/if}
  </svelte:fragment>

  <slot />
</ListItem>
