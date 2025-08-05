<script>
  import { DialogClasses } from '../../shared/classes/DialogClasses.js';
  import { DialogColors } from '../../shared/colors/DialogColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let {
    class: className,
    colors: colorsProp,

    ios = undefined,
    material = undefined,

    sizeIos = 'w-[16.875rem]',
    sizeMaterial = 'w-[19.5rem]',
    titleFontSizeIos = 'text-[18px]',
    titleFontSizeMaterial = 'text-[24px]',

    opened = false,
    backdrop = true,
    onBackdropClick = undefined,

    title,
    buttons,

    children,
    ...restProps
  } = $props();

  const state = $derived(opened ? 'opened' : 'closed');

  const dark = useDarkClasses();

  const colors = $derived(DialogColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      DialogClasses(
        {
          sizeIos,
          sizeMaterial,
          titleFontSizeIos,
          titleFontSizeMaterial,
        },
        colors,
        className
      )
    )
  );
</script>

{#if backdrop}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class={c.backdrop[state]} onclick={onBackdropClick}></div>
{/if}

<div class={c.base[state]} {...restProps}>
  <div class={c.contentWrap}>
    {#if title}
      <div class={c.title}>
        {#if typeof title !== 'function'}
          {printText(title)}
        {:else}
          {@render title?.()}
        {/if}
      </div>
    {/if}
    {#if children}
      <div class={c.content}>
        {@render children?.()}
      </div>
    {/if}
  </div>
  {#if buttons}
    <div class={c.buttons}>
      {@render buttons?.()}
    </div>
  {/if}
</div>
